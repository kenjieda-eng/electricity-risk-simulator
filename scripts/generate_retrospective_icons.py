from pathlib import Path

from PIL import Image, ImageDraw


SIZE = 512
STROKE = 18
BLACK = (17, 24, 39, 255)
TRANSPARENT = (0, 0, 0, 0)


def new_canvas():
    image = Image.new("RGBA", (SIZE, SIZE), TRANSPARENT)
    return image, ImageDraw.Draw(image)


def save(image: Image.Image, name: str) -> None:
    output_dir = Path(__file__).resolve().parent.parent / "public" / "icons" / "retrospective"
    output_dir.mkdir(parents=True, exist_ok=True)
    image.save(output_dir / name, "PNG")


def circle(draw: ImageDraw.ImageDraw, box):
    draw.ellipse(box, outline=BLACK, width=STROKE)


def line(draw: ImageDraw.ImageDraw, points, width=STROKE):
    draw.line(points, fill=BLACK, width=width, joint="curve")


def poly(draw: ImageDraw.ImageDraw, points):
    draw.polygon(points, outline=BLACK, fill=TRANSPARENT, width=STROKE)


def icon_ukraine_shock():
    image, draw = new_canvas()
    circle(draw, (54, 60, 198, 204))
    line(draw, [(96, 132), (156, 132)])
    line(draw, [(126, 102), (126, 162)])
    line(draw, [(252, 384), (252, 144), (438, 144)])
    line(draw, [(276, 340), (322, 280), (362, 306), (430, 186)])
    poly(draw, [(414, 188), (454, 172), (436, 212)])
    line(draw, [(230, 420), (462, 420)], width=12)
    save(image, "ukraine-shock-overview.png")


def icon_price_rise():
    image, draw = new_canvas()
    poly(draw, [(58, 304), (120, 250), (184, 286), (184, 366), (58, 366)])
    line(draw, [(84, 324), (160, 324)], width=12)
    line(draw, [(260, 90), (260, 214)])
    poly(draw, [(222, 120), (260, 82), (298, 120)])
    line(draw, [(378, 232), (378, 340)])
    line(draw, [(326, 286), (430, 286)])
    poly(draw, [(430, 286), (392, 254), (392, 318)])
    circle(draw, (216, 250, 332, 366))
    line(draw, [(260, 282), (260, 334)])
    line(draw, [(236, 308), (284, 308)])
    line(draw, [(184, 326), (216, 308)])
    line(draw, [(332, 308), (350, 308), (378, 286)])
    save(image, "price-rise-causes.png")


def icon_voltage_class():
    image, draw = new_canvas()
    line(draw, [(66, 418), (446, 418)], width=12)
    heights = [176, 228, 292, 344]
    x_positions = [92, 186, 280, 374]
    for x, top in zip(x_positions, heights):
        draw.rounded_rectangle((x, top, x + 46, 418), radius=10, outline=BLACK, width=STROKE)
    line(draw, [(94, 144), (400, 144)], width=12)
    poly(draw, [(400, 144), (358, 118), (358, 170)])
    line(draw, [(118, 96), (118, 148)])
    line(draw, [(108, 108), (128, 108)], width=10)
    line(draw, [(102, 126), (134, 126)], width=10)
    line(draw, [(208, 118), (208, 146)])
    draw.rounded_rectangle((192, 92, 224, 118), radius=6, outline=BLACK, width=12)
    line(draw, [(302, 98), (302, 136)])
    line(draw, [(284, 136), (320, 136)])
    line(draw, [(398, 96), (398, 136)])
    circle(draw, (382, 136, 414, 168))
    save(image, "voltage-class-diff.png")


def icon_contract_practice():
    image, draw = new_canvas()
    draw.rounded_rectangle((74, 88, 246, 338), radius=18, outline=BLACK, width=STROKE)
    line(draw, [(112, 150), (208, 150)], width=12)
    line(draw, [(112, 202), (208, 202)], width=12)
    line(draw, [(112, 254), (182, 254)], width=12)
    line(draw, [(286, 138), (378, 230)])
    line(draw, [(378, 138), (286, 230)])
    poly(draw, [(332, 300), (278, 392), (386, 392)])
    line(draw, [(332, 334), (332, 364)])
    circle(draw, (320, 374, 344, 398))
    save(image, "contract-practice.png")


def icon_hormuz_lessons():
    image, draw = new_canvas()
    line(draw, [(122, 76), (82, 192), (100, 318), (74, 436)])
    line(draw, [(392, 76), (432, 192), (414, 318), (440, 436)])
    poly(draw, [(178, 292), (286, 292), (320, 328), (150, 328)])
    line(draw, [(210, 258), (256, 258)])
    line(draw, [(228, 226), (228, 258)])
    line(draw, [(336, 138), (394, 138)])
    poly(draw, [(394, 138), (362, 112), (362, 164)])
    line(draw, [(154, 380), (202, 396), (246, 372), (294, 392), (344, 376)])
    save(image, "hormuz-lessons.png")


def main():
    icon_ukraine_shock()
    icon_price_rise()
    icon_voltage_class()
    icon_contract_practice()
    icon_hormuz_lessons()


if __name__ == "__main__":
    main()
