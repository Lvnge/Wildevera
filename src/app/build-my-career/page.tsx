"use client";

//import { Leaf } from "lucide-react";
import { SharedNavbar, SharedFooter } from "@/components/wildevera/shared";
import Link from "next/link";

export default function BuildMyCareerPage() {
  return (
    <>
      <SharedNavbar />
      <main style={{ paddingTop: 80 }}>
        {/* ── Hero ── */}
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
              For Virtual Assistants
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
              Build Your Career.
              <br />
              <span style={{ color: "#C2A46D" }}>On Your Terms.</span>
            </h1>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.1rem",
                color: "rgba(245,242,236,0.75)",
                lineHeight: 1.85,
                maxWidth: 580,
              }}
            >
              You have the skills. You have the drive. What you need is a path —
              and people who believe you can walk it.
              <br />
              <br />
              Wildevera offers training, placement, mentorship, and a community
              built around one belief: that dignified work changes lives.
              We&apos;re not here to hand you something. We&apos;re here to walk
              alongside you while you build it.
            </p>
          </div>
        </section>

        {/* ── Video placeholder ── */}
        <section style={{ backgroundColor: "#F5F2EC", padding: "5rem 2rem" }}>
          <div style={{ maxWidth: 860, margin: "0 auto" }}>
            <div style={{ textAlign: "center", marginBottom: "3rem" }}>
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
                Hear From Jessica
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  fontWeight: 700,
                  color: "#1F3A34",
                  lineHeight: 1.25,
                }}
              >
                A Message From Our Founder
              </h2>
            </div>

            {/* Video embed placeholder */}
            <div
              style={{
                backgroundColor: "#1F3A34",
                borderRadius: 12,
                aspectRatio: "16/9",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.25rem",
                border: "1px solid rgba(194,164,109,0.2)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Decorative circles */}
              {[300, 480].map((size, i) => (
                <div
                  key={i}
                  style={{
                    position: "absolute",
                    bottom: -(size / 3),
                    right: -(size / 3),
                    width: size,
                    height: size,
                    borderRadius: "50%",
                    border: "1px solid rgba(194,164,109,0.06)",
                    pointerEvents: "none",
                  }}
                />
              ))}

              {/* Play button */}
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  backgroundColor: "rgba(194,164,109,0.15)",
                  border: "2px solid #C2A46D",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="#C2A46D"
                  stroke="none"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>

              <div
                style={{ textAlign: "center", position: "relative", zIndex: 1 }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "#F5F2EC",
                    marginBottom: "0.35rem",
                  }}
                >
                  Onboarding Video Coming Soon
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.85rem",
                    color: "rgba(245,242,236,0.5)",
                  }}
                >
                  Jessica will walk you through exactly what Wildevera offers
                  and how to get started.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── What to expect ── */}
        {/*<section style={{ backgroundColor: "#2B2B2B", padding: "5rem 2rem" }}>
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
                What to Expect
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  fontWeight: 700,
                  color: "#F5F2EC",
                  lineHeight: 1.25,
                }}
              >
                Your Path With Wildevera
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {[
                {
                  number: "01",
                  title: "Submit Your Interest",
                  body: "Fill out a short form so we can learn about your background, skills, and goals.",
                },
                {
                  number: "02",
                  title: "Complete Your Training",
                  body: "Access career-building courses designed to take you from beginner to confident VA.",
                },
                {
                  number: "03",
                  title: "Get Matched",
                  body: "We connect you with a U.S. small business whose needs align with your strengths.",
                },
                {
                  number: "04",
                  title: "Build Your Future",
                  body: "Work with real clients, earn real income, and grow your own virtual business.",
                },
              ].map((step, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "rgba(245,242,236,0.04)",
                    border: "1px solid rgba(194,164,109,0.15)",
                    borderRadius: 8,
                    padding: "2rem",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "2rem",
                      fontWeight: 700,
                      color: "rgba(194,164,109,0.3)",
                      lineHeight: 1,
                      marginBottom: "1rem",
                    }}
                  >
                    {step.number}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#F5F2EC",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      color: "rgba(245,242,236,0.6)",
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>*/}

        {/* ── Interest form CTA ── */}
        <section
          style={{
            backgroundColor: "#2B2B2B",
            padding: "5rem 2rem",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 580, margin: "0 auto" }}>
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
              Ready to Begin
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                fontWeight: 700,
                color: "#F5F2EC",
                lineHeight: 1.2,
                marginBottom: "1.25rem",
              }}
            >
              Take the First Step
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "rgba(245,242,236,0.65)",
                lineHeight: 1.85,
                marginBottom: "2.5rem",
              }}
            >
              Submit your interest and we&apos;ll be in touch with everything
              you need to get started. No experience required — just the drive
              to build something of your own.
            </p>

            <Link
              href="https://form.jotform.com/261294721832862"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                backgroundColor: "#C2A46D",
                color: "#1F3A34",
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
                  "#d4b87e";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "#C2A46D";
              }}
            >
              Submit Interest Form →
            </Link>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                color: "rgba(245,242,236,0.4)",
                lineHeight: 1.6,
                marginTop: "1.5rem",
              }}
            >
              Questions?{" "}
              <Link
                href="/#contact"
                style={{
                  color: "#C2A46D",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Reach out directly →
              </Link>
            </p>
          </div>
        </section>
      </main>
      <SharedFooter />
    </>
  );
}
