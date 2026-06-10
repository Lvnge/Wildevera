"use client";

import {
  Leaf,
  ClipboardCheck,
  Megaphone,
  HeartHandshake,
  Settings2,
  Database,
  Target,
  ShieldCheck,
  Languages,
} from "lucide-react";
import { SharedNavbar, SharedFooter } from "@/components/wildevera/shared";
import { AlsoExplore } from "@/components/wildevera/AlsoExplore";
import Link from "next/link";

const SERVICES = [
  { icon: ClipboardCheck, label: "Inbox management" },
  { icon: ClipboardCheck, label: "Calendar & scheduling" },
  { icon: HeartHandshake, label: "Customer support" },
  { icon: Megaphone, label: "Social media posting" },
  { icon: Settings2, label: "Admin & organization" },
  { icon: Database, label: "Data entry & CRM" },
  { icon: Target, label: "Project coordination" },
  { icon: Megaphone, label: "Content creation" },
];

const PILLARS = [
  {
    icon: ShieldCheck,
    title: "Dignified Work",
    body: "People who show up because it matters — not just because they have to.",
  },
  {
    icon: Languages,
    title: "Cultural Fluency",
    body: "Real understanding, not scripted responses. Your VA grew up in the same world as your customers.",
  },
  {
    icon: HeartHandshake,
    title: "Mission-Driven Matching",
    body: "We don't just assign. We align — skills, personality, and work style to your business.",
  },
];

const STEPS = [
  {
    number: "01",
    title: "Schedule a Call",
    body: "Tell us about your business, your pain points, and what tasks are consuming your time. We listen carefully.",
  },
  {
    number: "02",
    title: "We Match You",
    body: "We connect you with a pre-vetted, English-speaking virtual assistant whose skills align with your specific needs.",
  },
  {
    number: "03",
    title: "Start Working",
    body: "Your VA integrates into your workflow quickly. You reclaim your time. Your business moves forward.",
  },
];

export default function WorkWithUsPage() {
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
              For Businesses
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
              Support That Actually Understands Your Business
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
              We connect you with reliable, English-speaking virtual assistants
              who bring care, consistency, and real-world perspective to your
              day-to-day operations.
            </p>
            <Link
              href="/#contact"
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
              Schedule a Clarity Call
            </Link>
          </div>
        </section>

        {/* What You Get */}
        <section style={{ backgroundColor: "#F5F2EC", padding: "5rem 2rem" }}>
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
                  What You Get
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
                  Simple. Practical. Human.
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
                  No fluff. No bloated teams. Just the support you actually need
                  — handled by someone who genuinely cares about doing it well.
                </p>
                <Link
                  href="/#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    color: "#1F3A34",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    textDecoration: "none",
                    borderBottom: "2px solid #C2A46D",
                    paddingBottom: "2px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#C2A46D")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.color = "#1F3A34")
                  }
                >
                  Get Support Today →
                </Link>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                }}
              >
                {SERVICES.map((s, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid rgba(31,58,52,0.1)",
                      borderRadius: 6,
                      padding: "1rem 1.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <s.icon size={16} color="#C2A46D" strokeWidth={1.5} />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.875rem",
                        color: "#2B2B2B",
                        fontWeight: 500,
                      }}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Wildevera */}
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
                Why Wildevera
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
                Built Different. By Design.
              </h2>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {PILLARS.map((p, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "rgba(245,242,236,0.05)",
                    border: "1px solid rgba(194,164,109,0.2)",
                    borderRadius: 8,
                    padding: "2.25rem 2rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "1rem",
                  }}
                >
                  <div
                    style={{
                      width: 52,
                      height: 52,
                      borderRadius: "50%",
                      backgroundColor: "#1F3A34",
                      border: "2px solid #C2A46D",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <p.icon size={22} color="#C2A46D" strokeWidth={1.5} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "#F5F2EC",
                      margin: 0,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      color: "rgba(245,242,236,0.65)",
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {p.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
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
                How It Works
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
                Three Steps to Real Support
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
                      color: "#1F3A34",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      color: "#8A7F78",
                      lineHeight: 1.8,
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center" }}>
              <Link
                href="/#contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  backgroundColor: "#1F3A34",
                  color: "#F5F2EC",
                  padding: "1rem 2.5rem",
                  borderRadius: 4,
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  fontWeight: 700,
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  transition: "all 0.2s",
                  border: "1px solid rgba(194,164,109,0.3)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#2a4f47";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "#1F3A34";
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                }}
              >
                <Leaf size={15} color="#C2A46D" strokeWidth={1.5} />
                Let&apos;s Get You Support
              </Link>
            </div>
          </div>
        </section>
      </main>
      <AlsoExplore currentPath="/work-with-us" />
      <SharedFooter />
    </>
  );
}
