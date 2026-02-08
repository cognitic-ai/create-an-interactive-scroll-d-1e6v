import React from "react";

interface VinylRecordProps {
  isSpinning: boolean;
  side: "A" | "B";
  flipProgress: number; // 0 = Side A, 1 = Side B
  style?: React.CSSProperties;
}

export default function VinylRecord({
  isSpinning,
  side,
  flipProgress,
  style,
}: VinylRecordProps) {
  const grooveRings = Array.from({ length: 45 }, (_, i) => i);

  return (
    <div
      style={{
        width: 320,
        height: 320,
        perspective: 1200,
        ...style,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          transformStyle: "preserve-3d",
          transform: `rotateY(${flipProgress * 180}deg)`,
          transition: "transform 0.05s linear",
        }}
      >
        {/* Side A */}
        <div
          className={isSpinning && flipProgress < 0.5 ? "vinyl-spin chromatic-active" : ""}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            borderRadius: "50%",
            background: `
              radial-gradient(circle at 50% 50%, transparent 18%, #0a0a0a 18.5%),
              radial-gradient(circle at 50% 50%, #0a0a0a 92%, #1a1a1a 93%, #0d0d0d 100%)
            `,
            boxShadow: `
              0 2px 20px rgba(0,0,0,0.6),
              inset 0 0 3px rgba(255,255,255,0.05),
              0 0 0 2px #1a1a1a,
              0 0 0 4px #0d0d0d
            `,
          }}
        >
          {/* Groove rings */}
          {grooveRings.map((i) => {
            const r = 20 + i * 1.55;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: `${50 - r}%`,
                  left: `${50 - r}%`,
                  width: `${r * 2}%`,
                  height: `${r * 2}%`,
                  borderRadius: "50%",
                  border: `0.5px solid rgba(${40 + (i % 3) * 8}, ${40 + (i % 5) * 6}, ${40 + (i % 7) * 5}, ${0.15 + (i % 4) * 0.05})`,
                  pointerEvents: "none",
                }}
              />
            );
          })}

          {/* Light reflection sweep */}
          <div
            className={isSpinning && flipProgress < 0.5 ? "groove-shimmer" : ""}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: `conic-gradient(
                from 0deg,
                transparent 0deg,
                rgba(255,255,255,0.03) 30deg,
                rgba(255,240,220,0.08) 60deg,
                transparent 90deg,
                transparent 150deg,
                rgba(200,180,255,0.05) 180deg,
                rgba(255,220,200,0.06) 210deg,
                transparent 240deg,
                transparent 330deg,
                rgba(255,255,255,0.03) 360deg
              )`,
              pointerEvents: "none",
            }}
          />

          {/* Rainbow iridescence */}
          <div
            style={{
              position: "absolute",
              inset: "19%",
              borderRadius: "50%",
              background: `conic-gradient(
                from 45deg,
                rgba(255,0,0,0.04),
                rgba(255,165,0,0.04),
                rgba(255,255,0,0.03),
                rgba(0,255,0,0.04),
                rgba(0,100,255,0.04),
                rgba(75,0,130,0.03),
                rgba(255,0,0,0.04)
              )`,
              mixBlendMode: "screen",
              pointerEvents: "none",
            }}
          />

          {/* Center label - Side A (Burnt Orange) */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "36%",
              height: "36%",
              borderRadius: "50%",
              background: `radial-gradient(circle at 40% 35%, #E8832A, #C4601A 40%, #A04A12 70%, #7A360D 100%)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.2)",
            }}
          >
            {/* Label ring */}
            <div
              style={{
                position: "absolute",
                inset: 4,
                borderRadius: "50%",
                border: "1px solid rgba(255,220,180,0.2)",
                pointerEvents: "none",
              }}
            />
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 7,
                letterSpacing: 3,
                color: "rgba(255,230,200,0.9)",
                textTransform: "uppercase",
                marginBottom: 1,
              }}
            >
              Golden Groove
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 11,
                fontWeight: "bold",
                color: "#FFF5E6",
                marginBottom: 1,
              }}
            >
              Side A
            </span>
            <span
              style={{
                fontFamily: "'Libre Baskerville', Georgia, serif",
                fontSize: 6,
                color: "rgba(255,230,200,0.7)",
                fontStyle: "italic",
              }}
            >
              33⅓ RPM
            </span>
            <span
              style={{
                fontFamily: "'Special Elite', 'Courier New', monospace",
                fontSize: 5,
                color: "rgba(255,230,200,0.5)",
                marginTop: 2,
              }}
            >
              GG-7401-A
            </span>
            {/* Spindle hole */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#1a1a1a",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.8)",
              }}
            />
          </div>
        </div>

        {/* Side B */}
        <div
          className={isSpinning && flipProgress >= 0.5 ? "vinyl-spin chromatic-active" : ""}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: "50%",
            background: `
              radial-gradient(circle at 50% 50%, transparent 18%, #0a0a0a 18.5%),
              radial-gradient(circle at 50% 50%, #0a0a0a 92%, #1a1a1a 93%, #0d0d0d 100%)
            `,
            boxShadow: `
              0 2px 20px rgba(0,0,0,0.6),
              inset 0 0 3px rgba(255,255,255,0.05),
              0 0 0 2px #1a1a1a,
              0 0 0 4px #0d0d0d
            `,
          }}
        >
          {/* Groove rings for Side B */}
          {grooveRings.map((i) => {
            const r = 20 + i * 1.55;
            return (
              <div
                key={i}
                style={{
                  position: "absolute",
                  top: `${50 - r}%`,
                  left: `${50 - r}%`,
                  width: `${r * 2}%`,
                  height: `${r * 2}%`,
                  borderRadius: "50%",
                  border: `0.5px solid rgba(${40 + (i % 3) * 8}, ${40 + (i % 5) * 6}, ${40 + (i % 7) * 5}, ${0.15 + (i % 4) * 0.05})`,
                  pointerEvents: "none",
                }}
              />
            );
          })}

          {/* Light reflection for Side B */}
          <div
            className={isSpinning && flipProgress >= 0.5 ? "groove-shimmer" : ""}
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              background: `conic-gradient(
                from 120deg,
                transparent 0deg,
                rgba(255,255,255,0.03) 30deg,
                rgba(255,240,220,0.08) 60deg,
                transparent 90deg,
                transparent 150deg,
                rgba(200,180,255,0.05) 180deg,
                rgba(255,220,200,0.06) 210deg,
                transparent 240deg,
                transparent 330deg,
                rgba(255,255,255,0.03) 360deg
              )`,
              pointerEvents: "none",
            }}
          />

          {/* Center label - Side B (Avocado Green) */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "36%",
              height: "36%",
              borderRadius: "50%",
              background: `radial-gradient(circle at 40% 35%, #8BA84A, #6B8A2A 40%, #4A6A18 70%, #3A5210 100%)`,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
              boxShadow: "inset 0 1px 3px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.2)",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 4,
                borderRadius: "50%",
                border: "1px solid rgba(200,230,160,0.2)",
                pointerEvents: "none",
              }}
            />
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 7,
                letterSpacing: 3,
                color: "rgba(220,240,200,0.9)",
                textTransform: "uppercase",
                marginBottom: 1,
              }}
            >
              Golden Groove
            </span>
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 11,
                fontWeight: "bold",
                color: "#F0FFE6",
                marginBottom: 1,
              }}
            >
              Side B
            </span>
            <span
              style={{
                fontFamily: "'Libre Baskerville', Georgia, serif",
                fontSize: 6,
                color: "rgba(220,240,200,0.7)",
                fontStyle: "italic",
              }}
            >
              33⅓ RPM
            </span>
            <span
              style={{
                fontFamily: "'Special Elite', 'Courier New', monospace",
                fontSize: 5,
                color: "rgba(220,240,200,0.5)",
                marginTop: 2,
              }}
            >
              GG-7401-B
            </span>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#1a1a1a",
                boxShadow: "inset 0 1px 3px rgba(0,0,0,0.8)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
