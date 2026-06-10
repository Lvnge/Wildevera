"use client";

import { Leaf } from "lucide-react";
import { SharedNavbar, SharedFooter } from "@/components/wildevera/shared";
import { AlsoExplore } from "@/components/wildevera/AlsoExplore";
import Link from "next/link";

const WHAT_IT_LOOKS_LIKE = [
  {
    title: "Occasional guidance",
    desc: "A monthly Zoom call or local meetup — no daily commitment required.",
  },
  {
    title: "Skill-based coaching",
    desc: "Share what you know: systems, communication, client management, growth.",
  },
  {
    title: "Real-world advice",
    desc: "The kind of insight that only comes from having actually done the work.",
  },
  {
    title: "Encouragement when it matters",
    desc: "Sometimes the most powerful thing is someone who believes in what you can become.",
  },
];

const WHO_WE_NEED = [
  "Administrative professionals",
  "Business owners (any size)",
  "Marketing & brand specialists",
  "Operations & systems thinkers",
  "Client-facing professionals",
  "People who care about people",
];

export default function MentorPage() {
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
              Share Your Experience
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
              Your Experience Could Change Someone&apos;s Direction
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
              Share what you know with someone building a new path — in a way
              that fits your schedule. This is not a full-time commitment.
              It&apos;s showing up when you can — and meaning it.
            </p>
            <a
              href="#mentor-form"
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
              Apply to Mentor
            </a>
          </div>
        </section>

        {/* What Mentoring Looks Like */}
        <section style={{ backgroundColor: "#F5F2EC", padding: "5rem 2rem" }}>
          <div style={{ maxWidth: 1280, margin: "0 auto" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "5rem",
                alignItems: "start",
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
                  What Mentoring Looks Like
                </p>
                <h2
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                    fontWeight: 700,
                    color: "#1F3A34",
                    lineHeight: 1.25,
                    marginBottom: "1.25rem",
                  }}
                >
                  One Hour. Real Impact.
                </h2>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    color: "#8A7F78",
                    lineHeight: 1.9,
                    marginBottom: "2rem",
                  }}
                >
                  Minimum one hour per month — via Zoom or in person in your
                  local area. No curriculum, no rigid structure. Just a real
                  professional making time for someone who needs the kind of
                  guidance only lived experience can give.
                </p>
                <div
                  style={{
                    backgroundColor: "#1F3A34",
                    borderRadius: 8,
                    padding: "1.75rem 2rem",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontStyle: "italic",
                      fontSize: "1.2rem",
                      color: "#F5F2EC",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    &ldquo;This is not a full-time commitment. It&apos;s showing
                    up when you can — and meaning it.&rdquo;
                  </p>
                </div>
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {WHAT_IT_LOOKS_LIKE.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid rgba(31,58,52,0.1)",
                      borderRadius: 8,
                      padding: "1.5rem 1.75rem",
                      borderLeft: "3px solid #C2A46D",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontWeight: 700,
                        color: "#1F3A34",
                        fontSize: "1rem",
                        marginBottom: "0.35rem",
                      }}
                    >
                      {item.title}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        color: "#8A7F78",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Who We're Looking For */}
        <section style={{ backgroundColor: "#2B2B2B", padding: "5rem 2rem" }}>
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
                  Who We&apos;re Looking For
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
                  You Don&apos;t Need a Title. You Need to Care.
                </h2>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    color: "rgba(245,242,236,0.7)",
                    lineHeight: 1.9,
                  }}
                >
                  We&apos;re looking for professionals who have built something,
                  navigated challenges, and are willing to pass that knowledge
                  on. If you have experience and a genuine desire to help
                  someone grow, you&apos;re exactly who we need.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                }}
              >
                {WHO_WE_NEED.map((item, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: "rgba(245,242,236,0.05)",
                      border: "1px solid rgba(194,164,109,0.2)",
                      borderRadius: 6,
                      padding: "1rem 1.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        backgroundColor: "#C2A46D",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        color: "rgba(245,242,236,0.8)",
                        fontWeight: 500,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Application Form Placeholder */}
        <section
          id="mentor-form"
          style={{ backgroundColor: "#F5F2EC", padding: "5rem 2rem" }}
        >
          <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
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
              Apply to Mentor
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 700,
                color: "#1F3A34",
                lineHeight: 1.25,
                marginBottom: "1.25rem",
              }}
            >
              Become a Mentor
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "#8A7F78",
                lineHeight: 1.8,
                marginBottom: "2.5rem",
              }}
            >
              Tell us about your experience and availability. We&apos;ll review
              your application and match you with a VA who can benefit from
              exactly what you bring to the table.
            </p>
            <div
              style={{
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(31,58,52,0.1)",
                borderRadius: 8,
                padding: "3rem",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  backgroundColor: "rgba(194,164,109,0.12)",
                  border: "1px solid rgba(194,164,109,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Leaf size={22} color="#C2A46D" strokeWidth={1.5} />
              </div>
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#1F3A34",
                  margin: 0,
                }}
              >
                Application Form Coming Soon
              </p>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  color: "#8A7F78",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                In the meantime, reach us at{" "}
                <a
                  href="mailto:hello@wildevera.com"
                  style={{ color: "#C2A46D", fontWeight: 600 }}
                >
                  hello@wildevera.com
                </a>{" "}
                — include your background and availability.
              </p>
              <Link
                href="/#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  backgroundColor: "#1F3A34",
                  color: "#F5F2EC",
                  padding: "0.9rem 2rem",
                  borderRadius: 4,
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "all 0.2s",
                  marginTop: "0.5rem",
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
                Contact Us Now
              </Link>
            </div>
          </div>
        </section>
      </main>
      <AlsoExplore currentPath="/mentor" />
      <SharedFooter />
    </>
  );
}
