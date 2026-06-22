"use client";

import { Leaf } from "lucide-react";
import { SharedNavbar, SharedFooter } from "@/components/wildevera/shared";
import { AlsoExplore } from "@/components/wildevera/AlsoExplore";
import Link from "next/link";

const BARRIERS = [
  {
    label: "Training access",
    desc: "Professional VA certification and onboarding programs.",
  },
  {
    label: "Background checks",
    desc: "Required for client trust and professional placement.",
  },
  {
    label: "Software & tools",
    desc: "The platforms clients expect VAs to already know.",
  },
  {
    label: "Stability to start",
    desc: "The breathing room needed to commit fully to the work.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "You Sponsor",
    body: "Choose a one-time contribution or ongoing support. Every amount removes a real barrier.",
  },
  {
    number: "02",
    title: "We Match",
    body: "We pair your sponsorship with a VA whose needs align — and keep you updated on their progress.",
  },
  {
    number: "03",
    title: "They Grow",
    body: "You see the impact. A real person, building a real career, because of what you made possible.",
  },
];

export default function SponsorPage() {
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
              Make an Impact
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
              Change a Life Without Charity
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
              Help someone rebuild with dignity by covering the tools, training,
              and access they need to work again. You&apos;re not giving someone
              a handout. You&apos;re giving them a way forward.
            </p>
            <a
              href="#sponsor-form"
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
              Become a Sponsor
            </a>
          </div>
        </section>

        {/* What You're Actually Doing */}
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
                  What You&apos;re Actually Doing
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
                  You Are Not Donating. You Are Removing Barriers.
                </h2>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "1rem",
                    color: "#8A7F78",
                    lineHeight: 1.9,
                    marginBottom: "1.5rem",
                  }}
                >
                  The people we work with have the skills, the drive, and the
                  work ethic. What they lack is access. A single sponsorship can
                  unlock everything — and you&apos;ll see exactly where your
                  contribution goes.
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
                    &ldquo;You&apos;re not giving someone a handout. You&apos;re
                    giving them a way forward.&rdquo;
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
                {BARRIERS.map((b, i) => (
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
                      {b.label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        color: "#8A7F78",
                        lineHeight: 1.6,
                      }}
                    >
                      {b.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section style={{ backgroundColor: "#2B2B2B", padding: "5rem 2rem" }}>
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
                How It Works
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
                Simple. Transparent. Impactful.
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "2rem",
                position: "relative",
                marginBottom: "3.5rem",
              }}
              className="steps-grid"
            >
              <div
                style={{
                  position: "absolute",
                  top: "1.75rem",
                  left: "calc(16.66% + 1rem)",
                  right: "calc(16.66% + 1rem)",
                  height: 1,
                  backgroundColor: "rgba(194,164,109,0.3)",
                  zIndex: 0,
                }}
                className="connector-line"
              />
              {STEPS.map((step, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    zIndex: 1,
                    textAlign: "center",
                    padding: "0 1rem",
                  }}
                >
                  <div
                    style={{
                      width: 56,
                      height: 56,
                      borderRadius: "50%",
                      backgroundColor: "#1F3A34",
                      border: "3px solid #C2A46D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 1.75rem",
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#C2A46D",
                    }}
                  >
                    {step.number}
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1.15rem",
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
                      fontSize: "0.9rem",
                      color: "rgba(245,242,236,0.65)",
                      lineHeight: 1.8,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Real Stories placeholder */}
        <section style={{ backgroundColor: "#6E7A5C", padding: "5rem 2rem" }}>
          <div
            style={{ maxWidth: 1280, margin: "0 auto", textAlign: "center" }}
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
              Real Stories
            </p>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 700,
                color: "#F5F2EC",
                lineHeight: 1.25,
                marginBottom: "1rem",
              }}
            >
              The People Behind the Work
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "rgba(245,242,236,0.7)",
                lineHeight: 1.8,
                maxWidth: 500,
                margin: "0 auto 3rem",
              }}
            >
              VA profiles and stories coming soon. Every sponsorship has a face,
              a name, and a future.
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.5rem",
                maxWidth: 800,
                margin: "0 auto",
              }}
            >
              {[1, 2].map((i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "rgba(245,242,236,0.08)",
                    border: "1px solid rgba(245,242,236,0.15)",
                    borderRadius: 8,
                    padding: "2.5rem",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 64,
                      height: 64,
                      borderRadius: "50%",
                      backgroundColor: "rgba(194,164,109,0.15)",
                      border: "1px solid rgba(194,164,109,0.3)",
                      margin: "0 auto 1.25rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "1.5rem",
                        color: "#C2A46D",
                      }}
                    >
                      ?
                    </span>
                  </div>
                  <p
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontStyle: "italic",
                      fontSize: "1rem",
                      color: "rgba(245,242,236,0.6)",
                      lineHeight: 1.7,
                    }}
                  >
                    VA story coming soon. A real person, building a real future.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sponsor Form Placeholder */}
        <section
          id="sponsor-form"
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
              Ready to Sponsor
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
              Sponsor someone starting today.
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
              It takes less than five minutes. Fill out the form and our team
              will match you with a VA within one business day.
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
              Start the form →
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
              Questions? Email{" "}
              <a
                href="mailto:hello@wildevera.com"
                style={{
                  color: "#C2A46D",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                hello@wildevera.com
              </a>{" "}
              or call{" "}
              <a
                href="tel:+16055491060"
                style={{
                  color: "#C2A46D",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                +1-605-549-1060
              </a>
            </p>
          </div>
        </section>
      </main>
      <AlsoExplore currentPath="/sponsor" />
      <SharedFooter />
    </>
  );
}
