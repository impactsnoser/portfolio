const blobs = [
  { color: "oklch(0.7 0.16 175)", size: 420, top: "5%", left: "8%", duration: "18s", delay: "0s" },
  { color: "oklch(0.65 0.18 260)", size: 360, top: "10%", left: "70%", duration: "22s", delay: "-4s" },
  { color: "oklch(0.7 0.15 30)", size: 320, top: "60%", left: "80%", duration: "20s", delay: "-9s" },
  { color: "oklch(0.68 0.16 320)", size: 380, top: "65%", left: "15%", duration: "24s", delay: "-13s" },
  { color: "oklch(0.72 0.14 200)", size: 260, top: "35%", left: "45%", duration: "16s", delay: "-6s" },
]

export function LiquidBlobs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden bg-background">
      <svg className="absolute h-0 w-0">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="24" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 24 -10"
              result="goo"
            />
          </filter>
        </defs>
      </svg>

      <div className="absolute inset-0" style={{ filter: "url(#goo)" }}>
        {blobs.map((blob, i) => (
          <span
            key={i}
            className="blob-float absolute rounded-full opacity-70 mix-blend-screen"
            style={{
              width: blob.size,
              height: blob.size,
              top: blob.top,
              left: blob.left,
              background: blob.color,
              animationDuration: blob.duration,
              animationDelay: blob.delay,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{
        backgroundImage:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
      }} />
    </div>
  )
}
