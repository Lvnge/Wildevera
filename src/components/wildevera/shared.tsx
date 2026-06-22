"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// ─── Brand Colors ─────────────────────────────────────────────────────────────
// #1F3A34  Forest  |  #F5F2EC  Parchment  |  #C2A46D  Gold
// #2B2B2B  Charcoal  |  #8A7F78  Stone  |  #6E7A5C  Sage

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
];

const iconBtnBase: React.CSSProperties = {
  width: 40,
  height: 40,
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

const NAV_ITEMS = [
  {
    label: "About",
    href: "/#about",
    children: [
      { label: "Our Mission", href: "/#about" },
      { label: "Our Story", href: "/our-story" },
    ],
  },
  { label: "Services", href: "/#services" },
  { label: "For Businesses", href: "/#how-it-works" },
  { label: "Why Wildevera", href: "/#why-wildevera" },
  { label: "Get Involved", href: "/#get-involved" },
  { label: "Contact", href: "/#contact" },
];

export function SharedNavbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    if (href.startsWith("/#") && pathname === "/") {
      e.preventDefault();
      const id = href.replace("/#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

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
        <Link href="/" style={{ textDecoration: "none" }}>
          <Image
            src="/logoNav.png"
            alt="Wildevera"
            height={120}
            width={440}
            style={{ width: "auto", height: "60px" }}
            priority
          />
        </Link>

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
                onClick={(e) => handleNavClick(e, item.href)}
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

              {/* Dropdown */}
              {item.children && (
                <div
                  style={{
                    position: "absolute",
                    top: "100%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    paddingTop: "0.75rem",
                    opacity: openDropdown === item.label ? 1 : 0,
                    pointerEvents:
                      openDropdown === item.label ? "auto" : "none",
                    transition: "opacity 0.15s ease",
                    zIndex: 200,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#1F3A34",
                      border: "1px solid rgba(194,164,109,0.3)",
                      borderRadius: 8,
                      padding: "0.5rem 0",
                      minWidth: 180,
                      boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
                    }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={(e) =>
                          handleNavClick(
                            e as React.MouseEvent<HTMLAnchorElement>,
                            child.href,
                          )
                        }
                        style={{
                          display: "block",
                          padding: "0.6rem 1.25rem",
                          color: "rgba(245,242,236,0.8)",
                          textDecoration: "none",
                          fontSize: "0.85rem",
                          fontFamily: "'Inter', sans-serif",
                          transition: "all 0.15s",
                        }}
                        onMouseEnter={(e) => {
                          (e.target as HTMLElement).style.color = "#C2A46D";
                          (e.target as HTMLElement).style.paddingLeft =
                            "1.5rem";
                        }}
                        onMouseLeave={(e) => {
                          (e.target as HTMLElement).style.color =
                            "rgba(245,242,236,0.8)";
                          (e.target as HTMLElement).style.paddingLeft =
                            "1.25rem";
                        }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}

          <Link
            href="https://form.jotform.com/261294721832862"
            target="_blank"
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
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "#d4b67e";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.backgroundColor =
                "#C2A46D";
              (e.currentTarget as HTMLElement).style.transform =
                "translateY(0)";
            }}
          >
            Get Started
          </Link>
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
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              style={{
                width: 24,
                height: 2,
                backgroundColor: "#1F3A34",
                marginBottom: i < 2 ? 5 : 0,
                transition: "all 0.3s",
                opacity: i === 1 && mobileOpen ? 0 : 1,
                transform:
                  mobileOpen && i === 0
                    ? "rotate(45deg) translate(5px, 5px)"
                    : mobileOpen && i === 2
                      ? "rotate(-45deg) translate(5px, -5px)"
                      : "none",
              }}
            />
          ))}
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
            <div key={item.label}>
              <Link
                href={item.href}
                onClick={(e) => {
                  handleNavClick(
                    e as React.MouseEvent<HTMLAnchorElement>,
                    item.href,
                  );
                  setMobileOpen(false);
                }}
                style={{
                  display: "block",
                  color: "rgba(245,242,236,0.85)",
                  textDecoration: "none",
                  padding: "0.75rem 0",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.95rem",
                  borderBottom: item.children
                    ? "none"
                    : "1px solid rgba(245,242,236,0.1)",
                }}
              >
                {item.label}
              </Link>
              {item.children &&
                item.children.map((child) => (
                  <Link
                    key={child.label}
                    href={child.href}
                    onClick={(e) => {
                      handleNavClick(
                        e as React.MouseEvent<HTMLAnchorElement>,
                        child.href,
                      );
                      setMobileOpen(false);
                    }}
                    style={{
                      display: "block",
                      color: "#C2A46D",
                      textDecoration: "none",
                      padding: "0.5rem 0 0.5rem 1rem",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.85rem",
                      borderBottom: "1px solid rgba(245,242,236,0.1)",
                    }}
                  >
                    — {child.label}
                  </Link>
                ))}
            </div>
          ))}
          <Link
            href="https://form.jotform.com/261294721832862"
            target="_blank"
            onClick={() => {
              setMobileOpen(false);
            }}
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
          </Link>
        </div>
      )}
    </header>
  );
}

export function SharedFooter() {
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
            <div
              style={{
                display: "flex",
                gap: "0.6rem",
                flexWrap: "wrap",
                marginTop: "1.5rem",
              }}
            >
              {SOCIAL_LINKS.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
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

          {/* Get Involved */}
          <div>
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
              Get Involved
            </div>
            {[
              { label: "Work With a VA", href: "/work-with-us" },
              { label: "Sponsor a VA", href: "/sponsor" },
              { label: "Mentor a VA", href: "/mentor" },
              { label: "Join as Advisor", href: "/advisor" },
            ].map((link) => (
              <Link
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
              </Link>
            ))}
          </div>

          {/* Company */}
          <div>
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
              Company
            </div>
            {[
              { label: "About", href: "/#about" },
              { label: "Our Story", href: "/our-story" },
              { label: "Services", href: "/#services" },
              { label: "Contact", href: "/#contact" },
              { label: "Privacy Policy", href: "/privacy" },
            ].map((link) => (
              <Link
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
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            padding: "1.25rem 0 1.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "0.75rem",
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(245,242,236,0.3)",
              margin: 0,
            }}
          >
            © {new Date().getFullYear()} Wildevera LLC. All rights reserved.
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "0.8rem",
              color: "rgba(245,242,236,0.3)",
              margin: 0,
            }}
          >
            Virtual Services · Mission-Driven Matching · Dignified Work
          </p>
        </div>
      </div>
    </footer>
  );
}
