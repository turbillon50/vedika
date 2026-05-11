// Védika — logo glyph (interlaced knot, navy + gold)
function VedikaKnot({ size = 64, style = {} }) {
  const navy = "#0B1733", navyLite = "#1F3160", gold = "#B89248", goldLite = "#D4AF5C";
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={style}>
      <defs>
        <linearGradient id="vk-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#D4AF5C"/>
          <stop offset="50%" stopColor="#B89248"/>
          <stop offset="100%" stopColor="#8D6E2C"/>
        </linearGradient>
        <linearGradient id="vk-navy" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1F3160"/>
          <stop offset="100%" stopColor="#0B1733"/>
        </linearGradient>
      </defs>
      <g transform="translate(100,100)" fill="none" strokeWidth="14" strokeLinecap="round">
        {/* Outer dorado ring loop */}
        <path d="M 0,-72 C 40,-72 72,-40 72,0 C 72,40 40,72 0,72 C -40,72 -72,40 -72,0 C -72,-40 -40,-72 0,-72 Z" stroke="url(#vk-gold)" strokeWidth="2" opacity=".45"/>

        {/* Two infinity-like interlaced loops — gold first */}
        <path d="M -60,-30 C -30,-60 30,-60 60,-30 C 75,-15 75,15 60,30 C 30,60 -30,60 -60,30 C -75,15 -75,-15 -60,-30 Z"
              stroke="url(#vk-gold)" strokeWidth="11"/>
        <path d="M -55,0 Q -25,-50 0,-50 Q 25,-50 25,-20 Q 25,10 0,20 Q -25,30 -25,55"
              stroke="url(#vk-navy)" strokeWidth="11"/>
        <path d="M 55,0 Q 25,50 0,50 Q -25,50 -25,20 Q -25,-10 0,-20 Q 25,-30 25,-55"
              stroke="url(#vk-navy)" strokeWidth="11"/>
        <path d="M 0,-65 Q -42,-42 -42,0 Q -42,42 0,65" stroke="url(#vk-gold)" strokeWidth="9" opacity=".85"/>
        <path d="M 0,65 Q 42,42 42,0 Q 42,-42 0,-65" stroke="url(#vk-gold)" strokeWidth="9" opacity=".85"/>
      </g>
    </svg>
  );
}

function VedikaWordmark({ size = 18, mono = false, style = {} }) {
  const ink = mono ? "#0B1733" : "#1A2A4F";
  return (
    <span className="v-serif" style={{ fontSize: size, color: ink, letterSpacing: size * 0.18, fontWeight: 500, textTransform: "uppercase", display: "inline-block", ...style }}>
      VÉD<span style={{ letterSpacing: 0 }}>I</span>KA
    </span>
  );
}

function VedikaLockup({ size = 80, slogan = false }) {
  return (
    <div style={{ display: "inline-flex", flexDirection: "column", alignItems: "center", gap: size * 0.16 }}>
      <VedikaKnot size={size}/>
      <VedikaWordmark size={size * 0.22}/>
      {slogan && (
        <div style={{ fontFamily: "var(--sans)", fontSize: size * 0.075, letterSpacing: "0.32em", color: "var(--ink-mute)", textTransform: "uppercase", marginTop: 2 }}>
          Justicia humana <span style={{ color: "var(--gold-1)", margin: "0 6px" }}>•</span> Soluciones integrales
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// iPhone bezel — cinematic, no notch chrome distraction
// ─────────────────────────────────────────────────────────────
function Phone({ children, theme = "light", scale = 1, label, idx, big }) {
  const W = 390, H = 844;
  const bg = theme === "dark" ? "#080A12" : theme === "amber" ? "#1A0F08" : "#FBFAF7";
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
      <div style={{
        width: W, height: H, position: "relative",
        background: bg,
        borderRadius: 48, overflow: "hidden",
        boxShadow: "0 50px 100px -20px rgba(0,0,0,0.45), 0 0 0 11px #0A0B10, 0 0 0 12px #1F2230, 0 0 0 14px rgba(255,255,255,0.04)",
      }}>
        {/* dynamic island */}
        <div style={{ position: "absolute", top: 11, left: "50%", transform: "translateX(-50%)", width: 122, height: 35, borderRadius: 22, background: "#000", zIndex: 60 }}/>
        {/* status bar */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 54, zIndex: 10, padding: "20px 32px 0", display: "flex", justifyContent: "space-between", alignItems: "center", color: theme === "light" ? "#0B1733" : "#FBFAF7", fontFamily: "var(--sans)", fontSize: 15, fontWeight: 600, pointerEvents: "none" }}>
          <span>9:41</span>
          <span style={{ display: "flex", gap: 5, alignItems: "center" }}>
            <svg width="16" height="11" viewBox="0 0 16 11"><rect x="0" y="7" width="2.5" height="4" rx=".5" fill="currentColor"/><rect x="4" y="5" width="2.5" height="6" rx=".5" fill="currentColor"/><rect x="8" y="3" width="2.5" height="8" rx=".5" fill="currentColor"/><rect x="12" y="0" width="2.5" height="11" rx=".5" fill="currentColor"/></svg>
            <svg width="22" height="11" viewBox="0 0 22 11"><rect x="0.5" y="0.5" width="18.5" height="10" rx="2.6" stroke="currentColor" strokeOpacity=".4" fill="none"/><rect x="2" y="2" width="15.5" height="7" rx="1.4" fill="currentColor"/></svg>
          </span>
        </div>
        {/* content */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", borderRadius: 48 }}>
          {children}
        </div>
        {/* home indicator */}
        <div style={{ position: "absolute", bottom: 9, left: "50%", transform: "translateX(-50%)", width: 134, height: 5, borderRadius: 100, background: theme === "light" ? "rgba(11,23,51,0.4)" : "rgba(251,250,247,0.5)", zIndex: 70 }}/>
      </div>
      {label && (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2, marginTop: 8 }}>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "rgba(245,240,225,0.45)", letterSpacing: 1.5 }}>SCREEN · {String(idx).padStart(2, "0")}</div>
          <div style={{ fontFamily: "var(--serif)", fontSize: 18, color: "#F5F0E1", letterSpacing: -0.2, fontWeight: 500 }}>{label}</div>
        </div>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────
// Common primitives
// ─────────────────────────────────────────────────────────────
function NavTop({ title, rightIcon = "···", onLight = true, eyebrow }) {
  const ink = onLight ? "#0B1733" : "#FBFAF7";
  const mute = onLight ? "#6B7A93" : "rgba(251,250,247,0.55)";
  return (
    <div style={{ paddingTop: 62, paddingLeft: 24, paddingRight: 24, paddingBottom: 8, position: "relative", zIndex: 5 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ width: 38, height: 38, borderRadius: 19, background: onLight ? "rgba(11,23,51,0.04)" : "rgba(251,250,247,0.08)", display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${onLight ? "rgba(11,23,51,0.08)" : "rgba(251,250,247,0.12)"}` }}>
          <svg width="9" height="14" viewBox="0 0 9 14"><path d="M8 1 L1 7 L8 13" stroke={ink} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </div>
        {eyebrow && <div className="v-eyebrow" style={{ color: mute }}>{eyebrow}</div>}
        <div style={{ width: 38, height: 38, borderRadius: 19, background: onLight ? "rgba(11,23,51,0.04)" : "rgba(251,250,247,0.08)", display: "flex", alignItems: "center", justifyContent: "center", color: ink, fontSize: 16, border: `1px solid ${onLight ? "rgba(11,23,51,0.08)" : "rgba(251,250,247,0.12)"}` }}>{rightIcon}</div>
      </div>
      {title && <div className="v-serif" style={{ fontSize: 36, fontWeight: 500, color: ink, marginTop: 24, letterSpacing: -1, lineHeight: 1.05 }}>{title}</div>}
    </div>
  );
}

function TabBar({ active = "panel" }) {
  const items = [
    { id: "panel", l: "Panel", g: "§" },
    { id: "casos", l: "Casos", g: "❖" },
    { id: "boveda", l: "Bóveda", g: "▤" },
    { id: "agenda", l: "Agenda", g: "◐" },
    { id: "perfil", l: "Perfil", g: "○" },
  ];
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, paddingBottom: 32, paddingTop: 12, background: "linear-gradient(180deg, transparent, #FBFAF7 30%)", zIndex: 50 }}>
      <div style={{ margin: "0 14px", padding: "10px 6px", background: "#FFFFFF", border: "1px solid rgba(11,23,51,0.08)", borderRadius: 22, display: "flex", justifyContent: "space-around", boxShadow: "0 8px 24px rgba(11,23,51,0.06)" }}>
        {items.map(it => {
          const on = it.id === active;
          return (
            <div key={it.id} style={{ textAlign: "center", color: on ? "#B89248" : "#6B7A93", flex: 1 }}>
              <div className="v-serif" style={{ fontSize: 16, fontStyle: on ? "italic" : "normal", color: on ? "#B89248" : "#0B1733", fontWeight: 500 }}>{it.g}</div>
              <div style={{ fontSize: 9.5, marginTop: 3, letterSpacing: 0.3, fontWeight: on ? 600 : 500 }}>{it.l}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Btn({ children, primary, ghost, danger, dark, full, big, style }) {
  let look = { background: "#0B1733", color: "#FBFAF7", border: "none" };
  if (primary) look = { background: "linear-gradient(180deg, #D4AF5C, #B89248)", color: "#0B1733", border: "none", boxShadow: "inset 0 1px 0 rgba(255,255,255,0.3), 0 6px 18px rgba(184,146,72,0.35)", fontWeight: 600 };
  else if (ghost) look = { background: "transparent", color: "#0B1733", border: "1px solid rgba(11,23,51,0.18)" };
  else if (danger) look = { background: "linear-gradient(180deg, #D6604A, #B23A2E)", color: "#FBFAF7", border: "none", fontWeight: 600 };
  else if (dark) look = { background: "#0B1733", color: "#FBFAF7", border: "none", boxShadow: "0 6px 18px rgba(11,23,51,0.25)" };
  return (
    <button style={{
      fontFamily: "var(--sans)", fontSize: big ? 14 : 13, letterSpacing: 0.3,
      padding: big ? "16px 22px" : "13px 18px", borderRadius: 12, cursor: "pointer",
      width: full ? "100%" : undefined, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
      ...look, ...style,
    }}>{children}</button>
  );
}

function Tag({ children, tone = "ink", small }) {
  const map = {
    ink:     { bg: "rgba(11,23,51,0.05)", fg: "#1A2A4F", bd: "rgba(11,23,51,0.10)" },
    gold:    { bg: "rgba(184,146,72,0.10)", fg: "#8D6E2C", bd: "rgba(184,146,72,0.30)" },
    emerald: { bg: "rgba(47,125,91,0.10)", fg: "#2F7D5B", bd: "rgba(47,125,91,0.30)" },
    red:     { bg: "rgba(196,74,63,0.10)", fg: "#C44A3F", bd: "rgba(196,74,63,0.30)" },
    amber:   { bg: "rgba(201,138,38,0.10)", fg: "#C98A26", bd: "rgba(201,138,38,0.30)" },
  }[tone] || {};
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 5,
      padding: small ? "3px 8px" : "4px 10px", borderRadius: 4,
      background: map.bg, color: map.fg, border: `1px solid ${map.bd}`,
      fontFamily: "var(--sans)", fontSize: small ? 10 : 11, fontWeight: 500, letterSpacing: 0.2,
    }}>{children}</span>
  );
}

function Avatar({ initials, size = 44, gold }) {
  return (
    <div style={{
      width: size, height: size, borderRadius: size/2,
      background: gold ? "linear-gradient(135deg, #E5C880, #B89248)" : "#0B1733",
      color: gold ? "#0B1733" : "#FBFAF7",
      display: "flex", alignItems: "center", justifyContent: "center",
      fontFamily: "var(--serif)", fontSize: size * 0.38, fontWeight: 500,
      boxShadow: gold ? "0 4px 14px rgba(184,146,72,0.4)" : "0 4px 14px rgba(11,23,51,0.2)",
    }}>{initials}</div>
  );
}

Object.assign(window, { VedikaKnot, VedikaWordmark, VedikaLockup, Phone, NavTop, TabBar, Btn, Tag, Avatar });
