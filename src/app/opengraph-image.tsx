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
        background: "#1F3A34",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "60px",
      }}
    >
      <img
        src={logoBase64}
        width={120}
        height={120}
        style={{ marginBottom: "28px" }}
      />
      <div
        style={{
          color: "#C2A46D",
          fontSize: 28,
          fontFamily: "Inter",
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          marginBottom: "16px",
        }}
      >
        WILDEVERA
      </div>
      <div
        style={{
          color: "#F5F2EC",
          fontSize: 52,
          fontFamily: "Playfair Display",
          fontWeight: 700,
          textAlign: "center",
          lineHeight: 1.2,
          marginBottom: "28px",
        }}
      >
        Where Conviction Meets Compassion
      </div>
      <div
        style={{
          color: "#C2A46D",
          fontSize: 22,
          fontFamily: "Inter",
          textAlign: "center",
          maxWidth: "700px",
        }}
      >
        Connecting U.S. small businesses with skilled virtual assistants
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
