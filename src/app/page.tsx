"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Phone,
  Mail,
  ShieldCheck,
  Languages,
  HeartHandshake,
  ClipboardCheck,
  Megaphone,
  Settings2,
  Database,
  Target,
  Leaf,
  LucideIcon,
} from "lucide-react";

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
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Step {
  number: string;
  title: string;
  description: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const NAV_ITEMS: NavItem[] = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "For Businesses", href: "#how-it-works" },
  { label: "Why Wildevera", href: "#why-wildevera" },
  { label: "Backed By", href: "#backed-by" },
  { label: "Contact", href: "#contact" },
];

const SERVICES: Service[] = [
  {
    icon: ClipboardCheck,
    title: "Administrative Support",
    description:
      "Inbox and calendar management, scheduling, follow-ups, and day-to-day coordination — handled with precision so you can lead.",
  },
  {
    icon: Megaphone,
    title: "Digital Marketing & Social Media",
    description:
      "Content creation, campaign management, social scheduling, and engagement tracking to grow your presence online.",
  },
  {
    icon: HeartHandshake,
    title: "Client & Customer Care",
    description:
      "Responsive communication, intake coordination, and relationship management that makes every client feel valued.",
  },
  {
    icon: Settings2,
    title: "Operations Assistance",
    description:
      "Workflow design, task coordination, process streamlining — we help your business run without you being the bottleneck.",
  },
  {
    icon: Database,
    title: "Data Entry & CRM Support",
    description:
      "Database management, CRM optimization, and organized reporting so your information is always clean and actionable.",
  },
  {
    icon: Target,
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
      "We match you with a pre-vetted virtual assistant; an American-raised native-English speaker, whose skills align with your specific needs.",
  },
  {
    number: "03",
    title: "Start Working, Start Growing",
    description:
      "Your VA integrates into your workflow quickly. You reclaim your time. Your business moves forward.",
  },
];

interface Pillar {
  icon: LucideIcon;
  title: string;
  description: string;
}

const PILLARS: Pillar[] = [
  {
    icon: ShieldCheck,
    title: "Dignified Work",
    description:
      "Every match is built on respect, fair compensation, and the belief that meaningful work changes lives.",
  },
  {
    icon: Languages,
    title: "Cultural Fluency",
    description:
      "Your VA understands your customers because they grew up alongside them: same culture, same context, same instincts.",
  },
  {
    icon: HeartHandshake,
    title: "Mission-Driven Matching",
    description:
      "We invest in our people first, so they bring real care and commitment to your business, every single day.",
  },
];

interface Advisor {
  name: string;
  title: string;
  affiliation?: string;
  quote: string;
  headshot?: string; // url when available
}

const ADVISORS: Advisor[] = [
  {
    name: "Shawn M.",
    title: "Attorney — Advisory Board Member",
    affiliation: "The Planning Done Right Guy™ · Future Done Right™ Show",
    quote: "[Quote pending]",
  },
  {
    name: "Darren T.",
    title: "SC State Liaison",
    affiliation: "Community Liaison Migrant Education, SCDoE",
    quote: "[Quote pending]",
  },
  {
    name: "Maria Reyes",
    title: "Mentor & Co-Owner",
    affiliation: "The Bubble Boys",
    quote:
      "In a world full of businesses chasing profit, Jessica is chasing purpose — and building profit around it. Wildevera is rare. The mission is real. And I'm honored to be associated with it.",
  },
  {
    name: "Amanda Turner",
    title: "Small Business Owner & Mentor",
    quote: "[Quote pending]",
  },
];

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
              fontFamily: "'Playfair Display', ",
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
                border: "1px solid #C2A46D",
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
                  "rgba(245,242,236)";
                (e.target as HTMLElement).style.color = "#F5F2EC";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.borderColor =
                  "rgba(194,164,109)";
                (e.target as HTMLElement).style.color = "#C2A46D";
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
                  fontFamily: "'Playfair Display', ",
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
            <p
              style={{
                fontFamily: "'Cormorant Garamond'",
                fontSize: "1.6rem",
                fontStyle: "italic",
                color: "#F5F2EC",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
                position: "relative",
              }}
            >
              &quot;Rooted in dignity. Driven by purpose. Building brighter
              tomorrows.&quot;
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
                color: "#C2A46D",
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
              fontFamily: "'Playfair Display', ",
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
              paddingRight: "4rem",
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
              paddingRight: "4rem",
            }}
          >
            Through professional virtual assistant training, thoughtful
            matching, and ongoing support, we create dignified pathways to
            meaningful careers — for people whose circumstances have changed,
            but whose drive and capability never will.
          </p>
          <a
            href="#services"
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
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#C2A46D";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#1F3A34";
            }}
          >
            <span
              style={{
                borderBottom: "2px solid #C2A46D",
                paddingBottom: "2px",
              }}
            >
              See How It Works
            </span>
            <span>→</span>
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
              fontFamily: "'Playfair Display', ",
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

                transition: "all 0.2s ease",
              }}
            >
              <div style={{ marginBottom: "1rem" }}>
                <service.icon size={32} color="#C2A46D" strokeWidth={1} />
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', ",
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
            </div>
          ))}
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
              fontFamily: "'Playfair Display', ",
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
                  fontFamily: "'Playfair Display', ",
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "#C2A46D",
                }}
              >
                {step.number}
              </div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', ",
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
    <>
      <section
        id="why-wildevera"
        style={{
          backgroundColor: "#1F3A34",
          padding: "6rem 2rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          {/* Why Wildevera */}
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
                fontFamily: "'Playfair Display', ",
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "#F5F2EC",
                lineHeight: 1.25,
              }}
            >
              Built On What Actually Matters
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "1.5rem",
              marginBottom: "4rem",
            }}
          >
            {PILLARS.map((pillar, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: "#F5F2EC",
                  border: "1px solid rgba(194,164,109,0.25)",
                  borderRadius: 8,
                  padding: "2.5rem 2rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  gap: "1rem",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    backgroundColor: "#1F3A34",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <pillar.icon size={26} color="#C2A46D" strokeWidth={1.5} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', ",
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "#1F3A34",
                    lineHeight: 1.25,
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.9rem",
                    color: "#8A7F78",
                    lineHeight: 1.85,
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1.5rem",
              marginBottom: "4rem",
            }}
          >
            <div style={{ flex: 1, height: 1, backgroundColor: "#6E7A5C" }} />
            <div
              style={{
                width: 6,
                height: 6,
                borderRadius: "50%",
                backgroundColor: "#C2A46D",
                flexShrink: 0,
              }}
            />
            <div style={{ flex: 1, height: 1, backgroundColor: "#6E7A5C" }} />
          </div>

          {/* Backed By */}
          <section id="backed-by">
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
                Backed By
              </p>
              <h2
                style={{
                  fontFamily: "'Playfair Display', ",
                  fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                  fontWeight: 700,
                  color: "#F5F2EC",
                  lineHeight: 1.25,
                  marginBottom: "1rem",
                }}
              >
                Wildevera Is Built With Believers
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1rem",
                  color: "#8A7F78",
                  maxWidth: 480,
                  margin: "0 auto",
                  lineHeight: 1.8,
                }}
              >
                Leaders, attorneys, and community advocates who stand behind
                this mission.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(min(100%, 240px), 1fr))",
                gap: "1.25rem",
              }}
            >
              {ADVISORS.map((a, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "rgba(245,242,236,0.08)",
                    borderRadius: 8,
                    borderLeft: "3px solid #C2A46D",
                    padding: "1.75rem 1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.35rem",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.1rem",
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: "50%",
                        backgroundColor: a.headshot ? "transparent" : "#1F3A34",
                        backgroundImage: a.headshot
                          ? `url(${a.headshot})`
                          : "none",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        flexShrink: 0,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "#C2A46D",
                        fontFamily: "'Inter', sans-serif",
                        border: "1px solid #C2A46D",
                      }}
                    >
                      {!a.headshot &&
                        a.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                    </div>
                    <div>
                      <div
                        style={{
                          fontFamily: "'Playfair Display', ",
                          fontWeight: 700,
                          color: "#F5F2EC",
                          fontSize: "1rem",
                          lineHeight: 1.2,
                        }}
                      >
                        {a.name}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "0.78rem",
                          color: "#8A7F78",
                          lineHeight: 1.5,
                        }}
                      >
                        {a.title}
                      </div>
                      {a.affiliation && (
                        <div
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "0.73rem",
                            color: "#C2A46D",
                            lineHeight: 1.5,
                          }}
                        >
                          {a.affiliation}
                        </div>
                      )}
                    </div>
                  </div>

                  {a.quote !== "[Quote pending]" && (
                    <p
                      style={{
                        fontFamily: "'Cormorant Garamond',",
                        fontSize: "0.95rem",
                        fontStyle: "italic",
                        color: "#F5F2EC",
                        lineHeight: 1.75,
                        marginTop: "0.75rem",
                        borderTop: "1px solid #6E7A5C",
                        paddingTop: "0.75rem",
                      }}
                    >
                      &ldquo;{a.quote}&rdquo;
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CtaBanner() {
  return (
    <section
      style={{
        backgroundColor: "#F5F2EC",
        padding: "7rem 2rem",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 640,
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0",
        }}
      >
        <h2
          style={{
            fontFamily: "'Playfair Display',",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 700,
            fontStyle: "normal",
            color: "#1F3A34",
            lineHeight: 1.2,
            marginBottom: "1.5rem",
          }}
        >
          Reclaim Your Time.
          <br />
          Build With Purpose.
        </h2>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.05rem",
            fontWeight: 400,
            color: "#2B2B2B",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
            maxWidth: 520,
          }}
        >
          Delegate with purpose. Gain trusted support for your business while
          helping someone rebuild through dignified remote work.
        </p>

        <a
          href="#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            backgroundColor: "#1F3A34",
            color: "#F5F2EC",
            padding: "1.1rem 3rem",
            borderRadius: 4,
            textDecoration: "none",
            fontSize: "0.8rem",
            fontWeight: 700,
            fontFamily: "'Inter', sans-serif",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            transition: "all 0.2s",
            border: "1px solid rgba(194,164,109,0.3)",
            marginBottom: "1.25rem",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#2a4f47";
            (e.currentTarget as HTMLElement).style.transform =
              "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.backgroundColor = "#1F3A34";
            (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          }}
        >
          <Leaf size={15} color="#C2A46D" strokeWidth={1.5} />
          Schedule a Clarity Call
        </a>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
// ─── Social & Action Links ────────────────────────────────────────────────────
const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/wildevera",
    svg: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C2A46D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/wildevera.co/",
    svg: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C2A46D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/wildevera.co",
    svg: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C2A46D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="#C2A46D" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@wildevera.co",
    svg: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C2A46D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@WildeveraLLC",
    svg: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C2A46D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          stroke="#C2A46D"
          fill="#C2A46D"
        />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/19154874848",
    svg: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C2A46D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      </svg>
    ),
  },
];

// ─── Action Buttons (Calendly + JotForm) ──────────────────────────────────────
const ACTION_LINKS = [
  {
    label: "Schedule a Call",
    sub: "Book via Calendly",
    href: "https://calendly.com/hello-wildevera",
    svg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C2A46D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    label: "Get Started",
    sub: "Fill out our form",
    href: "https://form.jotform.com/261294721832862",
    svg: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#C2A46D"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
];

// ─── Shared icon-button style helper ─────────────────────────────────────────
const iconBtnBase: React.CSSProperties = {
  width: 42,
  height: 42,
  borderRadius: "50%",
  border: "1px solid rgba(194,164,109,0.35)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "all 0.2s",
  backgroundColor: "transparent",
  cursor: "pointer",
  textDecoration: "none",
};

function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
    audienceType: "business",
    honeypot: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = "Please enter a valid email";
    if (!form.message.trim())
      newErrors.message = "Please tell us how we can help";
    return newErrors;
  };

  const handleSubmit = async () => {
    if (form.honeypot) return;
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setStatus("loading");
    try {
      await new Promise((res) => setTimeout(res, 1500));
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    padding: "0.75rem 1rem",
    backgroundColor: "rgba(245,242,236,0.07)",
    border: `1px solid ${errors[field] ? "#E05C5C" : "rgba(194,164,109,0.2)"}`,
    borderRadius: 4,
    color: "#F5F2EC",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    boxSizing: "border-box" as const,
    transition: "border-color 0.2s",
  });

  return (
    <section
      id="contact"
      style={{ backgroundColor: "#2B2B2B", padding: "6rem 2rem" }}
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
        {/* ── Left Panel ── */}
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
              fontFamily: "'Playfair Display', serif",
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
              color: "rgba(245,242,236,0.75)",
              lineHeight: 1.9,
              marginBottom: "2.5rem",
            }}
          >
            Whether you&apos;re a business looking for trusted support, or
            someone ready to build a new chapter through meaningful work —
            we&apos;d love to hear from you. Fill out the form and we&apos;ll
            get back to you shortly — usually within one business day.
          </p>

          {/* Contact details */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
              marginBottom: "2.5rem",
            }}
          >
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <Phone size={16} color="#C2A46D" strokeWidth={1.5} />
              <div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem",
                    color: "#C2A46D",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.15rem",
                  }}
                >
                  Phone
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.95rem",
                    color: "rgba(245,242,236,0.85)",
                  }}
                >
                  +1-605-549-1060
                </div>
              </div>
            </div>
            <div
              style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}
            >
              <Mail size={16} color="#C2A46D" strokeWidth={1.5} />
              <div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem",
                    color: "#C2A46D",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.15rem",
                  }}
                >
                  Email
                </div>
                <div
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.95rem",
                    color: "rgba(245,242,236,0.85)",
                  }}
                >
                  hello@wildevera.com
                </div>
              </div>
            </div>
          </div>

          {/* ── Action Buttons (Calendly + JotForm) ── */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.75rem",
              marginBottom: "2.5rem",
            }}
          >
            {ACTION_LINKS.map(({ label, sub, href, svg }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  padding: "0.85rem 1.25rem",
                  borderRadius: 6,
                  border: "1px solid rgba(194,164,109,0.3)",
                  backgroundColor: "rgba(194,164,109,0.06)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(194,164,109,0.12)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "#C2A46D";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.backgroundColor =
                    "rgba(194,164,109,0.06)";
                  (e.currentTarget as HTMLElement).style.borderColor =
                    "rgba(194,164,109,0.3)";
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    border: "1px solid rgba(194,164,109,0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {svg}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#F5F2EC",
                      marginBottom: "0.15rem",
                    }}
                  >
                    {label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.75rem",
                      color: "rgba(245,242,236,0.45)",
                    }}
                  >
                    {sub}
                  </div>
                </div>
                {/* Arrow */}
                <svg
                  style={{ marginLeft: "auto", opacity: 0.4 }}
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#F5F2EC"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            ))}
          </div>

          {/* ── Social Icons ── */}
          <div>
            <div
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.72rem",
                color: "#C2A46D",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.85rem",
              }}
            >
              Follow Us
            </div>
            <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
              {SOCIAL_LINKS.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  title={label}
                  style={iconBtnBase}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(194,164,109,0.15)";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "#C2A46D";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "rgba(194,164,109,0.35)";
                  }}
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Form ── */}
        <div>
          <div
            style={{
              backgroundColor: "rgba(245,242,236,0.05)",
              border: "1px solid rgba(194,164,109,0.25)",
              borderRadius: 8,
              padding: "2.5rem",
            }}
          >
            {status === "success" ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    backgroundColor: "rgba(194,164,109,0.15)",
                    border: "1px solid #C2A46D",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 1.5rem",
                  }}
                >
                  <Leaf size={22} color="#C2A46D" strokeWidth={1.5} />
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    color: "#F5F2EC",
                    marginBottom: "0.75rem",
                  }}
                >
                  Message Received
                </h3>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.95rem",
                    color: "rgba(245,242,236,0.7)",
                    lineHeight: 1.8,
                  }}
                >
                  Thank you for reaching out. We&apos;ll get back to you within
                  one business day.
                </p>
              </div>
            ) : (
              <>
                {/* Honeypot */}
                <input
                  type="text"
                  name="honeypot"
                  value={form.honeypot}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Audience toggle */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.5rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  {(["business", "va"] as const).map((type) => (
                    <button
                      key={type}
                      onClick={() =>
                        setForm((p) => ({ ...p, audienceType: type }))
                      }
                      style={{
                        padding: "0.65rem 1rem",
                        borderRadius: 4,
                        border: "1px solid rgba(194,164,109,0.3)",
                        backgroundColor:
                          form.audienceType === type
                            ? "#C2A46D"
                            : "transparent",
                        color:
                          form.audienceType === type
                            ? "#1F3A34"
                            : "rgba(245,242,236,0.6)",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.78rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        transition: "all 0.2s",
                      }}
                    >
                      {type === "business" ? "I'm a Business" : "I'm a VA"}
                    </button>
                  ))}
                </div>

                {/* Name + Email */}
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
                          fontSize: "0.72rem",
                          color: "rgba(245,242,236,0.7)",
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
                        style={inputStyle(field)}
                        onFocus={(e) => {
                          e.target.style.borderColor = "rgba(194,164,109,0.6)";
                        }}
                        onBlur={(e) => {
                          e.target.style.borderColor = errors[field]
                            ? "#E05C5C"
                            : "rgba(194,164,109,0.2)";
                        }}
                      />
                      {errors[field] && (
                        <p
                          style={{
                            color: "#E05C5C",
                            fontSize: "0.72rem",
                            marginTop: "0.35rem",
                            fontFamily: "'Inter', sans-serif",
                          }}
                        >
                          {errors[field]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Business name */}
                {form.audienceType === "business" && (
                  <div style={{ marginBottom: "1rem" }}>
                    <label
                      style={{
                        display: "block",
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.72rem",
                        color: "rgba(245,242,236,0.7)",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Business Name (if applicable)
                    </label>
                    <input
                      type="text"
                      name="business"
                      value={form.business}
                      onChange={handleChange}
                      placeholder="Acme Co."
                      style={inputStyle("business")}
                      onFocus={(e) => {
                        e.target.style.borderColor = "rgba(194,164,109,0.6)";
                      }}
                      onBlur={(e) => {
                        e.target.style.borderColor = "rgba(194,164,109,0.2)";
                      }}
                    />
                  </div>
                )}

                {/* Message */}
                <div style={{ marginBottom: "1rem" }}>
                  <label
                    style={{
                      display: "block",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.72rem",
                      color: "rgba(245,242,236,0.7)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {form.audienceType === "business"
                      ? "How Can We Help?"
                      : "Tell Us About Yourself"}
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder={
                      form.audienceType === "business"
                        ? "Tell us about your business and what support you're looking for..."
                        : "Tell us about your background, skills, and what kind of work you're looking for..."
                    }
                    style={{ ...inputStyle("message"), resize: "vertical" }}
                    onFocus={(e) => {
                      e.target.style.borderColor = "rgba(194,164,109,0.6)";
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = errors.message
                        ? "#E05C5C"
                        : "rgba(194,164,109,0.2)";
                    }}
                  />
                  {errors.message && (
                    <p
                      style={{
                        color: "#E05C5C",
                        fontSize: "0.72rem",
                        marginTop: "0.35rem",
                        fontFamily: "'Inter', sans-serif",
                      }}
                    >
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  style={{
                    width: "100%",
                    padding: "1rem",
                    backgroundColor:
                      status === "loading"
                        ? "rgba(194,164,109,0.6)"
                        : "#C2A46D",
                    color: "#1F3A34",
                    border: "none",
                    borderRadius: 4,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.875rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    cursor: status === "loading" ? "not-allowed" : "pointer",
                    transition: "all 0.2s",
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "loading")
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "#d4b67e";
                  }}
                  onMouseLeave={(e) => {
                    if (status !== "loading")
                      (e.currentTarget as HTMLElement).style.backgroundColor =
                        "#C2A46D";
                  }}
                >
                  {status === "loading" ? (
                    <>
                      <div
                        style={{
                          width: 14,
                          height: 14,
                          border: "2px solid rgba(31,58,52,0.3)",
                          borderTopColor: "#1F3A34",
                          borderRadius: "50%",
                          animation: "spin 0.7s linear infinite",
                        }}
                      />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {status === "error" && (
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.82rem",
                      color: "#E05C5C",
                      textAlign: "center",
                      marginBottom: "0.75rem",
                      lineHeight: 1.6,
                    }}
                  >
                    Something went wrong. Please try again or email us directly
                    at hello@wildevera.com
                  </p>
                )}

                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.72rem",
                    color: "rgba(245,242,236,0.5)",
                    textAlign: "center",
                    lineHeight: 1.7,
                  }}
                >
                  By submitting, you agree to our{" "}
                  <a
                    href="/privacy"
                    style={{ color: "#C2A46D", textDecoration: "underline" }}
                  >
                    Privacy Policy
                  </a>{" "}
                  and consent to be contacted about your inquiry.
                </p>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.82rem",
                    color: "rgba(245,242,236,0.6)",
                    textAlign: "center",
                    lineHeight: 1.7,
                    marginTop: "0.75rem",
                    borderTop: "1px solid rgba(194,164,109,0.15)",
                    paddingTop: "0.75rem",
                  }}
                >
                  Interested in becoming a Virtual Assistant?{" "}
                  <a
                    href="/build-my-career"
                    style={{
                      color: "#C2A46D",
                      textDecoration: "underline",
                      fontWeight: 600,
                    }}
                  >
                    Click here
                  </a>
                </p>
              </>
            )}
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
        backgroundColor: "#14271F",
        padding: "4rem 2rem 0",
        borderTop: "1px solid rgba(194,164,109,0.15)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
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
                fontFamily: "'Playfair Display', serif",
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
                fontFamily: "'Cormorant Garamond', serif",
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

          {/* Link columns — Portal removed until ready to launch */}
          {/*{[
            {
              title: "Company",
              links: [
                // Placeholder: add real hrefs before launch or remove entries
                // { label: "About", href: "/about" },
                // { label: "Our Mission", href: "/mission" },
                // { label: "Stories", href: "/stories" },
                // { label: "Contact", href: "/contact" },
              ],
            },
            {
              title: "Services",
              links: [
                // { label: "Administrative", href: "/services/administrative" },
                // { label: "Marketing", href: "/services/marketing" },
                // { label: "Operations", href: "/services/operations" },
                // { label: "Projects", href: "/services/projects" },
              ],
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
              {col.links.length === 0 ? (
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    color: "rgba(245,242,236,0.2)",
                    fontStyle: "italic",
                  }}
                >
                  Coming soon
                </p>
              ) : (
                col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
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
                    {link.label}
                  </a>
                ))
              )}
            </div>
          ))}
        </div>

        {/* Bottom band: legal links + copyright */}
          {/*<div
          style={{
            borderTop: "1px solid rgba(245,242,236,0.08)",
            padding: "1.25rem 0 1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          {/* Copyright — dynamic year */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(245,242,236,0.3)",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Wildevera. All rights reserved.
          </p>

          {/* Legal links */}
          {/*          <div
            style={{
              display: "flex",
              gap: "1.5rem",
              flexWrap: "wrap",
            }}
          >
            {[
              // Uncomment and add real hrefs before launch:
              // { label: "Privacy Policy", href: "/privacy" },
              // { label: "Terms of Service", href: "/terms" },
              // { label: "Cookie Policy", href: "/cookies" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  color: "rgba(245,242,236,0.3)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(245,242,236,0.7)")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLElement).style.color =
                    "rgba(245,242,236,0.3)")
                }
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Brand tagline — update if courses aren't live yet */}
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(245,242,236,0.3)",
              margin: 0,
            }}
          >
            {/* 
              Switch to the line below if courses aren't live at launch:
              Virtual Services · Mission-Driven Matching · Dignified Work
            */}
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
