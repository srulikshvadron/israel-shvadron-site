#!/usr/bin/env python3
"""Cut transparent layers out of the supplied profile logo.

The source is the square profile image. Nothing is redrawn: each layer is
the original pixels, split so the flow line, gears, check, and status dot
can move independently and still stack back into the same picture.
"""

from __future__ import annotations

import json
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "public" / "brand" / "logo-square.png"
OUT = ROOT / "public" / "brand" / "flow"

# Full-image anchors measured from logo-profile-v6.png.
CHECK = (286, 628)
CHECK_R = 27
GEAR_LG = (581, 626)
GEAR_LG_R = 40
GEAR_SM = (639, 629)
GEAR_SM_R = 30
DOT_BOX = (660, 290, 790, 430)
# Four gray dots, left to right.
PIP_BOXES = [
    (770, 590, 792, 618),
    (793, 590, 815, 618),
    (816, 590, 838, 618),
    (839, 590, 862, 618),
]


def is_strong_teal(r: int, g: int, b: int) -> bool:
    return g >= 100 and b >= 80 and g >= r + 30


def is_soft_teal(r: int, g: int, b: int) -> bool:
    return g >= r + 14 and b >= r + 8 and (g + b) >= 100


def is_white(r: int, g: int, b: int) -> bool:
    lum = (r + g + b) / 3
    return lum >= 150 and max(r, g, b) - min(r, g, b) < 36


def is_soft_white(r: int, g: int, b: int) -> bool:
    lum = (r + g + b) / 3
    return lum >= 90 and max(r, g, b) - min(r, g, b) < 32


def dist(x: int, y: int, point: tuple[int, int]) -> float:
    return ((x - point[0]) ** 2 + (y - point[1]) ** 2) ** 0.5


def horizontal_runs(strong: list[list[bool]], width: int, height: int) -> list[list[int]]:
    runs = [[0] * width for _ in range(height)]
    for y in range(height):
        x = 0
        while x < width:
            if not strong[y][x]:
                x += 1
                continue
            start = x
            while x < width and strong[y][x]:
                x += 1
            length = x - start
            for i in range(start, x):
                runs[y][i] = length
    return runs


def main() -> None:
    image = Image.open(SOURCE).convert("RGB")
    width, height = image.size
    pixels = image.load()
    strong = [[False] * width for _ in range(height)]
    for y in range(height):
        for x in range(width):
            if is_strong_teal(*pixels[x, y]):
                strong[y][x] = True
    runs = horizontal_runs(strong, width, height)

    labels = [[""] * width for _ in range(height)]

    def claim(x: int, y: int, label: str) -> None:
        if labels[y][x] == "":
            labels[y][x] = label

    for y in range(height):
        for x in range(width):
            r, g, b = pixels[x, y]
            teal = is_strong_teal(r, g, b)
            white = is_white(r, g, b)
            if not teal and not white:
                continue

            if DOT_BOX[0] <= x <= DOT_BOX[2] and DOT_BOX[1] <= y <= DOT_BOX[3] and teal:
                claim(x, y, "dot")
                continue

            if dist(x, y, CHECK) <= CHECK_R and (teal or white):
                claim(x, y, "check")
                continue

            pip_hit = False
            for index, box in enumerate(PIP_BOXES):
                if box[0] <= x <= box[2] and box[1] <= y <= box[3] and white:
                    claim(x, y, f"pip-{index + 1}")
                    pip_hit = True
                    break
            if pip_hit:
                continue

            if white and 360 <= y <= 592 and 160 <= x <= 900:
                claim(x, y, "word")
                continue

            if not teal or y < 480 or y > 680:
                continue

            to_lg = dist(x, y, GEAR_LG)
            to_sm = dist(x, y, GEAR_SM)
            if 12 <= to_lg <= GEAR_LG_R and runs[y][x] < 36:
                claim(x, y, "gear-lg")
                continue
            if 8 <= to_sm <= GEAR_SM_R and runs[y][x] < 36 and to_lg > GEAR_LG_R:
                claim(x, y, "gear-sm")
                continue
            claim(x, y, "line")

    # Pull antialiased edges onto the nearest hard pixel so the cuts stay smooth.
    neighbors = ((1, 0), (-1, 0), (0, 1), (0, -1), (1, 1), (1, -1), (-1, 1), (-1, -1))
    for _ in range(5):
        grow: list[tuple[int, int, str]] = []
        for y in range(1, height - 1):
            for x in range(1, width - 1):
                if labels[y][x]:
                    continue
                r, g, b = pixels[x, y]
                if not (is_soft_teal(r, g, b) or is_soft_white(r, g, b)):
                    continue
                found = ""
                for dx, dy in neighbors:
                    found = labels[y + dy][x + dx]
                    if found:
                        break
                if found:
                    grow.append((x, y, found))
        for x, y, label in grow:
            labels[y][x] = label

    names = ["word", "line", "dot", "check", "gear-lg", "gear-sm", "pip-1", "pip-2", "pip-3", "pip-4"]
    min_x, min_y, max_x, max_y = width, height, 0, 0
    counts = {name: 0 for name in names}
    for y in range(height):
        for x in range(width):
            label = labels[y][x]
            if not label:
                continue
            counts[label] += 1
            min_x = min(min_x, x)
            min_y = min(min_y, y)
            max_x = max(max_x, x)
            max_y = max(max_y, y)

    pad = 10
    x0 = max(0, min_x - pad)
    y0 = max(0, min_y - pad)
    x1 = min(width, max_x + pad + 1)
    y1 = min(height, max_y + pad + 1)
    band_w = x1 - x0
    band_h = y1 - y0
    print("band", x0, y0, x1, y1, band_w, band_h)
    print("counts", counts)

    OUT.mkdir(parents=True, exist_ok=True)
    layers = {name: Image.new("RGBA", (band_w, band_h), (0, 0, 0, 0)) for name in names}
    layer_px = {name: layers[name].load() for name in names}
    for y in range(y0, y1):
        for x in range(x0, x1):
            label = labels[y][x]
            if not label:
                continue
            r, g, b = pixels[x, y]
            layer_px[label][x - x0, y - y0] = (r, g, b, 255)

    for name, layer in layers.items():
        layer.save(OUT / f"{name}.png")

    def save_mark(name: str, center: tuple[int, int], radius: int) -> None:
        side = (radius + 8) * 2
        left = int(center[0] - x0 - side / 2)
        top = int(center[1] - y0 - side / 2)
        layers[name].crop((left, top, left + side, top + side)).save(OUT / f"{name}-mark.png")

    save_mark("gear-lg", GEAR_LG, GEAR_LG_R)
    save_mark("gear-sm", GEAR_SM, GEAR_SM_R)
    save_mark("check", CHECK, CHECK_R + 8)
    save_mark("dot", (720, 354), 46)

    def gear_box(center: tuple[int, int], radius: int) -> dict[str, float]:
        side = (radius + 8) * 2
        left = center[0] - x0 - side / 2
        top = center[1] - y0 - side / 2
        return {
            "originX": round((center[0] - x0) / band_w, 5),
            "originY": round((center[1] - y0) / band_h, 5),
            "left": round(left / band_w, 5),
            "top": round(top / band_h, 5),
            "size": round(side / band_w, 5),
        }

    layout = {
        "source": "public/brand/logo-square.png",
        "width": band_w,
        "height": band_h,
        "gears": {
            "lg": gear_box(GEAR_LG, GEAR_LG_R),
            "sm": gear_box(GEAR_SM, GEAR_SM_R),
        },
    }
    (OUT / "layout.json").write_text(json.dumps(layout, indent=2) + "\n")
    print(json.dumps(layout, indent=2))

    # Composite on the original background so a diff shows missed or stolen pixels.
    background = pixels[20, 20]
    composite = Image.new("RGB", (band_w, band_h), background)
    for name in ("word", "line", "gear-lg", "gear-sm", "check", "dot", "pip-1", "pip-2", "pip-3", "pip-4"):
        composite.paste(layers[name], (0, 0), layers[name])
    original = image.crop((x0, y0, x1, y1))
    diff = Image.new("RGB", (band_w, band_h), (0, 0, 0))
    diff_px = diff.load()
    comp_px = composite.load()
    orig_px = original.load()
    missed = 0
    for y in range(band_h):
        for x in range(band_w):
            o = orig_px[x, y]
            c = comp_px[x, y]
            delta = abs(o[0] - c[0]) + abs(o[1] - c[1]) + abs(o[2] - c[2])
            if delta > 80 and (is_strong_teal(*o) or is_white(*o)):
                missed += 1
                diff_px[x, y] = (255, 0, 0)
            elif delta > 80:
                diff_px[x, y] = (0, 40, 0)
    preview = Image.new("RGB", (band_w, band_h * 2 + 8), (0, 0, 0))
    preview.paste(original, (0, 0))
    preview.paste(composite, (0, band_h + 8))
    preview.save("/tmp/flow-compare.png")
    diff.save("/tmp/flow-diff.png")
    print("missed strong pixels", missed)


if __name__ == "__main__":
    main()
