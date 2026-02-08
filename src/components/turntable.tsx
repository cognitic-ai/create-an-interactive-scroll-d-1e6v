import React from "react";

interface TurntableProps {
  tonearmAngle: number; // degrees from rest: 0 = rest, ~25 = over record
  isPlaying: boolean;
  needleDown: boolean;
  opacity: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export default function Turntable({
  tonearmAngle,
  isPlaying,
  needleDown,
  opacity,
  children,
  style,
}: TurntableProps) {
  return (
    <div
      style={{
        width: 500,
        height: 400,
        position: "relative",
        opacity,
        transition: "opacity 0.4s ease",
        ...style,
      }}
    >
      {/* Walnut wood base */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          borderRadius: 12,
          background: `
            repeating-linear-gradient(
              92deg,
              rgba(80,55,30,0.15) 0px,
              rgba(100,70,40,0.05) 2px,
              rgba(70,45,25,0.1) 4px,
              rgba(90,60,35,0.08) 7px,
              rgba(75,50,28,0.12) 10px
            ),
            repeating-linear-gradient(
              88deg,
              rgba(60,40,20,0.08) 0px,
              transparent 3px,
              rgba(60,40,20,0.05) 6px
            ),
            linear-gradient(135deg, #5C3D1E 0%, #4A3018 25%, #3D2714 50%, #4A3018 75%, #5C3D1E 100%)
          `,
          boxShadow: `
            0 8px 40px rgba(0,0,0,0.5),
            0 2px 8px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.2)
          `,
        }}
      />

      {/* Recessed platter area */}
      <div
        style={{
          position: "absolute",
          left: 70,
          top: "50%",
          transform: "translateY(-50%)",
          width: 330,
          height: 330,
          borderRadius: "50%",
          background: `
            radial-gradient(circle at 50% 50%, #1a1a1a 0%, #111 100%)
          `,
          boxShadow: `
            inset 0 2px 8px rgba(0,0,0,0.6),
            inset 0 0 20px rgba(0,0,0,0.3),
            0 0 0 3px rgba(40,28,15,0.8)
          `,
        }}
      >
        {/* Rubber mat texture */}
        <div
          style={{
            position: "absolute",
            inset: 4,
            borderRadius: "50%",
            background: `
              repeating-radial-gradient(
                circle at 50% 50%,
                rgba(30,30,30,1) 0px,
                rgba(25,25,25,1) 1px,
                rgba(35,35,35,1) 2px,
                rgba(28,28,28,1) 3px
              )
            `,
          }}
        />

        {/* Chrome spindle */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 10,
            height: 10,
            borderRadius: "50%",
            background: `radial-gradient(circle at 35% 35%, #E8E8E8, #999 50%, #666 100%)`,
            boxShadow: "0 1px 3px rgba(0,0,0,0.5)",
            zIndex: 10,
          }}
        />

        {/* Record sits here */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 5,
          }}
        >
          {children}
        </div>
      </div>

      {/* Tonearm assembly */}
      <div
        style={{
          position: "absolute",
          right: 30,
          top: 30,
          width: 24,
          height: 24,
          zIndex: 20,
        }}
      >
        {/* Pivot base */}
        <div
          style={{
            position: "absolute",
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: `radial-gradient(circle at 40% 35%, #CCC, #888 50%, #666 100%)`,
            boxShadow: "0 2px 6px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.3)",
          }}
        />

        {/* Tonearm group - rotates from pivot */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: 12,
            transformOrigin: "0 0",
            transform: `rotate(${tonearmAngle}deg)`,
            transition: "transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
          }}
        >
          {/* Arm shaft */}
          <div
            style={{
              position: "absolute",
              top: -2,
              left: 0,
              width: 200,
              height: 4,
              background: `linear-gradient(180deg, #BBB 0%, #888 50%, #AAA 100%)`,
              borderRadius: 2,
              transformOrigin: "0 50%",
              transform: "rotate(90deg) translateX(0)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.3)",
            }}
          />

          {/* Headshell */}
          <div
            style={{
              position: "absolute",
              top: 195,
              left: -8,
              width: 20,
              height: 16,
              background: `linear-gradient(180deg, #AAA 0%, #777 100%)`,
              borderRadius: "2px 2px 4px 4px",
              transform: "rotate(90deg)",
              boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
            }}
          >
            {/* Cartridge */}
            <div
              style={{
                position: "absolute",
                bottom: -4,
                left: 4,
                width: 12,
                height: 6,
                background: "#333",
                borderRadius: 1,
              }}
            />
            {/* Stylus needle */}
            <div
              style={{
                position: "absolute",
                bottom: -8,
                left: 8,
                width: 2,
                height: needleDown ? 6 : 4,
                background: `linear-gradient(180deg, #666, #DDD)`,
                borderRadius: "0 0 1px 1px",
                transition: "height 0.3s ease",
              }}
            />
          </div>

          {/* Counterweight */}
          <div
            style={{
              position: "absolute",
              top: -12,
              left: -4,
              width: 14,
              height: 14,
              borderRadius: "50%",
              background: `radial-gradient(circle at 40% 35%, #999, #555 100%)`,
              transform: "rotate(90deg)",
            }}
          />
        </div>
      </div>

      {/* Speed selector */}
      <div
        style={{
          position: "absolute",
          left: 20,
          bottom: 25,
          display: "flex",
          gap: 8,
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: isPlaying
                ? `radial-gradient(circle, #FF6B35 30%, #CC4400 100%)`
                : "#444",
              boxShadow: isPlaying
                ? "0 0 8px rgba(255,107,53,0.6), 0 0 16px rgba(255,107,53,0.3)"
                : "inset 0 1px 2px rgba(0,0,0,0.5)",
              transition: "all 0.4s ease",
            }}
          />
          <span
            style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: 6,
              color: "rgba(200,180,150,0.6)",
              letterSpacing: 1,
            }}
          >
            POWER
          </span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {["33", "45"].map((speed) => (
            <div
              key={speed}
              style={{
                width: 22,
                height: 12,
                borderRadius: 3,
                background:
                  speed === "33"
                    ? `linear-gradient(180deg, #888 0%, #666 100%)`
                    : `linear-gradient(180deg, #555 0%, #333 100%)`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow:
                  speed === "33"
                    ? "0 1px 3px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)"
                    : "inset 0 1px 3px rgba(0,0,0,0.4)",
              }}
            >
              <span
                style={{
                  fontFamily: "'Special Elite', monospace",
                  fontSize: 6,
                  color: speed === "33" ? "#DDD" : "#888",
                }}
              >
                {speed}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Brand label */}
      <div
        style={{
          position: "absolute",
          right: 20,
          bottom: 20,
        }}
      >
        <span
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 10,
            letterSpacing: 3,
            color: "rgba(196,164,100,0.5)",
            textTransform: "uppercase",
            fontWeight: 700,
          }}
        >
          Marantz
        </span>
      </div>
    </div>
  );
}
