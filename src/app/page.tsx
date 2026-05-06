"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// ─── Branding Colors ─────────────────────────────────────────────────────────────
// #1F3A34  Forest
// #8A7F78  Warm Stone
// #F5F2EC  Parchment
// #2B2B2B  Charcoal
// #C2A46D  Gold
// #6E7A5C  Sage

// ─── Types ────────────────────────────────────────────────────────────────────
interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

interface Service {
  icon: string;
  title: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  {
    label: "Services",
    href: "#services",
    children: [
      { label: "Administrative Support", href: "#services" },
      { label: "Digital Marketing", href: "#services" },
      { label: "Client & Customer Care", href: "#services" },
      { label: "Operations Assistance", href: "#services" },
    ],
  },
  { label: "For Businesses", href: "#how-it-works" },
  { label: "Resources", href: "#resources" },
  { label: "Stories", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

const SERVICES: Service[] = [
  {
    icon: "",
    title: "Administrative Support",
    description:
      "Inbox and calendar management, scheduling, follow-ups, and day-to-day coordination — handled with precision so you can lead.",
  },
  {
    icon: "",
    title: "Digital Marketing & Social Media",
    description:
      "Content creation, campaign management, social scheduling, and engagement tracking to grow your presence online.",
  },
  {
    icon: "",
    title: "Client & Customer Care",
    description:
      "Responsive communication, intake coordination, and relationship management that makes every client feel valued.",
  },
  {
    icon: "",
    title: "Operations Assistance",
    description:
      "Workflow design, task coordination, process streamlining — we help your business run without you being the bottleneck.",
  },
  {
    icon: "",
    title: "Data Entry & CRM Support",
    description:
      "Database management, CRM optimization, and organized reporting so your information is always clean and actionable.",
  },
  {
    icon: "",
    title: "Project Management",
    description:
      "End-to-end project planning and execution. Deadlines met, tasks tracked, stakeholders informed.",
  },
];

const STEPS: Step[] = [
  {
    number: "01",
    title: "Schedule a Clarity Call",
    description:
      "Tell us about your business, your pain points, and what tasks are consuming your time. We listen carefully.",
  },
  {
    number: "02",
    title: "We Match You",
    description:
      "We connect you with a pre-vetted, English-speaking virtual assistant whose skills align with your specific needs.",
  },
  {
    number: "03",
    title: "Start Working, Start Growing",
    description:
      "Your VA integrates into your workflow quickly. You reclaim your time. Your business moves forward.",
  },
];

const TESTIMONIALS: Testimonial[] = [];

const STATS = [
  { value: "48hr", label: "Match turnaround commitment" },
  { value: "100%", label: "English-Speaking VAs" },
  { value: "U.S.", label: "Raised, Tranied, and culturally fluent " },
  { value: "1:1", label: "Dedicated matching support" },
];

// ─── Utility ──────────────────────────────────────────────────────────────────
function useScrolled(threshold = 20) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return scrolled;
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const scrolled = useScrolled();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        backgroundColor: "#F5F2EC",
        borderBottom: "1px solid rgba(31,58,52,0.1)",
      }}
    >
      <nav
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: scrolled ? 64 : 80,
          transition: "height 0.3s ease",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: "none" }}>
          <Image
            src="/logoNav.png"
            alt="Wildevera"
            height={60}
            width={220}
            priority
          />
        </a>

        {/* Desktop Nav */}
        <div
          className="desktop-nav"
          style={{ display: "flex", alignItems: "center", gap: "2rem" }}
        >
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              style={{ position: "relative" }}
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <a
                href={item.href}
                style={{
                  color: "#2B2B2B",
                  textDecoration: "none",
                  fontSize: "0.875rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  transition: "color 0.2s",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color = "#C2A46D")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color = "#2B2B2B")
                }
              >
                {item.label}
                {item.children && (
                  <span style={{ fontSize: "0.6rem", opacity: 0.7 }}>▾</span>
                )}
              </a>
              {item.children && openDropdown === item.label && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 0.75rem)",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "#1F3A34",
                    border: "1px solid rgba(194,164,109,0.3)",
                    borderRadius: 8,
                    padding: "0.5rem 0",
                    minWidth: 220,
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  }}
                >
                  {item.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      style={{
                        display: "block",
                        padding: "0.6rem 1.25rem",
                        color: "rgba(245,242,236,0.85)",
                        textDecoration: "none",
                        fontSize: "0.85rem",
                        fontFamily: "'Inter', sans-serif",
                        transition: "all 0.15s",
                      }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color = "#C2A46D";
                        (e.target as HTMLElement).style.paddingLeft = "1.5rem";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color =
                          "rgba(245,242,236,0.85)";
                        (e.target as HTMLElement).style.paddingLeft = "1.25rem";
                      }}
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#contact"
            style={{
              backgroundColor: "#C2A46D",
              color: "#1F3A34",
              padding: "0.6rem 1.5rem",
              borderRadius: 4,
              textDecoration: "none",
              fontSize: "0.875rem",
              fontWeight: 700,
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#d4b67e";
              (e.target as HTMLElement).style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#C2A46D";
              (e.target as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Get Started
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 8,
          }}
          aria-label="Toggle menu"
        >
          <div
            style={{
              width: 24,
              height: 2,
              backgroundColor: "#1F3A34",
              marginBottom: 5,
              transition: "all 0.3s",
              transform: mobileOpen
                ? "rotate(45deg) translate(5px, 5px)"
                : "none",
            }}
          />
          <div
            style={{
              width: 24,
              height: 2,
              backgroundColor: "#1F3A34",
              marginBottom: 5,
              opacity: mobileOpen ? 0 : 1,
              transition: "opacity 0.3s",
            }}
          />
          <div
            style={{
              width: 24,
              height: 2,
              backgroundColor: "#1F3A34",
              transition: "all 0.3s",
              transform: mobileOpen
                ? "rotate(-45deg) translate(5px, -5px)"
                : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          style={{
            backgroundColor: "#0f1f1c",
            padding: "1rem 2rem 2rem",
            borderTop: "1px solid rgba(194,164,109,0.2)",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                color: "rgba(245,242,236,0.85)",
                textDecoration: "none",
                padding: "0.75rem 0",
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.95rem",
                borderBottom: "1px solid rgba(245,242,236,0.1)",
              }}
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            style={{
              display: "inline-block",
              marginTop: "1.5rem",
              backgroundColor: "#C2A46D",
              color: "#1F3A34",
              padding: "0.75rem 2rem",
              borderRadius: 4,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.875rem",
              fontFamily: "'Inter', sans-serif",
            }}
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
// ─── Hero ─────────────────────────────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        backgroundColor: "#1F3A34",
        position: "relative",
        display: "flex",
        flexDirection: "column", // column so scroll indicator sits at bottom naturally
        justifyContent: "center",
      }}
    >
      <style>{`
        @keyframes scrollPulse {
          0%   { transform: scaleY(0); transform-origin: top; opacity: 1; }
          60%  { transform: scaleY(1); transform-origin: top; opacity: 1; }
          100% { transform: scaleY(1); transform-origin: top; opacity: 0; }
        }
        @keyframes scrollLabelFloat {
          0%, 100% { transform: translateY(0); opacity: 0.5; }
          50%       { transform: translateY(4px); opacity: 1; }
        }
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
          }
          .stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>

      {/* Decorative landscape silhouette */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "45%",
          overflow: "hidden",
          opacity: 0.15,
          pointerEvents: "none",
        }}
      >
        <svg
          viewBox="0 0 1440 300"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMax slice"
          style={{ width: "100%", height: "100%" }}
        >
          <path
            d="M0,200 C120,160 240,240 360,180 C480,120 560,200 720,160 C880,120 960,200 1080,160 C1200,120 1320,180 1440,140 L1440,300 L0,300 Z"
            fill="#6E7A5C"
          />
          <path
            d="M0,240 C200,200 400,260 600,220 C800,180 1000,240 1200,210 C1350,185 1420,220 1440,215 L1440,300 L0,300 Z"
            fill="#8A7F78"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Gold circle accents */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          zIndex: 0,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
            width: 500,
            height: 500,
            borderRadius: "50%",
            border: "1px solid rgba(194,164,109,0.2)",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "15%",
            right: "8%",
            width: 380,
            height: 380,
            borderRadius: "50%",
            border: "1px solid rgba(194,164,109,0.12)",
          }}
        />
      </div>

      {/* Main content grid — grows naturally, never clipped */}
      <div
        className="hero-grid"
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "120px 2rem 80px",
          position: "relative",
          zIndex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          width: "100%",
        }}
      >
        {/* Left: Copy */}
        <div>
          <p
            style={{
              fontFamily: "'Cormorant Garamond'",
              fontStyle: "italic",
              color: "#C2A46D",
              fontSize: "1.1rem",
              marginBottom: "1.5rem",
              letterSpacing: "0.1em",
            }}
          >
            Where conviction meets compassion
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              fontWeight: 700,
              color: "#F5F2EC",
              lineHeight: 1.15,
              marginBottom: "1.5rem",
            }}
          >
            Meaningful Work.
            <br />
            <span style={{ color: "#C2A46D" }}>Real Impact.</span>
            <br />A Future With Hope.
          </h1>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1.1rem",
              color: "rgba(245,242,236,0.75)",
              lineHeight: 1.8,
              maxWidth: 520,
              marginBottom: "2.5rem",
            }}
          >
            We match U.S. small businesses with virtual assistants who think,
            speak, and work like the American professionals they are —
            delivering reliable, native-English support and the cultural fluency
            your business deserves.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href="#contact"
              style={{
                backgroundColor: "#C2A46D",
                color: "#1F3A34",
                padding: "1rem 2.5rem",
                borderRadius: 4,
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 700,
                fontFamily: "'Inter'",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "all 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#d4b67e";
                (e.target as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#C2A46D";
                (e.target as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Find a VA Today
            </a>
            <a
              href="#about"
              style={{
                border: "1px solid rgba(245,242,236,0.4)",
                color: "#F5F2EC",
                padding: "1rem 2.5rem",
                borderRadius: 4,
                textDecoration: "none",
                fontSize: "0.875rem",
                fontWeight: 500,
                fontFamily: "'Inter', sans-serif",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                transition: "all 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.borderColor =
                  "rgba(194,164,109)";
                (e.target as HTMLElement).style.color = "#C2A46D";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.borderColor =
                  "rgba(245,242,236)";
                (e.target as HTMLElement).style.color = "#F5F2EC";
              }}
            >
              Our Mission
            </a>
          </div>
        </div>

        {/* Right: Stats */}
        <div
          className="stats-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "rgba(245,242,236,0.05)",
                border: "1px solid rgba(194,164,109,0.2)",
                borderRadius: 8,
                padding: "1.75rem 1.5rem",
                backdropFilter: "blur(4px)",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "2.5rem",
                  fontWeight: 700,
                  color: "#C2A46D",
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(245,242,236,0.6)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator — in flow, not absolutely positioned */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          paddingBottom: "2rem",
          marginTop: "auto",
          position: "relative",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            color: "rgba(245,242,236,0.6)",
            textTransform: "uppercase",
            animation: "scrollLabelFloat 2s ease-in-out infinite",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: 1,
            height: 40,
            background: "rgba(194,164,109,0.15)",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: 1,
              height: "100%",
              background: "rgba(194,164,109,0.8)",
              animation: "scrollPulse 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}

// ─── Mission ──────────────────────────────────────────────────────────────────
function MissionSection() {
  return (
    <section
      id="about"
      style={{
        backgroundColor: "#F5F2EC",
        padding: "6rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "center",
        }}
        className="mission-grid"
      >
        {/* Left: Quote card */}
        <div>
          <div
            style={{
              backgroundColor: "#1F3A34",
              borderRadius: 8,
              padding: "3rem",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: -20,
                right: -20,
                width: 120,
                height: 120,
                borderRadius: "50%",
                border: "2px solid rgba(194,164,109,0.2)",
              }}
            />
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: "1.6rem",
                fontStyle: "italic",
                color: "#F5F2EC",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
                position: "relative",
              }}
            >
              &quot;Rooted in dignity. Driven by purpose. Building meaningful
              work and brighter tomorrows.&quot;
            </p>
            <div
              style={{
                width: 40,
                height: 2,
                backgroundColor: "#C2A46D",
                marginBottom: "1rem",
              }}
            />
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(245,242,236,0.6)",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}
            >
              The Wildevera Ethos
            </p>
          </div>
        </div>

        {/* Right: Mission copy */}
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
            Our Mission
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "#1F3A34",
              lineHeight: 1.25,
              marginBottom: "1.5rem",
            }}
          >
            Rooted in dignity. Driven by purpose. Building brighter tomorrows.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#8A7F78",
              lineHeight: 1.9,
              marginBottom: "1.25rem",
            }}
          >
            Wildevera exists at the intersection of opportunity and compassion.
            We partner with U.S. small businesses who need reliable, skilled
            support — and we connect them with native-English-speaking
            professionals raised in the United States, whose talent, work ethic,
            and cultural fluency translate seamlessly into your business.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#8A7F78",
              lineHeight: 1.9,
              marginBottom: "2rem",
            }}
          >
            Through professional virtual assistant training, thoughtful
            matching, and ongoing support, we create dignified pathways to
            meaningful careers — for people whose circumstances have changed,
            but whose drive and capability never will.
          </p>
          <a
            href="#how-it-works"
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
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.color = "#C2A46D";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.color = "#1F3A34";
            }}
          >
            See How It Works →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
function ServicesSection() {
  return (
    <section
      id="services"
      style={{
        backgroundColor: "#2B2B2B",
        padding: "6rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
            Virtual Assistant Services
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "#F5F2EC",
              lineHeight: 1.25,
              marginBottom: "1rem",
            }}
          >
            Get Help With the Tasks That Slow You Down
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "rgba(245,242,236,0.55)",
              maxWidth: 560,
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            Only pay for the support you need. Our VAs deliver professional,
            flexible help across every area of your business.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          {SERVICES.map((service, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "rgba(245,242,236,0.04)",
                border: "1px solid rgba(194,164,109,0.15)",
                borderRadius: 8,
                padding: "2rem",
                cursor: "pointer",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(194,164,109,0.5)";
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(245,242,236,0.07)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor =
                  "rgba(194,164,109,0.15)";
                (e.currentTarget as HTMLElement).style.backgroundColor =
                  "rgba(245,242,236,0.04)";
                (e.currentTarget as HTMLElement).style.transform =
                  "translateY(0)";
              }}
            >
              <div style={{ fontSize: "1.75rem", marginBottom: "1rem" }}>
                {service.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#F5F2EC",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
                }}
              >
                {service.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(245,242,236,0.55)",
                  lineHeight: 1.8,
                  marginBottom: "1.25rem",
                }}
              >
                {service.description}
              </p>
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#C2A46D",
                  letterSpacing: "0.05em",
                }}
              >
                Learn More →
              </span>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            href="#contact"
            style={{
              display: "inline-block",
              border: "1px solid rgba(194,164,109,0.5)",
              color: "#C2A46D",
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
              (e.target as HTMLElement).style.backgroundColor =
                "rgba(194,164,109,0.1)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "transparent";
            }}
          >
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ─────────────────────────────────────────────────────────────
function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      style={{
        backgroundColor: "#F5F2EC",
        padding: "6rem 2rem",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "#1F3A34",
              lineHeight: 1.25,
              marginBottom: "1rem",
            }}
          >
            Working With Wildevera Is Simple
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "#8A7F78",
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.8,
            }}
          >
            From your first call to your first task completed — we make
            onboarding a skilled VA seamless and fast.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "2rem",
            position: "relative",
            marginBottom: "4rem",
          }}
          className="steps-grid"
        >
          {/* Connector line */}
          <div
            style={{
              position: "absolute",
              top: "2.5rem",
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
                  fontSize: "1.2rem",
                  fontWeight: 700,
                  color: "#1F3A34",
                  marginBottom: "0.75rem",
                  lineHeight: 1.3,
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
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            href="#contact"
            style={{
              display: "inline-block",
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
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#2a4f47";
              (e.target as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = "#1F3A34";
              (e.target as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            Schedule a Clarity Call
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ─────────────────────────────────────────────────────────────
function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      style={{
        backgroundColor: "#6E7A5C",
        padding: "6rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: -100,
          right: -100,
          width: 400,
          height: 400,
          borderRadius: "50%",
          backgroundColor: "rgba(194,164,109,0.08)",
        }}
      />

      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        <div style={{ textAlign: "center", marginBottom: "4rem" }}>
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
            Client Stories
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "#F5F2EC",
              lineHeight: 1.25,
            }}
          >
            What Our Clients Are Saying
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              style={{
                backgroundColor: "rgba(245,242,236,0.08)",
                border: "1px solid rgba(245,242,236,0.15)",
                borderRadius: 8,
                padding: "2.25rem",
              }}
            >
              <div
                style={{
                  color: "#C2A46D",
                  fontSize: "2.5rem",
                  lineHeight: 1,
                  marginBottom: "1rem",
                  fontFamily: "Georgia, serif",
                }}
              >
                &quot;
              </div>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: "1.1rem",
                  fontStyle: "italic",
                  color: "#F5F2EC",
                  lineHeight: 1.8,
                  marginBottom: "1.75rem",
                }}
              >
                {t.quote}
              </p>
              <div
                style={{
                  borderTop: "1px solid rgba(245,242,236,0.15)",
                  paddingTop: "1rem",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    color: "#F5F2EC",
                    fontSize: "0.9rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  {t.author}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(245,242,236,0.55)",
                  }}
                >
                  {t.role}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CtaBanner() {
  return (
    <section
      style={{
        backgroundColor: "#C2A46D",
        padding: "5rem 2rem",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
          fontWeight: 700,
          color: "#1F3A34",
          lineHeight: 1.25,
          marginBottom: "1.25rem",
        }}
      >
        Ready to Reclaim Your Time and Make a Difference?
      </h2>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "1rem",
          color: "rgba(31,58,52,0.75)",
          lineHeight: 1.8,
          marginBottom: "2.5rem",
        }}
      >
        Join the growing community of small businesses building their teams with
        purpose. Schedule a free clarity call today.
      </p>
      <a
        href="#contact"
        style={{
          display: "inline-block",
          backgroundColor: "#1F3A34",
          color: "#F5F2EC",
          padding: "1.1rem 3rem",
          borderRadius: 4,
          textDecoration: "none",
          fontSize: "0.875rem",
          fontWeight: 700,
          fontFamily: "'Inter', sans-serif",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          (e.target as HTMLElement).style.backgroundColor = "#2a4f47";
          (e.target as HTMLElement).style.transform = "translateY(-2px)";
        }}
        onMouseLeave={(e) => {
          (e.target as HTMLElement).style.backgroundColor = "#1F3A34";
          (e.target as HTMLElement).style.transform = "translateY(0)";
        }}
      >
        Book Your Free Clarity Call
      </a>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#1F3A34",
        padding: "6rem 2rem",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
        className="contact-grid"
      >
        {/* Left */}
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
            Get in Touch
          </p>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
              fontWeight: 700,
              color: "#F5F2EC",
              lineHeight: 1.25,
              marginBottom: "1.5rem",
            }}
          >
            Let&apos;s Build Something Meaningful Together
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "1rem",
              color: "rgba(245,242,236,0.6)",
              lineHeight: 1.9,
              marginBottom: "2.5rem",
            }}
          >
            Whether you&apos;re a business ready to delegate, or a worker ready
            to build a new chapter — we&apos;d love to hear from you. Fill out
            the form and we&apos;ll be in touch within 24 hours.
          </p>

          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            {[
              { label: "Email", value: "hello@wildevera.com" },
              { label: "Website", value: "www.wildevera.com" },
              {
                label: "Virtual Services",
                value: "U.S. small businesses · Remote workers",
              },
            ].map((item) => (
              <div key={item.label}>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.75rem",
                    color: "#C2A46D",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.25rem",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.95rem",
                    color: "rgba(245,242,236,0.75)",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div>
          <div
            style={{
              backgroundColor: "rgba(245,242,236,0.04)",
              border: "1px solid rgba(194,164,109,0.2)",
              borderRadius: 8,
              padding: "2.5rem",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "1rem",
                marginBottom: "1rem",
              }}
            >
              {(["name", "email"] as const).map((field) => (
                <div key={field}>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      color: "rgba(245,242,236,0.6)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {field === "name" ? "Your Name" : "Email Address"}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder={
                      field === "name" ? "Jane Smith" : "jane@company.com"
                    }
                    style={{
                      width: "100%",
                      padding: "0.75rem 1rem",
                      backgroundColor: "rgba(245,242,236,0.06)",
                      border: "1px solid rgba(194,164,109,0.2)",
                      borderRadius: 4,
                      color: "#F5F2EC",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      outline: "none",
                      boxSizing: "border-box",
                      transition: "border-color 0.2s",
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(194,164,109,0.6)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = "rgba(194,164,109,0.2)";
                    }}
                  />
                </div>
              ))}
            </div>
            <div style={{ marginBottom: "1rem" }}>
              <label
                style={{
                  display: "block",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(245,242,236,0.6)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                Business Name
              </label>
              <input
                type="text"
                name="business"
                value={form.business}
                onChange={handleChange}
                placeholder="Acme Co."
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  backgroundColor: "rgba(245,242,236,0.06)",
                  border: "1px solid rgba(194,164,109,0.2)",
                  borderRadius: 4,
                  color: "#F5F2EC",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  outline: "none",
                  boxSizing: "border-box",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(194,164,109,0.6)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(194,164,109,0.2)";
                }}
              />
            </div>
            <div style={{ marginBottom: "1.5rem" }}>
              <label
                style={{
                  display: "block",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  color: "rgba(245,242,236,0.6)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  marginBottom: "0.5rem",
                }}
              >
                How Can We Help?
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="Tell us about your business and what support you're looking for..."
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  backgroundColor: "rgba(245,242,236,0.06)",
                  border: "1px solid rgba(194,164,109,0.2)",
                  borderRadius: 4,
                  color: "#F5F2EC",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.9rem",
                  outline: "none",
                  boxSizing: "border-box",
                  resize: "vertical",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(194,164,109,0.6)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(194,164,109,0.2)";
                }}
              />
            </div>
            <button
              style={{
                width: "100%",
                padding: "1rem",
                backgroundColor: "#C2A46D",
                color: "#1F3A34",
                border: "none",
                borderRadius: 4,
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.875rem",
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#d4b67e";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.backgroundColor = "#C2A46D";
              }}
            >
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#0f1f1c",
        padding: "4rem 2rem 2rem",
        borderTop: "1px solid rgba(194,164,109,0.15)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "3rem",
            marginBottom: "3rem",
            paddingBottom: "3rem",
            borderBottom: "1px solid rgba(245,242,236,0.08)",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#F5F2EC",
                marginBottom: "1rem",
              }}
            >
              Wildevera
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                color: "#C2A46D",
                fontSize: "0.95rem",
                marginBottom: "1rem",
                lineHeight: 1.6,
              }}
            >
              Where conviction meets compassion
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.85rem",
                color: "rgba(245,242,236,0.4)",
                lineHeight: 1.8,
              }}
            >
              Virtual services & career-building courses for a brighter
              tomorrow.
            </p>
          </div>

          {/* Link columns */}
          {[
            {
              title: "Company",
              links: ["About", "Our Mission", "Stories", "Contact"],
            },
            {
              title: "Services",
              links: ["Administrative", "Marketing", "Operations", "Projects"],
            },
            {
              title: "Portal",
              links: ["For Businesses", "For VAs", "Login", "Resources"],
            },
          ].map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#C2A46D",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "1rem",
                }}
              >
                {col.title}
              </div>
              {col.links.map((link) => (
                <a
                  key={link}
                  href="#"
                  style={{
                    display: "block",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(245,242,236,0.5)",
                    textDecoration: "none",
                    marginBottom: "0.6rem",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "#F5F2EC")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "rgba(245,242,236,0.5)")
                  }
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(245,242,236,0.3)",
            }}
          >
            © 2025 Wildevera. All rights reserved. · www.wildevera.com
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(245,242,236,0.3)",
            }}
          >
            Virtual Services · Career-Building Courses · Dignified Work
          </p>
        </div>
      </div>
    </footer>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function WildeveraLanding() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <ServicesSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
