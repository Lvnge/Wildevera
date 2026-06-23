import { ImageResponse } from "next/og";
import { readFileSync } from "fs";
import { join } from "path";

export const runtime = "nodejs";
export const alt = "Wildevera — Where Conviction Meets Compassion";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logoData = readFileSync(
    join(process.cwd(), "public/android-chrome-512x512.png"),
  );
  const logoBase64 = `data:image/png;base64,${logoData.toString("base64")}`;

  const playfairData = readFileSync(
    join(process.cwd(), "public/fonts/PlayfairDisplay-Bold.ttf"),
  );
  const interData = readFileSync(
    join(process.cwd(), "public/fonts/Inter-Regular.ttf"),
  );

  return new ImageResponse(
    <div
      style={{
        background: "#F5F2EC",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {/* Left panel */}
      <div
        style={{
          width: "50%",
          height: "100%",
          background: "#F5F2EC",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
          borderRight: "1px solid #C2A46D",
        }}
      >
        <img
          src={logoBase64}
          width={110}
          height={110}
          style={{ marginBottom: "24px" }}
        />
        <div
          style={{
            color: "#1F3A34",
            fontSize: 64,
            fontFamily: "Playfair Display",
            fontWeight: 700,
            lineHeight: 1,
            marginBottom: "12px",
          }}
        >
          Wildevera
        </div>
        {/* Gold divider */}
        <div
          style={{
            width: "120px",
            height: "2px",
            background: "#C2A46D",
            marginBottom: "16px",
          }}
        />
        <div
          style={{
            color: "#8A7F78",
            fontSize: 22,
            fontFamily: "Playfair Display",
            fontStyle: "italic",
            textAlign: "center",
          }}
        >
          Where conviction meets compassion
        </div>
      </div>

      {/* Right panel */}
      <div
        style={{
          width: "50%",
          height: "100%",
          background: "#1F3A34",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            color: "#F5F2EC",
            fontSize: 38,
            fontFamily: "Playfair Display",
            fontWeight: 700,
            lineHeight: 1.3,
            marginBottom: "24px",
          }}
        >
          Connecting capable people with meaningful work.
        </div>
        <div
          style={{
            color: "#C2A46D",
            fontSize: 18,
            fontFamily: "Inter",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "40px",
          }}
        >
          Virtual services & career-building courses
        </div>
        <div
          style={{
            color: "#8A7F78",
            fontSize: 18,
            fontFamily: "Inter",
            letterSpacing: "0.05em",
          }}
        >
          www.wildevera.com
        </div>
        {/* CTA */}
        <div
          style={{
            marginTop: "32px",
            background: "#C2A46D",
            color: "#1F3A34",
            fontSize: 18,
            fontFamily: "Inter",
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            padding: "14px 32px",
          }}
        >
          Get Started →
        </div>
      </div>
    </div>,
    {
      ...size,
      fonts: [
        {
          name: "Playfair Display",
          data: playfairData.buffer,
          style: "normal",
          weight: 700,
        },
        {
          name: "Inter",
          data: interData.buffer,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
}
