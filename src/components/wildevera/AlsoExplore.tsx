"use client";

import Link from "next/link";

const ALL_PAGES = [
  {
    title: "Work With a VA",
    description: "Get reliable support that understands your business.",
    href: "/work-with-us",
    eyebrow: "For Businesses",
  },
  {
    title: "Sponsor a Future",
    description: "Help someone rebuild with dignity.",
    href: "/sponsor",
    eyebrow: "Make an Impact",
  },
  {
    title: "Guide Someone Forward",
    description: "Share your experience with someone starting again.",
    href: "/mentor",
    eyebrow: "Share Your Experience",
  },
  {
    title: "Join the Advisory Network",
    description: "Help shape the future of this work.",
    href: "/advisor",
    eyebrow: "Shape the Mission",
  },
];

interface AlsoExploreProps {
  currentPath: string; // e.g. "/sponsor" — filters out current page
}

export function AlsoExplore({ currentPath }: AlsoExploreProps) {
  const others = ALL_PAGES.filter((p) => p.href !== currentPath);

  return (
    <section
      style={{
        backgroundColor: "#F5F2EC",
        padding: "4rem 2rem",
        borderTop: "1px solid rgba(31,58,52,0.08)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.75rem",
            letterSpacing: "0.15em",
            color: "#C2A46D",
            textTransform: "uppercase",
            fontWeight: 600,
            marginBottom: "1.5rem",
            textAlign: "center",
          }}
        >
          Also Explore
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
          }}
        >
          {others.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(31,58,52,0.1)",
                borderRadius: 8,
                padding: "1.5rem",
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#C2A46D";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 8px 24px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(31,58,52,0.1)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  color: "#C2A46D",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  margin: 0,
                }}
              >
                {page.eyebrow}
              </p>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#1F3A34",
                  margin: 0,
                  lineHeight: 1.3,
                }}
              >
                {page.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.825rem",
                  color: "#8A7F78",
                  lineHeight: 1.65,
                  margin: 0,
                }}
              >
                {page.description}
              </p>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#C2A46D",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  marginTop: "0.25rem",
                }}
              >
                Learn More →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
