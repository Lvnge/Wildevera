"use client";

import Image from "next/image";
import { SharedNavbar, SharedFooter } from "@/components/wildevera/shared";

export default function FounderPage() {
  return (
    <>
      <SharedNavbar />
      <main style={{ paddingTop: 80 }}>
        {/* ── Hero ── Cream */}
        <section
          style={{ backgroundColor: "#F5F2EC", padding: "6rem 2rem 5rem" }}
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
            {/* Photo */}
            <div style={{ display: "flex", justifyContent: "center" }}>
              <div
                style={{
                  width: 300,
                  height: 300,
                  borderRadius: "50%",
                  border: "4px solid #C2A46D",
                  overflow: "hidden",
                  flexShrink: 0,
                  backgroundColor: "#F5F2EC",
                }}
              >
                <Image
                  src="/jessica.png"
                  alt="Jessica Pérez, Founder of Wildevera"
                  width={300}
                  height={300}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Copy */}
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
                Our Story
              </p>
              <h1
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(2.2rem, 4vw, 3.2rem)",
                  fontWeight: 700,
                  color: "#1F3A34",
                  lineHeight: 1.2,
                  marginBottom: "1.25rem",
                }}
              >
                Born From Lived Experience.
                <br />
                Built On Belief.
              </h1>
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "1.15rem",
                  color: "#8A7F78",
                  lineHeight: 1.7,
                }}
              >
                A note from Jessica Pérez, Founder of Wildevera.
              </p>
            </div>
          </div>
        </section>

        {/* ── Section 1 — Where It Began ── Cream */}
        <section
          style={{
            backgroundColor: "#F5F2EC",
            padding: "5rem 2rem",
            borderTop: "1px solid rgba(31,58,52,0.08)",
          }}
        >
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                color: "#C2A46D",
                textTransform: "uppercase",
                marginBottom: "2rem",
                fontWeight: 600,
              }}
            >
              Where It Began
            </p>
            {[
              "I've spent most of my life building bridges — between cultures, between people, between needs and resources.",
              "From age three to fifteen, I lived in the Caribbean as a missionary kid, working alongside my mother — a missionary nurse — running medical clinics and outreach. I've been a military spouse to a retired U.S. Army Black Hawk pilot, a doula, a childbirth educator, a CNA, a homeschool co-op teacher, an FRG leader, and a working mother. I've immigrated to new countries and left family and loved ones behind. I know what it means to start over in an unfamiliar place.",
              "But Wildevera wasn't born from a résumé. It was born from a conversation.",
            ].map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.05rem",
                  color: "#3A3A38",
                  lineHeight: 1.9,
                  marginBottom: "1.5rem",
                }}
              >
                {p}
              </p>
            ))}

            {/* Story card */}
            <div
              style={{
                backgroundColor: "#1F3A34",
                borderRadius: 8,
                padding: "2.5rem 3rem",
                margin: "2.5rem 0",
                borderLeft: "4px solid #C2A46D",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "1.25rem",
                  color: "#F5F2EC",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                A few years ago, I sat with a woman named Ava in Mexico. Her
                husband had grown up in the United States — gone to school
                there, built his life there, gone to work there one ordinary
                morning — and was caught up in a deportation sting and sent to a
                country he didn&apos;t know. No connections. No family. No path
                forward.
              </p>
            </div>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.05rem",
                color: "#3A3A38",
                lineHeight: 1.9,
              }}
            >
              That story didn&apos;t leave me. And it wasn&apos;t the only one I
              heard.
            </p>
          </div>
        </section>

        {/* ── Section 2 — The People Behind the Mission ── Deep Green */}
        <section
          style={{
            backgroundColor: "#1F3A34",
            padding: "5rem 2rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {[400, 600].map((size, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                bottom: i === 0 ? -100 : -160,
                right: i === 0 ? -100 : -160,
                width: size,
                height: size,
                borderRadius: "50%",
                border: "1px solid rgba(194,164,109,0.08)",
                pointerEvents: "none",
              }}
            />
          ))}
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
                marginBottom: "2rem",
                fontWeight: 600,
              }}
            >
              The People Behind the Mission
            </p>
            {[
              "I've now met dozens of families like Ava's.",
              "I've met 26-year-olds who lived in the U.S. since they were one — married, with children — suddenly deported to a country whose language they barely speak. I've met 17- and 18-year-old American kids who followed their deported parents because they couldn't survive on their own. I've met stay-at-home American mothers trying to hold their families together on a minimum wage of $17 a day.",
              "These are not strangers to American life. They are American life. Raised here. Educated here. Shaped by this culture from their first memory. And then, through circumstances often beyond their control, they found themselves on the wrong side of a border with skills the U.S. economy still desperately needs — and no way to use them.",
            ].map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.05rem",
                  color: "rgba(245,242,236,0.85)",
                  lineHeight: 1.9,
                  marginBottom: "1.5rem",
                }}
              >
                {p}
              </p>
            ))}

            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#F5F2EC",
                lineHeight: 1.7,
                marginBottom: "2.5rem",
              }}
            >
              They don&apos;t need charity. They need options. They need a
              future. They need hope.
            </p>

            {/* Gold pill badges */}
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              {["OPTIONS", "A FUTURE", "HOPE"].map((label) => (
                <div
                  key={label}
                  style={{
                    backgroundColor: "#C2A46D",
                    color: "#1F3A34",
                    borderRadius: 999,
                    padding: "0.5rem 1.5rem",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    letterSpacing: "0.12em",
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Section 3 — Why Virtual Assistance ── White */}
        <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 2rem" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                color: "#C2A46D",
                textTransform: "uppercase",
                marginBottom: "2rem",
                fontWeight: 600,
              }}
            >
              Why Virtual Assistance
            </p>
            {[
              "I've been working remotely since 2008 — first as a bookkeeper for a travel agency, then across aviation, security, recruiting, concierge, coaching, and marketing. As a contract VA since 2022, I've worked closely with small business owners across industries.",
              "And in that time, I've seen a pattern I refuse to keep quiet about.",
            ].map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.05rem",
                  color: "#3A3A38",
                  lineHeight: 1.9,
                  marginBottom: "1.5rem",
                }}
              >
                {p}
              </p>
            ))}

            <div
              style={{
                backgroundColor: "#F5F2EC",
                borderRadius: 8,
                padding: "2rem 2.5rem",
                borderLeft: "4px solid #C2A46D",
                margin: "2rem 0",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "1.2rem",
                  color: "#1F3A34",
                  lineHeight: 1.8,
                  margin: 0,
                }}
              >
                The VA industry has a dignity problem. Too many clients see VAs
                as cheap labor — people to extract value from, people who&apos;d
                better &quot;earn their keep.&quot; Too many VAs are told
                they&apos;re business owners and then treated like disposable
                employees. There is a quiet toxicity in this space, and it
                doesn&apos;t have to exist.
              </p>
            </div>

            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "#1F3A34",
                lineHeight: 1.6,
              }}
            >
              I want Wildevera to be different.
            </p>
          </div>
        </section>

        {/* ── Section 4 — The Wildevera Belief ── Cream */}
        <section style={{ backgroundColor: "#F5F2EC", padding: "5rem 2rem" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                color: "#C2A46D",
                textTransform: "uppercase",
                marginBottom: "2rem",
                fontWeight: 600,
              }}
            >
              The Wildevera Belief
            </p>
            {[
              "I believe VAs are business owners. I want them to act like it — to price their services with confidence, to communicate the value they bring, to take ownership of their role in a client's success. I want them to climb a virtual corporate ladder of their own, earn certifications, and one day open their own bookkeeping firms, marketing agencies, and consulting practices. I want them to bring in VAs of their own.",
              "I also believe clients deserve excellence. When my VAs win, my clients win. When my clients win, my VAs win. Their success is shared, and so is the responsibility for it.",
              "That's the Wildevera ethos in one sentence:",
            ].map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.05rem",
                  color: "#3A3A38",
                  lineHeight: 1.9,
                  marginBottom: "1.5rem",
                }}
              >
                {p}
              </p>
            ))}

            {/* Pull quote */}
            <div
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: 8,
                padding: "2.25rem 2.5rem",
                borderLeft: "4px solid #C2A46D",
                margin: "2rem 0",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "1.4rem",
                  color: "#1F3A34",
                  lineHeight: 1.7,
                  margin: 0,
                }}
              >
                &ldquo;When the client succeeds, we succeed. Their wins are our
                wins. Their challenges are ours to help solve.&rdquo;
              </p>
            </div>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.05rem",
                color: "#3A3A38",
                lineHeight: 1.9,
              }}
            >
              This is what dignified work looks like — on both sides of the
              relationship.
            </p>
          </div>
        </section>

        {/* ── Section 5 — More Than a Placement Agency ── White */}
        <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 2rem" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                color: "#C2A46D",
                textTransform: "uppercase",
                marginBottom: "2rem",
                fontWeight: 600,
              }}
            >
              More Than a Placement Agency
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.05rem",
                color: "#3A3A38",
                lineHeight: 1.9,
                marginBottom: "2rem",
              }}
            >
              Wildevera isn&apos;t only about connecting businesses with virtual
              assistants. It&apos;s about building a path from zero to hero —
              and a community that walks it together.
            </p>

            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#1F3A34",
                marginBottom: "1.25rem",
              }}
            >
              We&apos;re building:
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                marginBottom: "2.5rem",
              }}
            >
              {[
                {
                  title: "Career-building courses",
                  body: 'That take a complete beginner from "I don\'t know where to start" to "I run my own virtual business."',
                },
                {
                  title: "A mentorship and sponsorship community",
                  body: "Where each VA is supported by people who've walked the road ahead of them — and where supporters can adopt, mentor, or sponsor a VA's training journey directly.",
                },
                {
                  title: "A support network for displaced families",
                  body: "Navigating the disorientation of deportation, where shared experience becomes shared strength.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#F5F2EC",
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
                      marginBottom: "0.4rem",
                    }}
                  >
                    {item.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.9rem",
                      color: "#5F5E5A",
                      lineHeight: 1.75,
                    }}
                  >
                    {item.body}
                  </div>
                </div>
              ))}
            </div>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.05rem",
                color: "#3A3A38",
                lineHeight: 1.9,
              }}
            >
              Five years from now, I want to look back and see thousands of
              lives rebuilt. Hundreds of families supported. Thousands of
              workers confident, at peace, and proud of what they&apos;ve built.
              And hundreds — maybe thousands — of small business owners who
              reclaimed their time and grew their dreams because someone
              capable, kind, and committed had their back.
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.1rem",
                fontWeight: 700,
                color: "#1F3A34",
                lineHeight: 1.6,
                marginTop: "1.5rem",
              }}
            >
              That&apos;s the future Wildevera is building toward.
            </p>
          </div>
        </section>

        {/* ── Section 6 — Why I'm The One Building This ── Cream */}
        <section style={{ backgroundColor: "#F5F2EC", padding: "5rem 2rem" }}>
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                color: "#C2A46D",
                textTransform: "uppercase",
                marginBottom: "2rem",
                fontWeight: 600,
              }}
            >
              Why I&apos;m The One Building This
            </p>
            {[
              "I don't have a Stanford MBA. What I have is a lifetime of connecting people to what they need — and decades of practice doing it across cultures, languages, and circumstances most people will never have to navigate.",
              "I'm a visionary and a problem-solver. I'm a mother and a caregiver. I went from being \"just a mom\" to finding my passion, my skills, and my purpose — and turning them into a way to help others do the same.",
            ].map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "1.05rem",
                  color: "#3A3A38",
                  lineHeight: 1.9,
                  marginBottom: "1.5rem",
                }}
              >
                {p}
              </p>
            ))}

            {/* Featured pull quote */}
            <div
              style={{
                textAlign: "center",
                padding: "3rem 2rem",
                margin: "2rem 0",
              }}
            >
              <p
                style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontStyle: "italic",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  color: "#1F3A34",
                  lineHeight: 1.3,
                  margin: "0 0 1rem",
                }}
              >
                &ldquo;If I can do it, you can too.&rdquo;
              </p>
              <div
                style={{
                  width: 48,
                  height: 3,
                  backgroundColor: "#C2A46D",
                  margin: "0 auto",
                }}
              />
            </div>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1.05rem",
                color: "#3A3A38",
                lineHeight: 1.9,
              }}
            >
              I was born to build Wildevera. It is the perfect package of my
              skills, my passions, and my convictions woven into one purpose.
            </p>
          </div>
        </section>

        {/* ── Section 7 — Where You Come In ── Deep Green */}
        <section
          style={{
            backgroundColor: "#1F3A34",
            padding: "5rem 2rem",
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
              Where You Come In
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
              If you&apos;ve read this far, something here resonated with you.
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "1rem",
                color: "rgba(245,242,236,0.7)",
                lineHeight: 1.8,
                marginBottom: "3rem",
              }}
            >
              There are several ways to be part of what we&apos;re building:
            </p>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              {[
                {
                  audience:
                    "You're a business owner ready for capable, mission-aligned support that elevates your work.",
                  cta: "Schedule a Clarity Call",
                  href: "https://calendly.com/hello-wildevera",
                },
                {
                  audience:
                    "You're a displaced or deported professional ready to rebuild.",
                  cta: "Apply to Join Our Network",
                  href: "https://form.jotform.com/261294721832862",
                },
                {
                  audience:
                    "You believe in this work and want to help it grow — as an advisor, partner, or community advocate.",
                  cta: "Get In Touch",
                  href: "https://form.jotform.com/261294721832862",
                },
                {
                  audience:
                    "You'd like to sponsor or mentor a VA through their training and into their first placement.",
                  cta: "Become a Sponsor",
                  href: "/sponsor",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "2rem",
                    padding: "1.5rem 0",
                    borderBottom: "1px solid rgba(245,242,236,0.08)",
                    flexWrap: "wrap",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.95rem",
                      color: "rgba(245,242,236,0.8)",
                      lineHeight: 1.7,
                      margin: 0,
                      maxWidth: 440,
                    }}
                  >
                    {item.audience}
                  </p>
                  <a
                    href={item.href}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      backgroundColor: "#C2A46D",
                      color: "#1F3A34",
                      padding: "0.7rem 1.5rem",
                      borderRadius: 4,
                      textDecoration: "none",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      fontFamily: "'Inter', sans-serif",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      transition: "all 0.2s",
                      whiteSpace: "nowrap",
                      flexShrink: 0,
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
                    {item.cta} →
                  </a>
                </div>
              ))}

              {/* Share CTA */}
              <div style={{ paddingTop: "1rem" }}>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.95rem",
                    color: "rgba(245,242,236,0.8)",
                    lineHeight: 1.7,
                    marginBottom: "1rem",
                  }}
                >
                  You can always share the mission. The simplest, most powerful
                  thing anyone can do is tell someone else that Wildevera
                  exists.
                </p>
                <a
                  href="https://twitter.com/intent/tweet?text=Check%20out%20Wildevera%20%E2%80%94%20connecting%20businesses%20with%20skilled%20VAs%20while%20creating%20dignified%20work%20for%20displaced%20professionals.%20wildevera.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    border: "1px solid rgba(194,164,109,0.5)",
                    color: "#C2A46D",
                    padding: "0.7rem 1.5rem",
                    borderRadius: 4,
                    textDecoration: "none",
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "rgba(194,164,109,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.backgroundColor =
                      "transparent";
                  }}
                >
                  Share Our Story →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Closing Signature ── Cream */}
        <section
          style={{
            backgroundColor: "#F5F2EC",
            padding: "5rem 2rem",
            textAlign: "center",
          }}
        >
          <div style={{ maxWidth: 480, margin: "0 auto" }}>
            <div
              style={{
                width: 48,
                height: 2,
                backgroundColor: "#C2A46D",
                margin: "0 auto 2rem",
              }}
            />
            <p
              style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontStyle: "italic",
                fontSize: "1.2rem",
                color: "#5F5E5A",
                lineHeight: 1.8,
                marginBottom: "1rem",
              }}
            >
              — With conviction and gratitude,
            </p>
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.5rem",
                fontWeight: 700,
                color: "#1F3A34",
                marginBottom: "0.5rem",
              }}
            >
              Jessica Pérez
            </p>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "0.8rem",
                letterSpacing: "0.15em",
                color: "#C2A46D",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Founder, Wildevera
            </p>
          </div>
        </section>
      </main>
      <SharedFooter />
    </>
  );
}
