import React from "react";

interface AlbumSleeveProps {
  style?: React.CSSProperties;
}

export default function AlbumSleeve({ style }: AlbumSleeveProps) {
  return (
    <div
      style={{
        width: 340,
        height: 340,
        position: "relative",
        borderRadius: 4,
        overflow: "hidden",
        boxShadow: `
          0 4px 30px rgba(0,0,0,0.4),
          0 1px 3px rgba(0,0,0,0.3),
          inset 0 1px 0 rgba(255,255,255,0.1)
        `,
        ...style,
      }}
    >
      {/* Paper texture background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(135deg, #E6DCCC 0%, #DDD0BC 30%, #E2D6C6 60%, #D8CCBB 100%)
          `,
        }}
      />

      {/* Noise grain overlay */}
      <svg style={{ position: "absolute", width: 0, height: 0 }}>
        <filter id="paper-noise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="4"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="multiply" />
        </filter>
      </svg>
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.08,
          filter: "url(#paper-noise)",
          background: "#E6DCCC",
        }}
      />

      {/* Gold foil border */}
      <div
        style={{
          position: "absolute",
          inset: 12,
          border: "1px solid rgba(196,164,100,0.4)",
          borderRadius: 2,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 16,
          border: "0.5px solid rgba(196,164,100,0.25)",
          borderRadius: 1,
          pointerEvents: "none",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          padding: 32,
        }}
      >
        {/* Label branding */}
        <span
          style={{
            fontFamily: "'Special Elite', 'Courier New', monospace",
            fontSize: 8,
            letterSpacing: 4,
            color: "rgba(100,80,50,0.5)",
            textTransform: "uppercase",
            marginBottom: 8,
          }}
        >
          Golden Groove Records
        </span>

        {/* Decorative divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 40,
              height: 1,
              background: "linear-gradient(90deg, transparent, rgba(196,164,100,0.5))",
            }}
          />
          <div
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "rgba(196,164,100,0.4)",
            }}
          />
          <div
            style={{
              width: 40,
              height: 1,
              background: "linear-gradient(270deg, transparent, rgba(196,164,100,0.5))",
            }}
          />
        </div>

        {/* Album title */}
        <h1
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 26,
            fontWeight: 700,
            color: "#3D2E1F",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 4,
            letterSpacing: 1,
          }}
        >
          Amber
        </h1>
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 24,
            fontWeight: 700,
            color: "#3D2E1F",
            textAlign: "center",
            lineHeight: 1.2,
            marginBottom: 8,
            letterSpacing: 1,
          }}
        >
          Frequencies
        </h2>

        {/* Artist */}
        <span
          style={{
            fontFamily: "'Libre Baskerville', Georgia, serif",
            fontSize: 12,
            fontStyle: "italic",
            color: "rgba(61,46,31,0.7)",
            marginBottom: 16,
          }}
        >
          The Walnut Ensemble
        </span>

        {/* Decorative divider */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 60,
              height: 0.5,
              background: "linear-gradient(90deg, transparent, rgba(61,46,31,0.3))",
            }}
          />
          <div
            style={{
              width: 3,
              height: 3,
              transform: "rotate(45deg)",
              background: "rgba(196,164,100,0.5)",
            }}
          />
          <div
            style={{
              width: 60,
              height: 0.5,
              background: "linear-gradient(270deg, transparent, rgba(61,46,31,0.3))",
            }}
          />
        </div>

        {/* Side indicator */}
        <span
          style={{
            fontFamily: "'Special Elite', 'Courier New', monospace",
            fontSize: 9,
            letterSpacing: 5,
            color: "rgba(100,80,50,0.5)",
            textTransform: "uppercase",
            marginBottom: 4,
          }}
        >
          Side A · Side B
        </span>

        {/* Catalog info */}
        <span
          style={{
            fontFamily: "'Special Elite', 'Courier New', monospace",
            fontSize: 7,
            letterSpacing: 2,
            color: "rgba(100,80,50,0.35)",
            marginTop: 12,
          }}
        >
          GG-7401 · 33⅓ RPM · Stereo · 1974
        </span>
      </div>

      {/* Dark opening on right edge */}
      <div
        style={{
          position: "absolute",
          right: 0,
          top: 20,
          bottom: 20,
          width: 6,
          background: `linear-gradient(180deg,
            rgba(20,15,10,0.0) 0%,
            rgba(20,15,10,0.7) 10%,
            rgba(10,8,5,0.9) 30%,
            rgba(10,8,5,0.9) 70%,
            rgba(20,15,10,0.7) 90%,
            rgba(20,15,10,0.0) 100%
          )`,
          borderRadius: "0 2px 2px 0",
        }}
      />
    </div>
  );
}
