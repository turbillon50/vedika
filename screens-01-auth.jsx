// Védika — Loading / Splash screens (cinematic premium)
// Mix Apple TV (hero type) + Revolut (status) + Vercel/v0 (minimal mono)

function ScreenBoot() {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative", overflow: "hidden",
      background: "radial-gradient(ellipse at 50% 30%, #15244E 0%, #0B1733 45%, #050B1F 100%)",
      fontFamily: "var(--sans)", color: "#FBFAF7" }}>
      {/* film grain */}
      <div style={{ position: "absolute", inset: 0, opacity: 0.06,
        backgroundImage: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/></svg>\")",
        mixBlendMode: "overlay" }}/>
      {/* gold orbital rings */}
      <svg style={{ position: "absolute", top: 175, left: "50%", transform: "translateX(-50%)" }} width="360" height="360" viewBox="0 0 360 360">
        <defs>
          <radialGradient id="glow" cx="0.5" cy="0.5">
            <stop offset="0%" stopColor="#D4AF5C" stopOpacity="0.35"/>
            <stop offset="60%" stopColor="#D4AF5C" stopOpacity="0"/>
          </radialGradient>
        </defs>
        <circle cx="180" cy="180" r="160" fill="url(#glow)"/>
        <circle cx="180" cy="180" r="148" stroke="#B89248" strokeWidth=".5" fill="none" opacity=".25"/>
        <circle cx="180" cy="180" r="110" stroke="#B89248" strokeWidth=".5" fill="none" opacity=".4"/>
        <circle cx="180" cy="180" r="78"  stroke="#B89248" strokeWidth=".5" fill="none" opacity=".55"/>
        {Array.from({ length: 24 }).map((_, i) => {
          const a = (i * 15) * Math.PI / 180;
          return <line key={i} x1={180 + Math.cos(a) * 110} y1={180 + Math.sin(a) * 110} x2={180 + Math.cos(a) * 148} y2={180 + Math.sin(a) * 148} stroke="#B89248" strokeWidth=".4" opacity=".22"/>;
        })}
      </svg>
      <div style={{ position: "absolute", top: 230, left: 0, right: 0, display: "flex", justifyContent: "center" }}>
        <VedikaKnot size={170}/>
      </div>
      <div style={{ position: "absolute", top: 460, left: 0, right: 0, textAlign: "center" }}>
        <div className="v-serif" style={{ fontSize: 52, letterSpacing: 8, color: "#FBFAF7", fontWeight: 500 }}>
          VÉD<span style={{ fontStyle: "italic", color: "#D4AF5C", letterSpacing: 0 }}>I</span>KA
        </div>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 14, marginTop: 14 }}>
          <span style={{ width: 30, height: 1, background: "#B89248", opacity: 0.6 }}/>
          <span style={{ fontSize: 9.5, letterSpacing: "0.4em", textTransform: "uppercase", color: "#D4AF5C", fontWeight: 500 }}>Justicia Humana</span>
          <span style={{ width: 30, height: 1, background: "#B89248", opacity: 0.6 }}/>
        </div>
      </div>
      {/* boot console */}
      <div style={{ position: "absolute", bottom: 80, left: 36, right: 36, fontFamily: "var(--mono)", fontSize: 10, color: "rgba(212,175,92,0.55)", letterSpacing: 0.5, lineHeight: 1.9 }}>
        <div>→ verifying biometric vault…       <span style={{ color: "#5BC890" }}>ok</span></div>
        <div>→ syncing escrow ledger 5/25/70…   <span style={{ color: "#5BC890" }}>ok</span></div>
        <div>→ ping triangular agenda…         <span style={{ color: "#5BC890" }}>ok</span></div>
        <div>→ booting védika.ai core…         <span style={{ color: "#D4AF5C" }}>0.94</span></div>
      </div>
      <div style={{ position: "absolute", bottom: 50, left: 36, right: 36 }}>
        <div style={{ height: 2, background: "rgba(212,175,92,0.18)", overflow: "hidden" }}>
          <div style={{ height: "100%", width: "94%", background: "linear-gradient(90deg, #B89248, #E5C880)" }}/>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontFamily: "var(--mono)", fontSize: 10, color: "rgba(251,250,247,0.4)", letterSpacing: 1 }}>
          <span>v 2.4.0 · CDMX · EDOMEX</span><span>94%</span>
        </div>
      </div>
    </div>
  );
}

function ScreenAuth() {
  return (
    <div className="v-screen" style={{ background: "#FBFAF7" }}>
      <div style={{ paddingTop: 80, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <VedikaKnot size={88}/>
        <div className="v-serif" style={{ marginTop: 18, fontSize: 28, letterSpacing: 5, color: "#0B1733", fontWeight: 500 }}>
          VÉD<span style={{ color: "#B89248", fontStyle: "italic", letterSpacing: 0 }}>I</span>KA
        </div>
        <div style={{ fontSize: 10, letterSpacing: "0.3em", color: "#6B7A93", textTransform: "uppercase", marginTop: 8 }}>
          Bóveda blindada · Acceso autorizado
        </div>
      </div>

      <div style={{ padding: "48px 28px 0" }}>
        <div className="v-serif" style={{ fontSize: 30, color: "#0B1733", letterSpacing: -0.6, fontWeight: 500, lineHeight: 1.1 }}>
          Bienvenida de vuelta,<br/><span style={{ fontStyle: "italic", color: "#B89248" }}>Andrea.</span>
        </div>
        <div style={{ fontSize: 12.5, color: "#6B7A93", marginTop: 10, lineHeight: 1.6 }}>
          Identifícate con FaceID para abrir tu Bóveda Védika. La sesión queda anclada a este dispositivo.
        </div>
      </div>

      {/* FaceID hero */}
      <div style={{ marginTop: 38, display: "flex", justifyContent: "center" }}>
        <div style={{ position: "relative", width: 134, height: 134 }}>
          <div style={{ position: "absolute", inset: 0, borderRadius: 67, background: "radial-gradient(circle, rgba(184,146,72,0.18), rgba(184,146,72,0))" }}/>
          <div style={{ position: "absolute", inset: 12, borderRadius: 55, border: "1px solid rgba(184,146,72,0.35)" }}/>
          <div style={{ position: "absolute", inset: 28, borderRadius: 40, background: "#0B1733", boxShadow: "0 12px 32px rgba(11,23,51,0.3), inset 0 1px 0 rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
              <rect x="6" y="6" width="14" height="3" rx="1" fill="#D4AF5C"/><rect x="6" y="6" width="3" height="14" rx="1" fill="#D4AF5C"/>
              <rect x="36" y="6" width="14" height="3" rx="1" fill="#D4AF5C"/><rect x="47" y="6" width="3" height="14" rx="1" fill="#D4AF5C"/>
              <rect x="6" y="47" width="14" height="3" rx="1" fill="#D4AF5C"/><rect x="6" y="36" width="3" height="14" rx="1" fill="#D4AF5C"/>
              <rect x="36" y="47" width="14" height="3" rx="1" fill="#D4AF5C"/><rect x="47" y="36" width="3" height="14" rx="1" fill="#D4AF5C"/>
              <circle cx="21" cy="24" r="2" fill="#D4AF5C"/><circle cx="35" cy="24" r="2" fill="#D4AF5C"/>
              <path d="M19 36 Q28 42 37 36" stroke="#D4AF5C" strokeWidth="2" fill="none" strokeLinecap="round"/>
            </svg>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: 22, fontSize: 12, color: "#6B7A93" }}>Mira al dispositivo para autenticar</div>

      <div style={{ position: "absolute", bottom: 110, left: 28, right: 28 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 16px", background: "#FFFFFF", border: "1px solid rgba(11,23,51,0.08)", borderRadius: 12 }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
            <div style={{ width: 30, height: 30, borderRadius: 6, background: "rgba(184,146,72,0.10)", display: "flex", alignItems: "center", justifyContent: "center", color: "#B89248", fontSize: 14 }}>⌗</div>
            <div>
              <div style={{ fontSize: 12, color: "#0B1733", fontWeight: 500 }}>Cambiar a contraseña</div>
              <div style={{ fontSize: 10.5, color: "#6B7A93" }}>12+ caracteres · grado bancario</div>
            </div>
          </div>
          <span style={{ color: "#B89248", fontSize: 14 }}>›</span>
        </div>
        <div style={{ textAlign: "center", marginTop: 14, fontSize: 10.5, color: "#A6B0C2", letterSpacing: 0.4 }}>
          Dispositivo anclado · iPhone 15 Pro · CDMX
        </div>
      </div>
    </div>
  );
}

function ScreenRoleSelect() {
  const roles = [
    { id: "ciudadano", h: "Ciudadano", s: "Planteo un caso, busco solución", note: "Acceso abierto", on: true },
    { id: "especialista", h: "Especialista", s: "Abogado · Mediador · Notario", note: "Validación SEP requerida" },
    { id: "maestro", h: "Maestro", s: "Imparto formación en Academia", note: "Posgrado obligatorio" },
    { id: "entidad", h: "Entidad", s: "Notaría · Centro de Mediación", note: "Por invitación" },
  ];
  return (
    <div className="v-screen" style={{ background: "#FBFAF7" }}>
      <NavTop eyebrow="Identificación"/>
      <div style={{ padding: "12px 28px 0" }}>
        <div className="v-serif" style={{ fontSize: 32, letterSpacing: -0.8, color: "#0B1733", lineHeight: 1.05, fontWeight: 500 }}>
          ¿Cómo entras<br/>al <span style={{ fontStyle: "italic", color: "#B89248" }}>tribunal</span>?
        </div>
        <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 14, color: "#6B7A93", marginTop: 10, lineHeight: 1.55 }}>
          Cada rol abre una puerta distinta del sistema.
        </div>
      </div>
      <div style={{ padding: "28px 20px 0", display: "flex", flexDirection: "column", gap: 10 }}>
        {roles.map((r, i) => (
          <div key={r.id} style={{
            background: r.on ? "#FFFFFF" : "transparent",
            border: `1px solid ${r.on ? "#B89248" : "rgba(11,23,51,0.10)"}`,
            borderRadius: 14, padding: "18px 20px", position: "relative",
            boxShadow: r.on ? "0 8px 24px rgba(184,146,72,0.14)" : "none",
          }}>
            <div style={{ position: "absolute", top: 16, right: 18, fontFamily: "var(--mono)", fontSize: 10, color: "#A6B0C2", letterSpacing: 1 }}>0{i+1}</div>
            <div className="v-serif" style={{ fontSize: 22, color: "#0B1733", fontWeight: 500 }}>{r.h}</div>
            <div style={{ fontSize: 12, color: "#6B7A93", marginTop: 3 }}>{r.s}</div>
            <div style={{ marginTop: 14, paddingTop: 10, borderTop: `1px solid ${r.on ? "rgba(184,146,72,0.18)" : "rgba(11,23,51,0.06)"}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: 9.5, letterSpacing: "0.2em", textTransform: "uppercase", color: r.on ? "#B89248" : "#A6B0C2", fontWeight: 600 }}>{r.note}</span>
              <span style={{ color: r.on ? "#B89248" : "#A6B0C2" }}>→</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ position: "absolute", bottom: 36, left: 28, right: 28, textAlign: "center", fontSize: 11, color: "#6B7A93" }}>
        ¿Acceso administrador? <span style={{ color: "#B89248", textDecoration: "underline" }}>Entrar a ROOT</span>
      </div>
    </div>
  );
}

Object.assign(window, { ScreenBoot, ScreenAuth, ScreenRoleSelect });
