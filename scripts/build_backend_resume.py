from pathlib import Path
import re
import textwrap

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUT_DIR = ROOT / "docs" / "resume"
OUT_DIR.mkdir(parents=True, exist_ok=True)
PDF_OUT_DIR = ROOT / "output" / "pdf"
PDF_OUT_DIR.mkdir(parents=True, exist_ok=True)

RESUME_PDF = OUT_DIR / "Iasaldo-Batista-Backend-Resume.pdf"
FINAL_RESUME = PDF_OUT_DIR / "Iasaldo-Batista-Backend-Resume.pdf"
PUBLIC_RESUME = ROOT / "public" / "resume.pdf"
PUBLIC_CV = ROOT / "public" / "cv.pdf"
PUBLIC_LEGACY_CV = ROOT / "public" / "CV Back -End Inglês .pdf"

PAGE_W, PAGE_H = letter
LEFT = 50
RIGHT = PAGE_W - 50
TOP = PAGE_H - 44
BOTTOM = 38
WIDTH = RIGHT - LEFT

INK = colors.HexColor("#172033")
MUTED = colors.HexColor("#526072")
BLUE = colors.HexColor("#1F4D78")
RULE = colors.HexColor("#D4DCE7")
PILL = colors.HexColor("#EAF1F8")


def set_font(c, name="Helvetica", size=9, color=INK):
    c.setFont(name, size)
    c.setFillColor(color)


def wrap_text(text, chars):
    return textwrap.wrap(text, width=chars, break_long_words=False)


def draw_lines(c, text, x, y, chars=104, size=8.8, leading=10.5, color=INK, font="Helvetica"):
    set_font(c, font, size, color)
    for line in wrap_text(text, chars):
        c.drawString(x, y, line)
        y -= leading
    return y


def draw_rule(c, y):
    c.setStrokeColor(RULE)
    c.setLineWidth(0.7)
    c.line(LEFT, y, RIGHT, y)


def section(c, title, y):
    set_font(c, "Helvetica-Bold", 9.8, BLUE)
    c.drawString(LEFT, y, title.upper())
    y -= 5
    draw_rule(c, y)
    return y - 10


def bullet(c, text, x, y, chars=96, size=8.3, leading=9.7):
    lines = wrap_text(text, chars)
    set_font(c, "Helvetica", size, INK)
    c.drawString(x, y, "- " + lines[0])
    y -= leading
    for line in lines[1:]:
        c.drawString(x + 9, y, line)
        y -= leading
    return y - 1


def item_header(c, title, meta, y):
    set_font(c, "Helvetica-Bold", 8.9, INK)
    c.drawString(LEFT, y, title)
    set_font(c, "Helvetica", 8.0, MUTED)
    c.drawRightString(RIGHT, y, meta)
    return y - 11


def project(c, title, meta, stack, bullets, y):
    y = item_header(c, title, meta, y)
    y = draw_lines(c, stack, LEFT, y, chars=108, size=7.9, leading=9.2, color=MUTED)
    for text in bullets:
        y = bullet(c, text, LEFT + 8, y, chars=94, size=8.05, leading=9.35)
    return y - 4


def skill_line(c, label, text, y):
    set_font(c, "Helvetica-Bold", 8.3, INK)
    c.drawString(LEFT, y, label)
    label_width = c.stringWidth(label, "Helvetica-Bold", 8.3)
    set_font(c, "Helvetica", 8.25, INK)
    c.drawString(LEFT + label_width + 5, y, text)
    return y - 10.5


def link(c, text, url, x, y, align="left", size=8.0):
    set_font(c, "Helvetica", size, MUTED)
    if align == "right":
        c.drawRightString(x, y, text)
        w = c.stringWidth(text, "Helvetica", size)
        rect = (x - w, y - 2, x, y + size)
    else:
        c.drawString(x, y, text)
        w = c.stringWidth(text, "Helvetica", size)
        rect = (x, y - 2, x + w, y + size)
    c.linkURL(url, rect, relative=0)


def build(path):
    c = canvas.Canvas(str(path), pagesize=letter)
    c.setTitle("Iasaldo Batista - Backend Resume")
    c.setAuthor("Iasaldo Batista")
    c.setSubject("Junior Backend Developer Resume")
    c.setKeywords("Node.js, Express, REST API, PostgreSQL, JWT, RBAC, Backend Developer")

    y = TOP
    set_font(c, "Helvetica-Bold", 23, BLUE)
    c.drawString(LEFT, y, "Iasaldo Batista")
    y -= 15
    set_font(c, "Helvetica-Bold", 10.4, INK)
    c.drawString(LEFT, y, "Junior Backend Developer")

    contact_y = TOP - 2
    link(c, "iyosaldonbk@gmail.com", "mailto:iyosaldonbk@gmail.com", RIGHT, contact_y, align="right")
    contact_y -= 10
    link(c, "github.com/Iosaldo", "https://github.com/Iosaldo", RIGHT, contact_y, align="right")
    contact_y -= 10
    link(c, "linkedin.com/in/iasaldo-batista", "https://linkedin.com/in/iasaldo-batista", RIGHT, contact_y, align="right")
    contact_y -= 10
    link(c, "portifolio-iyosaldo.vercel.app", "https://portifolio-iyosaldo.vercel.app", RIGHT, contact_y, align="right")

    y -= 23
    draw_rule(c, y)
    y -= 12

    summary = (
        "Junior backend developer building complete API-driven projects with Node.js, Express, PostgreSQL, "
        "MongoDB and REST patterns. I translate business rules into maintainable endpoints, validation flows, "
        "database persistence and clear setup notes. I am ready to contribute to API tasks, bug fixes, "
        "integrations and production code under team review."
    )
    y = draw_lines(c, summary, LEFT, y, chars=111, size=8.65, leading=10.4)
    y -= 5

    y = section(c, "Technical Skills", y)
    y = skill_line(c, "Backend:", "Node.js, Express.js, REST APIs, CRUD, JWT Authentication, RBAC", y)
    y = skill_line(c, "Databases:", "PostgreSQL, MySQL, MongoDB, SQL, Data Modeling", y)
    y = skill_line(c, "API work:", "Request validation, error handling, API documentation, environment setup", y)
    y = skill_line(c, "Tools:", "Git, GitHub, Postman, Render, Vercel, VS Code, Basic CI/CD", y)
    y = skill_line(c, "Frontend collaboration:", "Next.js, React, HTML5, CSS3", y)
    y -= 4

    y = section(c, "Selected Backend Projects", y)
    y = project(
        c,
        "ShiftSync - Shift Management System",
        "2026",
        "Next.js, Node.js, Express, PostgreSQL, JWT, Role-Based Access",
        [
            "Built the product flow for restaurant shift scheduling, team operations, absences and shift swaps.",
            "Modeled scheduling rules for REST endpoints, PostgreSQL records and role-based actions.",
            "Published a functional prototype and prepared the structure for stronger tests and API documentation.",
        ],
        y,
    )
    y = project(
        c,
        "Portfolio & Feedback Management System",
        "2025",
        "Node.js, Express, Next.js, PostgreSQL, Vercel, Render",
        [
            "Created a backend path for feedback submission, message storage and private admin moderation.",
            "Connected a Next.js portfolio frontend to a Node.js/Express API and PostgreSQL persistence.",
            "Separated frontend and backend deployment while keeping the project easy to present and inspect.",
        ],
        y,
    )
    y = project(
        c,
        "Quick-Post API",
        "2024",
        "Node.js, Express, REST API, Layered Architecture",
        [
            "Created CRUD endpoints for post records and basic content management flows.",
            "Separated request handling, business rules and data access into controller/service/repository layers.",
            "Left a clear path for authentication, automated tests, and public endpoint documentation.",
        ],
        y,
    )

    y = section(c, "Education", y)
    education = [
        ("Backend Engineer Career Path, Codecademy", "2024 - Present", "Node.js, Express, REST APIs, databases, authentication, and software architecture patterns."),
        ("IT Technical-Professional Course, IFAC", "Jul 2021 - Oct 2022", "Programming logic, algorithms, operating systems, and computer networking."),
        ("Secondary Education - Science and Technology", "Sep 2015 - Sep 2018", "National High School of Sao Tome."),
    ]
    for title, year, detail in education:
        y = item_header(c, title, year, y)
        y = draw_lines(c, detail, LEFT, y, chars=110, size=7.95, leading=9.1, color=MUTED)
        y -= 2

    y = section(c, "Languages", y)
    y = skill_line(c, "Portuguese:", "Native", y)
    y = skill_line(c, "English:", "Intermediate / technical reading and professional writing", y)

    set_font(c, "Helvetica", 7.2, MUTED)
    c.drawString(LEFT, BOTTOM - 4, "Backend Resume | REST APIs, data validation, database persistence, and project documentation")
    c.save()


def validate_pdf(path):
    try:
        import pypdf
    except Exception:
        return
    reader = pypdf.PdfReader(str(path))
    text = "\n".join(page.extract_text() or "" for page in reader.pages)
    blocked = re.findall(
        r"(?i)\b(foco|focado|focused|focus|deployment-ready|hands-on|real-world|currently seeking|"
        r"i am looking for|recruiter signals|best fit|backend-first|robust|utilized|passionate)\b",
        text,
    )
    if len(reader.pages) != 1:
        raise RuntimeError(f"Expected 1 page, got {len(reader.pages)}")
    if blocked:
        raise RuntimeError(f"Blocked terms found: {blocked}")
    for required in ["Node.js", "Express", "PostgreSQL", "JWT", "ShiftSync", "Quick-Post API"]:
        if required not in text:
            raise RuntimeError(f"Missing required text: {required}")


if __name__ == "__main__":
    for output in [FINAL_RESUME, RESUME_PDF, PUBLIC_RESUME]:
        build(output)
        validate_pdf(output)
        print(output)
