from pathlib import Path
from PIL import Image, ImageDraw

SIZE = 128
STROKE = 6
BLACK = (17, 24, 39, 255)
OUT_DIR = Path("public/icons")


def canvas():
    img = Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))
    return img, ImageDraw.Draw(img)


def save(img, name: str):
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    img.save(OUT_DIR / name, "PNG")


def icon_section_tools():
    img, d = canvas()
    d.ellipse((12, 12, 116, 116), outline=BLACK, width=STROKE)
    d.line((64, 24, 64, 56), fill=BLACK, width=STROKE)
    d.line((64, 56, 42, 72), fill=BLACK, width=STROKE)
    d.line((64, 56, 86, 72), fill=BLACK, width=STROKE)
    d.line((52, 72, 72, 72), fill=BLACK, width=STROKE)
    d.line((52, 72, 60, 104), fill=BLACK, width=STROKE)
    d.line((72, 72, 60, 104), fill=BLACK, width=STROKE)
    save(img, "section-tools.png")


def icon_section_users():
    img, d = canvas()
    d.ellipse((12, 12, 116, 116), outline=BLACK, width=STROKE)
    d.ellipse((38, 34, 62, 58), outline=BLACK, width=STROKE)
    d.ellipse((66, 30, 94, 58), outline=BLACK, width=STROKE)
    d.arc((28, 56, 72, 98), 190, 350, fill=BLACK, width=STROKE)
    d.arc((58, 56, 102, 98), 190, 350, fill=BLACK, width=STROKE)
    save(img, "section-users.png")


def icon_chart():
    img, d = canvas()
    d.line((20, 108, 108, 108), fill=BLACK, width=STROKE)
    d.line((20, 108, 20, 22), fill=BLACK, width=STROKE)
    d.line((30, 92, 52, 74), fill=BLACK, width=STROKE)
    d.line((52, 74, 74, 80), fill=BLACK, width=STROKE)
    d.line((74, 80, 98, 44), fill=BLACK, width=STROKE)
    d.line((88, 44, 98, 44), fill=BLACK, width=STROKE)
    d.line((98, 44, 98, 56), fill=BLACK, width=STROKE)
    save(img, "item-impact.png")


def icon_balance():
    img, d = canvas()
    d.line((64, 20, 64, 104), fill=BLACK, width=STROKE)
    d.line((34, 34, 94, 34), fill=BLACK, width=STROKE)
    d.line((34, 34, 22, 62), fill=BLACK, width=STROKE)
    d.line((34, 34, 46, 62), fill=BLACK, width=STROKE)
    d.arc((14, 58, 54, 88), 0, 180, fill=BLACK, width=STROKE)
    d.line((94, 34, 82, 62), fill=BLACK, width=STROKE)
    d.line((94, 34, 106, 62), fill=BLACK, width=STROKE)
    d.arc((74, 58, 114, 88), 0, 180, fill=BLACK, width=STROKE)
    d.line((48, 104, 80, 104), fill=BLACK, width=STROKE)
    save(img, "item-compare.png")


def icon_clipboard():
    img, d = canvas()
    d.rounded_rectangle((28, 18, 100, 110), radius=10, outline=BLACK, width=STROKE)
    d.rounded_rectangle((46, 10, 82, 28), radius=8, outline=BLACK, width=STROKE)
    d.line((42, 56, 58, 72), fill=BLACK, width=STROKE)
    d.line((58, 72, 84, 46), fill=BLACK, width=STROKE)
    save(img, "item-review.png")


def icon_docs():
    img, d = canvas()
    d.rounded_rectangle((22, 26, 74, 98), radius=8, outline=BLACK, width=STROKE)
    d.rounded_rectangle((48, 18, 106, 104), radius=8, outline=BLACK, width=STROKE)
    d.line((60, 44, 94, 44), fill=BLACK, width=STROKE)
    d.line((60, 62, 94, 62), fill=BLACK, width=STROKE)
    d.line((60, 80, 86, 80), fill=BLACK, width=STROKE)
    save(img, "item-material.png")


def icon_check():
    img, d = canvas()
    d.ellipse((16, 16, 112, 112), outline=BLACK, width=STROKE)
    d.line((38, 66, 56, 84), fill=BLACK, width=STROKE)
    d.line((56, 84, 92, 44), fill=BLACK, width=STROKE)
    save(img, "list-check.png")


def icon_nav_risk_check():
    img, d = canvas()
    d.ellipse((16, 16, 112, 112), outline=BLACK, width=STROKE)
    d.polygon([(64, 28), (46, 66), (66, 66), (54, 100), (82, 54), (64, 54)], outline=BLACK)
    d.line((64, 28, 46, 66), fill=BLACK, width=STROKE)
    d.line((46, 66, 66, 66), fill=BLACK, width=STROKE)
    d.line((66, 66, 54, 100), fill=BLACK, width=STROKE)
    d.line((54, 100, 82, 54), fill=BLACK, width=STROKE)
    d.line((82, 54, 64, 54), fill=BLACK, width=STROKE)
    save(img, "nav-risk-check.png")


def icon_nav_how_to():
    img, d = canvas()
    d.rounded_rectangle((24, 14, 104, 114), radius=10, outline=BLACK, width=STROKE)
    d.rounded_rectangle((44, 8, 84, 28), radius=8, outline=BLACK, width=STROKE)
    d.line((40, 48, 90, 48), fill=BLACK, width=STROKE)
    d.line((40, 66, 90, 66), fill=BLACK, width=STROKE)
    d.line((40, 84, 74, 84), fill=BLACK, width=STROKE)
    save(img, "nav-how-to.png")


def icon_nav_knowledge():
    img, d = canvas()
    d.rounded_rectangle((16, 18, 112, 108), radius=8, outline=BLACK, width=STROKE)
    d.line((64, 18, 64, 108), fill=BLACK, width=STROKE)
    d.line((28, 40, 52, 40), fill=BLACK, width=STROKE)
    d.line((28, 58, 52, 58), fill=BLACK, width=STROKE)
    d.line((28, 76, 52, 76), fill=BLACK, width=STROKE)
    d.line((76, 40, 100, 40), fill=BLACK, width=STROKE)
    d.line((76, 58, 100, 58), fill=BLACK, width=STROKE)
    d.line((76, 76, 100, 76), fill=BLACK, width=STROKE)
    save(img, "nav-knowledge.png")


def icon_nav_retrospective():
    img, d = canvas()
    d.line((18, 108, 110, 108), fill=BLACK, width=STROKE)
    d.line((24, 104, 24, 68), fill=BLACK, width=STROKE)
    d.line((48, 104, 48, 44), fill=BLACK, width=STROKE)
    d.line((72, 104, 72, 58), fill=BLACK, width=STROKE)
    d.line((96, 104, 96, 30), fill=BLACK, width=STROKE)
    d.line((24, 66, 48, 42), fill=BLACK, width=STROKE)
    d.line((48, 42, 72, 56), fill=BLACK, width=STROKE)
    d.line((72, 56, 96, 28), fill=BLACK, width=STROKE)
    d.line((86, 28, 96, 28), fill=BLACK, width=STROKE)
    d.line((96, 28, 96, 38), fill=BLACK, width=STROKE)
    save(img, "nav-retrospective.png")


def icon_howto_overview():
    img, d = canvas()
    d.ellipse((18, 18, 110, 110), outline=BLACK, width=STROKE)
    d.ellipse((42, 42, 86, 86), outline=BLACK, width=STROKE)
    d.line((76, 76, 104, 104), fill=BLACK, width=STROKE)
    save(img, "howto-overview.png")


def icon_howto_input():
    img, d = canvas()
    d.rounded_rectangle((18, 28, 110, 100), radius=12, outline=BLACK, width=STROKE)
    d.line((36, 50, 92, 50), fill=BLACK, width=STROKE)
    d.ellipse((48, 42, 64, 58), outline=BLACK, width=STROKE)
    d.line((36, 68, 92, 68), fill=BLACK, width=STROKE)
    d.ellipse((68, 60, 84, 76), outline=BLACK, width=STROKE)
    d.line((36, 86, 92, 86), fill=BLACK, width=STROKE)
    d.ellipse((56, 78, 72, 94), outline=BLACK, width=STROKE)
    save(img, "howto-input.png")


def icon_howto_risk():
    img, d = canvas()
    d.polygon([(64, 18), (108, 104), (20, 104)], outline=BLACK)
    d.line((64, 18, 108, 104), fill=BLACK, width=STROKE)
    d.line((108, 104, 20, 104), fill=BLACK, width=STROKE)
    d.line((20, 104, 64, 18), fill=BLACK, width=STROKE)
    d.line((64, 46, 64, 76), fill=BLACK, width=STROKE)
    d.ellipse((58, 86, 70, 98), outline=BLACK, width=STROKE)
    save(img, "howto-risk.png")


def icon_howto_chart():
    img, d = canvas()
    d.line((20, 108, 108, 108), fill=BLACK, width=STROKE)
    d.line((20, 108, 20, 22), fill=BLACK, width=STROKE)
    d.line((32, 90, 52, 70), fill=BLACK, width=STROKE)
    d.line((52, 70, 74, 78), fill=BLACK, width=STROKE)
    d.line((74, 78, 98, 40), fill=BLACK, width=STROKE)
    d.ellipse((92, 34, 104, 46), outline=BLACK, width=STROKE)
    save(img, "howto-chart.png")


def icon_howto_score():
    img, d = canvas()
    d.arc((20, 30, 108, 118), 200, 340, fill=BLACK, width=STROKE)
    d.line((64, 74, 90, 56), fill=BLACK, width=STROKE)
    d.ellipse((56, 66, 72, 82), outline=BLACK, width=STROKE)
    d.line((32, 96, 96, 96), fill=BLACK, width=STROKE)
    save(img, "howto-score.png")


def icon_howto_people():
    img, d = canvas()
    d.ellipse((34, 24, 58, 48), outline=BLACK, width=STROKE)
    d.ellipse((70, 24, 94, 48), outline=BLACK, width=STROKE)
    d.arc((24, 46, 68, 90), 190, 350, fill=BLACK, width=STROKE)
    d.arc((60, 46, 104, 90), 190, 350, fill=BLACK, width=STROKE)
    d.rounded_rectangle((26, 86, 102, 108), radius=10, outline=BLACK, width=STROKE)
    save(img, "howto-people.png")


def icon_howto_steps():
    img, d = canvas()
    d.rounded_rectangle((20, 20, 108, 108), radius=10, outline=BLACK, width=STROKE)
    d.line((36, 44, 92, 44), fill=BLACK, width=STROKE)
    d.line((36, 64, 92, 64), fill=BLACK, width=STROKE)
    d.line((36, 84, 76, 84), fill=BLACK, width=STROKE)
    d.line((22, 44, 30, 52), fill=BLACK, width=STROKE)
    d.line((30, 52, 42, 36), fill=BLACK, width=STROKE)
    save(img, "howto-steps.png")


def icon_howto_history():
    img, d = canvas()
    d.arc((18, 18, 110, 110), 40, 330, fill=BLACK, width=STROKE)
    d.line((90, 24, 110, 24), fill=BLACK, width=STROKE)
    d.line((110, 24, 110, 44), fill=BLACK, width=STROKE)
    d.line((64, 40, 64, 66), fill=BLACK, width=STROKE)
    d.line((64, 66, 84, 76), fill=BLACK, width=STROKE)
    save(img, "howto-history.png")


def icon_howto_links():
    img, d = canvas()
    d.rounded_rectangle((16, 42, 64, 90), radius=12, outline=BLACK, width=STROKE)
    d.rounded_rectangle((64, 38, 112, 86), radius=12, outline=BLACK, width=STROKE)
    d.line((56, 66, 72, 66), fill=BLACK, width=STROKE)
    save(img, "howto-links.png")


def icon_howto_notice():
    img, d = canvas()
    d.rounded_rectangle((20, 16, 108, 112), radius=12, outline=BLACK, width=STROKE)
    d.line((64, 38, 64, 72), fill=BLACK, width=STROKE)
    d.ellipse((58, 82, 70, 94), outline=BLACK, width=STROKE)
    save(img, "howto-notice.png")


if __name__ == "__main__":
    icon_section_tools()
    icon_section_users()
    icon_chart()
    icon_balance()
    icon_clipboard()
    icon_docs()
    icon_check()
    icon_nav_risk_check()
    icon_nav_how_to()
    icon_nav_knowledge()
    icon_nav_retrospective()
    icon_howto_overview()
    icon_howto_input()
    icon_howto_risk()
    icon_howto_chart()
    icon_howto_score()
    icon_howto_people()
    icon_howto_steps()
    icon_howto_history()
    icon_howto_links()
    icon_howto_notice()
