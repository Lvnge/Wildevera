"use client";

import { Leaf } from "lucide-react";
import { SharedNavbar, SharedFooter } from "@/components/wildevera/shared";
import { AlsoExplore } from "@/components/wildevera/AlsoExplore";
import Link from "next/link";

const NETWORK_PERKS = [
  {
    title: "Quarterly Zoom discussions",
    desc: "Sit at the table with the Wildevera team and fellow advisors for strategic conversation.",
  },
  {
    title: "Monthly updates & projections",
    desc: "Stay informed on where we are, where we're going, and what challenges we're navigating.",
  },
  {
    title: "Strategic input opportunities",
    desc: "Your experience shapes decisions — on product, partnerships, programs, and growth.",
  },
  {
    title: "Feedback loops",
    desc: "Direct channels to share observations, raise concerns, and propose improvements.",
  },
  {
    title: "Occasional advisory opportunities",
    desc: "For those who want to go deeper — direct advisory engagements as they arise.",
  },
];

const WHY_IT_MATTERS = [
  {
    word: "Wisdom",
    desc: "Built on the experience of people who have navigated what we're navigating.",
  },
  {
    word: "Integrity",
    desc: "Every decision made with honesty, transparency, and the mission at the center.",
  },
  {
    word: "Lived experience",
    desc: "Real voices from the communities we serve and the industries we work within.",
  },
];

export default function AdvisorPage() {
  return (
    <>
      <SharedNavbar />
      <main style={{ paddingTop: 80 }}>
        {/* Hero */}
        <section
          style={{
            backgroundColor: "#1F3A34",
            padding: "6rem 2rem 5rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              maxWidth: 760,
              margin: "0 auto",
              position: "relative",
              zIndex: 1,
            }}
          >
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                color: "#C2A46D",
                textTransform: "uppercase",
                marginBottom: "1rem",
                fontWeight: 600,
              }}
            >
              Shape the Mission
            </p>
            <h1
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.2rem, 5vw, 3.5rem)",
                fontWeight: 700,
                color: "#F5F2EC",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
              }}
            >
              Help Shape What Wildevera Becomes
            </h1>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.1rem",
                color: "rgba(245,242,236,0.75)",
                lineHeight: 1.85,
                marginBottom: "2.5rem",
                maxWidth: 580,
              }}
            >
              We&apos;re building something intentional — and we want
              experienced voices at the table. Not a board. Not a panel. A
              network of people who genuinely care about where this goes.
            </p>
            <a
              href="#advisor-form"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                backgroundColor: "#C2A46D",
                color: "#1F3A34",
                padding: "1rem 2.5rem",
                borderRadius: 4,
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 700,
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "#d4b67e";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "#C2A46D";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <Leaf size={15} color="#1F3A34" strokeWidth={1.5} />
              Join the Network
            </a>
          </div>
        </section>

        {/* About the Network */}
        <section style={{ backgroundColor: "#F5F2EC", padding: "5rem 2rem" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  letterSpacing: "0.15em",
                  color: "#C2A46D",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                  fontWeight: 600,
                }}
              >
                About the Network
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  fontWeight: 700,
                  color: "#1F3A34",
                  lineHeight: 1.25,
                  marginBottom: "1rem",
                }}
              >
                A Seat at the Table. A Voice in the Room.
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  color: "#8A7F78",
                  maxWidth: 560,
                  margin: "0 auto",
                  lineHeight: 1.8,
                }}
              >
                This is not about titles or affiliations. It&apos;s about people
                with real experience investing a small amount of time to make a
                real organization better.
              </p>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {NETWORK_PERKS.map((perk, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(31,58,52,0.1)",
                    borderRadius: 8,
                    padding: "1.75rem",
                    borderLeft: "3px solid #C2A46D",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#1F3A34",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {perk.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "#8A7F78",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {perk.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why It Matters */}
        <section style={{ backgroundColor: "#1F3A34", padding: "5rem 2rem" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "5rem",
                alignItems: "center",
              }}
              className="mission-grid"
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    letterSpacing: "0.15em",
                    color: "#C2A46D",
                    textTransform: "uppercase",
                    marginBottom: "1rem",
                    fontWeight: 600,
                  }}
                >
                  Why It Matters
                </p>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    fontWeight: 700,
                    color: "#F5F2EC",
                    lineHeight: 1.25,
                    marginBottom: "1.25rem",
                  }}
                >
                  Wildevera Is Not Just a Service. It&apos;s a Model.
                </h2>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    color: "rgba(245,242,236,0.75)",
                    lineHeight: 1.9,
                  }}
                >
                  We&apos;re building a framework that other organizations can
                  learn from and build upon. The advisors who help shape it
                  become part of something that outlasts any single product or
                  placement. This is legacy-level work.
                </p>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                {WHY_IT_MATTERS.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: "rgba(245,242,236,0.06)",
                      border: "1px solid rgba(194,164,109,0.2)",
                      borderRadius: 8,
                      padding: "1.75rem 2rem",
                    }}
                  >
                    <h3
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "#C2A46D",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {item.word}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.9rem",
                        color: "rgba(245,242,236,0.7)",
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Placeholder */}
        <section
          id="advisor-form"
          style={{ backgroundColor: "#F5F2EC", padding: "5rem 2rem" }}
        >
          <div style={{ maxWidth: 580, margin: "0 auto", textAlign: "center" }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.18em",
                color: "#C2A46D",
                textTransform: "uppercase",
                marginBottom: "1rem",
                fontWeight: 700,
              }}
            >
              Apply to Join
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "#1F3A34",
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              Apply to Join the Advisory Network
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "#6B6360",
                lineHeight: 1.85,
                marginBottom: "2.5rem",
              }}
            >
              Tell us about your background, your expertise, and why
              Wildevera&apos;s mission resonates with you. We review every
              application personally.
            </p>

            <Link
              href="https://form.jotform.com/261294721832862"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                backgroundColor: "#1F3A34",
                color: "#F5F2EC",
                padding: "0.9rem 2rem",
                borderRadius: 4,
                textDecoration: "none",
                fontSize: "0.8rem",
                fontWeight: 700,
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.09em",
                textTransform: "uppercase",
                transition: "background 0.18s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "#2a4f47";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "#1F3A34";
              }}
            >
              Apply now →
            </Link>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                color: "#9A9490",
                lineHeight: 1.6,
                marginTop: "1.5rem",
              }}
            >
              Questions? Reach us at{" "}
              <a
                href="mailto:hello@wildevera.com"
                style={{
                  color: "#C2A46D",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                hello@wildevera.com
              </a>
            </p>
          </div>
        </section>
      </main>
      <AlsoExplore currentPath="/advisor" />
      <SharedFooter />
    </>
  );
}
