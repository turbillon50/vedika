// Védika — Specialist + Entity + Root screens

function ScreenEspecialistaDashboard() {
  return (
    <div className="v-screen" style={{ background: "#080A12", color: "#FBFAF7", overflow: "auto", paddingBottom: 110 }}>
      {/* navy hero */}
      <div style={{ padding: "62px 24px 0", background: "radial-gradient(120% 80% at 80% 0%, rgba(212,175,92,0.18), transparent 60%), #080A12" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Avatar initials="JC" size={44} gold/>
          <div className="v-eyebrow" style={{ color: "#D4AF5C" }}>Despacho Cárdenas</div>
          <div style={{ width: 38, height: 38, borderRadius: 19, border: "1px solid rgba(251,250,247,0.12)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13 }}>◌</div>
        </div>
        <div className="v-serif" style={{ fontSize: 32, fontWeight: 500, marginTop: 26, letterSpacing: -0.8, lineHeight: 1.1 }}>
          7 audiencias <span style={{ fontStyle: "italic", color: "#D4AF5C" }}>esta semana</span>
        </div>
        <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 13, color: "rgba(251,250,247,0.55)", marginTop: 6 }}>
          $186,400 MXN devengados · ranking #4 laboral CDMX
        </div>

        {/* KPI rail */}
        <div style={{ marginTop: 22, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[
            { v: "12", l: "Casos vivos", t: "+2" },
            { v: "94%", l: "SLA respuesta", t: "verde" },
            { v: "4.91", l: "★ Reputación", t: "n=86" },
          ].map((k, i) => (
            <div key={i} style={{ background: "rgba(251,250,247,0.04)", border: "1px solid rgba(251,250,247,0.08)", borderRadius: 12, padding: "12px 12px" }}>
              <div className="v-serif" style={{ fontSize: 24, fontWeight: 500, letterSpacing: -0.4 }}>{k.v}</div>
              <div style={{ fontSize: 10, color: "rgba(251,250,247,0.55)", marginTop: 2 }}>{k.l}</div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "#D4AF5C", marginTop: 4, letterSpacing: 0.5 }}>{k.t}</div>
            </div>
          ))}
        </div>
      </div>

      {/* alert strip */}
      <div style={{ padding: "18px 18px 0" }}>
        <div style={{ background: "linear-gradient(180deg, rgba(196,74,63,0.18), rgba(196,74,63,0.06))", border: "1px solid rgba(196,74,63,0.4)", borderRadius: 14, padding: "14px 16px", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: 16, background: "#C44A3F", color: "#FBFAF7", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--serif)", fontWeight: 600, fontSize: 16 }}>!</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, fontWeight: 500 }}>Código Rojo Penal · ofrecimiento</div>
            <div style={{ fontSize: 10.5, color: "rgba(251,250,247,0.6)", marginTop: 1 }}>Detención flagrante · MP Iztacalco · vence 2:14</div>
          </div>
          <Btn danger style={{ padding: "9px 14px", fontSize: 11.5 }}>Aceptar</Btn>
        </div>
      </div>

      {/* agenda triangular */}
      <div style={{ padding: "22px 24px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div className="v-eyebrow" style={{ color: "rgba(251,250,247,0.55)" }}>Agenda triangular · hoy</div>
          <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "#D4AF5C" }}>3 confluencias</span>
        </div>
      </div>

      <div style={{ padding: "12px 18px 0" }}>
        {[
          { hh: "09:30", t: "Audiencia VDK-04488", c: "Andrea Méndez", e: "Tribunal Federal", on: true },
          { hh: "12:00", t: "Firma testamento", c: "Familia Ortega", e: "Notaría 23 CDMX" },
          { hh: "16:00", t: "Mediación condominal", c: "Pérez vs. Garza", e: "Cámara Comercio" },
        ].map((a, i) => (
          <div key={i} style={{ display: "flex", gap: 14, padding: "12px 0", borderBottom: i < 2 ? "1px solid rgba(251,250,247,0.06)" : "none" }}>
            <div style={{ width: 50, textAlign: "right" }}>
              <div className="v-serif" style={{ fontSize: 18, fontWeight: 500, color: a.on ? "#D4AF5C" : "#FBFAF7" }}>{a.hh}</div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 8, color: "rgba(251,250,247,0.4)", letterSpacing: 0.5, marginTop: 1 }}>HRS</div>
            </div>
            <div style={{ width: 2, background: a.on ? "linear-gradient(180deg, #D4AF5C, transparent)" : "rgba(251,250,247,0.10)" }}/>
            <div style={{ flex: 1, paddingTop: 2 }}>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{a.t}</div>
              <div style={{ fontSize: 10.5, color: "rgba(251,250,247,0.55)", marginTop: 2 }}>
                <span style={{ color: "#9FB4D8" }}>○ {a.c}</span>
                <span style={{ margin: "0 6px", color: "rgba(251,250,247,0.3)" }}>△</span>
                <span style={{ color: "#D4AF5C" }}>◇ {a.e}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* mini revenue chart */}
      <div style={{ padding: "22px 18px 0" }}>
        <div style={{ background: "rgba(251,250,247,0.03)", border: "1px solid rgba(251,250,247,0.06)", borderRadius: 14, padding: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div className="v-eyebrow" style={{ color: "rgba(251,250,247,0.55)" }}>Ingresos · 30 días</div>
            <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "#D4AF5C" }}>+18.4%</span>
          </div>
          <div className="v-serif" style={{ fontSize: 26, fontWeight: 500, marginTop: 4 }}>$186,400 <span style={{ fontSize: 13, color: "rgba(251,250,247,0.5)" }}>MXN</span></div>
          <svg viewBox="0 0 280 60" style={{ marginTop: 12, display: "block", width: "100%", height: 60 }}>
            <defs>
              <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#D4AF5C" stopOpacity=".4"/><stop offset="100%" stopColor="#D4AF5C" stopOpacity="0"/></linearGradient>
            </defs>
            <path d="M 0,50 L 20,42 L 40,46 L 60,30 L 80,34 L 100,22 L 120,28 L 140,18 L 160,22 L 180,12 L 200,16 L 220,8 L 240,14 L 260,6 L 280,10 L 280,60 L 0,60 Z" fill="url(#rev)"/>
            <path d="M 0,50 L 20,42 L 40,46 L 60,30 L 80,34 L 100,22 L 120,28 L 140,18 L 160,22 L 180,12 L 200,16 L 220,8 L 240,14 L 260,6 L 280,10" fill="none" stroke="#D4AF5C" strokeWidth="1.5"/>
          </svg>
        </div>
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, paddingBottom: 32, paddingTop: 12, background: "linear-gradient(180deg, transparent, #080A12 30%)" }}>
        <div style={{ margin: "0 14px", padding: "10px 6px", background: "rgba(251,250,247,0.04)", border: "1px solid rgba(251,250,247,0.10)", borderRadius: 22, display: "flex", justifyContent: "space-around", backdropFilter: "blur(20px)" }}>
          {[
            { l: "Agenda", g: "§", on: true },
            { l: "Casos", g: "❖" },
            { l: "Ingresos", g: "₿" },
            { l: "Reputación", g: "★" },
            { l: "Yo", g: "○" },
          ].map((it, i) => (
            <div key={i} style={{ textAlign: "center", flex: 1, color: it.on ? "#D4AF5C" : "rgba(251,250,247,0.55)" }}>
              <div className="v-serif" style={{ fontSize: 16, fontStyle: it.on ? "italic" : "normal", fontWeight: 500 }}>{it.g}</div>
              <div style={{ fontSize: 9.5, marginTop: 3, letterSpacing: 0.3, fontWeight: it.on ? 600 : 500 }}>{it.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ScreenCodigoRojo() {
  return (
    <div className="v-screen" style={{ background: "#1A0608", color: "#FBFAF7", overflow: "auto" }}>
      {/* pulsing red ambient */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(90% 60% at 50% 0%, rgba(196,74,63,0.45), transparent 60%)", pointerEvents: "none" }}/>

      <div style={{ position: "relative", padding: "62px 28px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="v-eyebrow" style={{ color: "#FF8A7A", letterSpacing: "0.32em" }}>● CÓDIGO ROJO PENAL</div>
          <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "rgba(255,138,122,0.7)" }}>VDK · 04503</span>
        </div>
        <div className="v-serif" style={{ fontSize: 34, fontWeight: 500, marginTop: 24, letterSpacing: -0.8, lineHeight: 1.05 }}>
          Tu defensa <span style={{ fontStyle: "italic", color: "#FFB97A" }}>está en camino.</span>
        </div>
        <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 14, color: "rgba(251,250,247,0.7)", marginTop: 10, lineHeight: 1.5 }}>
          No firmes nada. No declares. Estás <span style={{ textDecoration: "underline", textDecorationColor: "#FFB97A" }}>protegido</span> bajo Art. 20 const.
        </div>
      </div>

      {/* countdown */}
      <div style={{ padding: "32px 22px 0", position: "relative" }}>
        <div style={{ background: "rgba(0,0,0,0.45)", border: "1px solid rgba(255,138,122,0.3)", borderRadius: 18, padding: "22px 22px", textAlign: "center" }}>
          <div className="v-eyebrow" style={{ color: "rgba(251,250,247,0.55)" }}>SLA · llegada al MP</div>
          <div className="v-serif" style={{ fontSize: 56, fontWeight: 500, letterSpacing: -2, marginTop: 6, color: "#FFB97A" }}>03<span style={{ color: "rgba(255,185,122,0.4)" }}>:</span>12</div>
          <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "rgba(251,250,247,0.45)", letterSpacing: 1, marginTop: 4 }}>MIN · SEG RESTANTES</div>
        </div>
      </div>

      {/* specialist heading our way */}
      <div style={{ padding: "20px 22px 0", position: "relative" }}>
        <div style={{ background: "rgba(251,250,247,0.04)", border: "1px solid rgba(251,250,247,0.10)", borderRadius: 16, padding: 16, display: "flex", gap: 14, alignItems: "center" }}>
          <Avatar initials="RP" size={50} gold/>
          <div style={{ flex: 1 }}>
            <div className="v-eyebrow" style={{ color: "#FFB97A" }}>Tu defensor</div>
            <div className="v-serif" style={{ fontSize: 17, fontWeight: 500, marginTop: 2 }}>Mtra. R. Paredes</div>
            <div style={{ fontSize: 11, color: "rgba(251,250,247,0.55)" }}>Penalista · 11 años · 4.94 ★ · MP Iztacalco</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <div className="v-serif" style={{ fontSize: 22, color: "#FFB97A", fontWeight: 500 }}>1.4 km</div>
            <div style={{ fontFamily: "var(--mono)", fontSize: 9, color: "rgba(251,250,247,0.45)" }}>ETA 6 min</div>
          </div>
        </div>
      </div>

      {/* protocol checklist */}
      <div style={{ padding: "24px 28px 0", position: "relative" }}>
        <div className="v-eyebrow" style={{ color: "rgba(251,250,247,0.55)" }}>Protocolo de protección</div>
        {[
          { t: "Bóveda blindada", s: "Identidad cifrada · MP no puede consultar", on: true },
          { t: "Familia notificada", s: "Mensaje enviado a Ana M. (contacto SOS)", on: true },
          { t: "Defensa en ruta", s: "Mtra. Paredes confirmó · 6 min", on: true },
          { t: "Grabación activada", s: "Audio del entorno · cifrado 256-bit", live: true },
        ].map((x, i) => (
          <div key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 0", borderBottom: i < 3 ? "1px solid rgba(251,250,247,0.06)" : "none" }}>
            <div style={{ width: 22, height: 22, borderRadius: 11, border: x.on ? "none" : "1.5px solid rgba(255,185,122,0.5)", background: x.on ? "#FFB97A" : "transparent", color: "#1A0608", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 700, flexShrink: 0, marginTop: 2 }}>
              {x.on ? "✓" : x.live ? <span style={{ color: "#FF8A7A", fontSize: 16 }}>●</span> : ""}
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 13.5, fontWeight: 500 }}>{x.t} {x.live && <span style={{ fontFamily: "var(--mono)", fontSize: 9, color: "#FF8A7A", marginLeft: 6, letterSpacing: 1 }}>● LIVE</span>}</div>
              <div style={{ fontSize: 11, color: "rgba(251,250,247,0.55)", marginTop: 2 }}>{x.s}</div>
            </div>
          </div>
        ))}
      </div>

      <div style={{ padding: "26px 22px 36px", position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        <Btn ghost style={{ color: "#FBFAF7", border: "1px solid rgba(251,250,247,0.2)", padding: "16px 0", fontSize: 13 }}>📞 911</Btn>
        <Btn danger big style={{ background: "linear-gradient(180deg, #FF8A7A, #C44A3F)" }}>Hablar con defensor →</Btn>
      </div>
    </div>
  );
}

function ScreenEntidadNotaria() {
  return (
    <div className="v-screen" style={{ background: "#FBFAF7", overflow: "auto", paddingBottom: 24 }}>
      <NavTop eyebrow="Notaría 23 · CDMX"/>
      <div style={{ padding: "0 28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 44, height: 44, borderRadius: 8, background: "linear-gradient(135deg, #0B1733, #1A2A4F)", color: "#D4AF5C", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--serif)", fontSize: 22, fontWeight: 600 }}>N</div>
          <div>
            <div className="v-eyebrow">Lic. M. Hernández Pliego</div>
            <div style={{ fontSize: 11.5, color: "#6B7A93", marginTop: 1 }}>Titular · 4 protocolistas · 1,488 instrumentos/año</div>
          </div>
        </div>
        <div className="v-serif" style={{ fontSize: 30, fontWeight: 500, color: "#0B1733", marginTop: 22, letterSpacing: -0.8, lineHeight: 1.1 }}>
          3 firmas <span style={{ fontStyle: "italic", color: "#B89248" }}>hoy</span>, 12 instrumentos en pipeline.
        </div>
      </div>

      {/* horizontal day strip */}
      <div style={{ padding: "22px 0 0", overflowX: "auto" }}>
        <div style={{ display: "flex", gap: 8, padding: "0 22px" }}>
          {[
            { h: "10:00", t: "Testamento", c: "Ortega", on: true },
            { h: "12:30", t: "Compraventa", c: "Reyes / SI Capital" },
            { h: "15:00", t: "Poder amplio", c: "Constructora QY" },
            { h: "17:30", t: "Fe de hechos", c: "Asamblea condom." },
          ].map((s, i) => (
            <div key={i} style={{ minWidth: 150, padding: 14, borderRadius: 12, background: s.on ? "linear-gradient(160deg, #0B1733, #1A2A4F)" : "#FFFFFF", color: s.on ? "#FBFAF7" : "#0B1733", border: s.on ? "none" : "1px solid rgba(11,23,51,0.08)", boxShadow: s.on ? "0 12px 28px rgba(11,23,51,0.2)" : "0 2px 6px rgba(11,23,51,0.04)" }}>
              <div style={{ fontFamily: "var(--mono)", fontSize: 11, color: s.on ? "#D4AF5C" : "#B89248", letterSpacing: 1, fontWeight: 600 }}>{s.h}</div>
              <div className="v-serif" style={{ fontSize: 17, fontWeight: 500, marginTop: 6 }}>{s.t}</div>
              <div style={{ fontSize: 10.5, color: s.on ? "rgba(251,250,247,0.6)" : "#6B7A93", marginTop: 3 }}>{s.c}</div>
            </div>
          ))}
        </div>
      </div>

      {/* pipeline kanban */}
      <div style={{ padding: "26px 28px 0" }}>
        <div className="v-eyebrow">Pipeline notarial</div>
        <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
          {[
            { l: "Borrador", n: 5, c: "#6B7A93" },
            { l: "Revisión", n: 4, c: "#B89248" },
            { l: "Listo firma", n: 3, c: "#2F7D5B" },
          ].map((k, i) => (
            <div key={i} style={{ background: "#FFFFFF", border: "1px solid rgba(11,23,51,0.08)", borderRadius: 10, padding: 12 }}>
              <div className="v-serif" style={{ fontSize: 28, fontWeight: 500, color: k.c, letterSpacing: -0.5 }}>{k.n}</div>
              <div style={{ fontSize: 10.5, color: "#0B1733", marginTop: 2, fontWeight: 500 }}>{k.l}</div>
              <div style={{ height: 3, marginTop: 8, borderRadius: 2, background: `${k.c}33` }}>
                <div style={{ height: "100%", width: `${k.n * 18}%`, borderRadius: 2, background: k.c }}/>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* instruments list */}
      <div style={{ padding: "22px 28px 0" }}>
        <div className="v-eyebrow">Instrumentos · esta semana</div>
        {[
          { n: "Testamento — Ortega Núñez, R.", t: "Inst. 14,228 · v.3", st: "Listo firma", tone: "emerald" },
          { n: "Compraventa — Reyes / SI Capital", t: "Inst. 14,229 · v.7 · ITP pagado", st: "Revisión", tone: "gold" },
          { n: "Poder amplio — Constructora QY", t: "Inst. 14,230 · v.1", st: "Borrador", tone: "ink" },
          { n: "Fe de hechos — Asamblea Torre B", t: "Inst. 14,231 · v.2", st: "Borrador", tone: "ink" },
        ].map((d, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "13px 0", borderBottom: i < 3 ? "1px solid rgba(11,23,51,0.06)" : "none" }}>
            <div style={{ width: 30, height: 38, borderRadius: 3, background: "linear-gradient(180deg, #FBF8EE, #F3EAD0)", border: "1px solid rgba(184,146,72,0.4)", position: "relative" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: 0, height: 0, borderLeft: "8px solid transparent", borderTop: "8px solid #B89248" }}/>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, color: "#0B1733", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{d.n}</div>
              <div style={{ fontSize: 10.5, color: "#6B7A93", marginTop: 1, fontFamily: "var(--mono)" }}>{d.t}</div>
            </div>
            <Tag tone={d.tone} small>{d.st}</Tag>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenRoot() {
  return (
    <div className="v-screen" style={{ background: "#080A12", color: "#FBFAF7", overflow: "auto" }}>
      <div style={{ padding: "62px 28px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="v-eyebrow" style={{ color: "#D4AF5C", letterSpacing: "0.32em" }}>● SUPERVISIÓN ROOT</div>
          <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "rgba(251,250,247,0.45)" }}>11 MAY 2026 · 09:41</span>
        </div>
        <div className="v-serif" style={{ fontSize: 30, fontWeight: 500, marginTop: 18, letterSpacing: -0.7, lineHeight: 1.1 }}>
          Plataforma <span style={{ fontStyle: "italic", color: "#D4AF5C" }}>nominal</span>. 14,886 casos vivos.
        </div>

        <div style={{ display: "flex", gap: 8, marginTop: 18 }}>
          <Tag tone="emerald" small>● Plano A · 99.97%</Tag>
          <Tag tone="amber" small>2 deflexiones</Tag>
        </div>
      </div>

      {/* triangular bar */}
      <div style={{ padding: "22px 22px 0" }}>
        <div style={{ background: "rgba(251,250,247,0.04)", border: "1px solid rgba(251,250,247,0.10)", borderRadius: 16, padding: 18 }}>
          <div className="v-eyebrow" style={{ color: "rgba(251,250,247,0.55)" }}>Balance triangular · 30 d</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", marginTop: 12 }}>
            <div>
              <div style={{ width: 12, height: 12, borderRadius: 6, background: "#9FB4D8", marginBottom: 6 }}/>
              <div style={{ fontSize: 10, color: "rgba(251,250,247,0.55)", textTransform: "uppercase", letterSpacing: 1 }}>Ciudadanos</div>
              <div className="v-serif" style={{ fontSize: 24, fontWeight: 500, marginTop: 4 }}>9,142</div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 9.5, color: "#9FB4D8", marginTop: 2 }}>+8.2%</div>
            </div>
            <div>
              <div style={{ width: 12, height: 12, borderRadius: 6, background: "#D4AF5C", marginBottom: 6 }}/>
              <div style={{ fontSize: 10, color: "rgba(251,250,247,0.55)", textTransform: "uppercase", letterSpacing: 1 }}>Especialistas</div>
              <div className="v-serif" style={{ fontSize: 24, fontWeight: 500, marginTop: 4 }}>2,308</div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 9.5, color: "#D4AF5C", marginTop: 2 }}>+4.1%</div>
            </div>
            <div>
              <div style={{ width: 12, height: 12, borderRadius: 6, background: "#2F7D5B", marginBottom: 6 }}/>
              <div style={{ fontSize: 10, color: "rgba(251,250,247,0.55)", textTransform: "uppercase", letterSpacing: 1 }}>Entidades</div>
              <div className="v-serif" style={{ fontSize: 24, fontWeight: 500, marginTop: 4 }}>186</div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 9.5, color: "#2F7D5B", marginTop: 2 }}>+12.0%</div>
            </div>
          </div>
          {/* triangular ribbon */}
          <svg viewBox="0 0 300 60" style={{ width: "100%", height: 60, marginTop: 14, display: "block" }}>
            <path d="M 0,30 Q 50,10 100,28 T 200,32 T 300,22" fill="none" stroke="#9FB4D8" strokeWidth="1.5" opacity=".7"/>
            <path d="M 0,40 Q 50,32 100,38 T 200,36 T 300,30" fill="none" stroke="#D4AF5C" strokeWidth="1.5" opacity=".9"/>
            <path d="M 0,50 Q 50,48 100,46 T 200,42 T 300,38" fill="none" stroke="#2F7D5B" strokeWidth="1.5"/>
            <line x1="0" y1="55" x2="300" y2="55" stroke="rgba(251,250,247,0.08)"/>
          </svg>
        </div>
      </div>

      {/* anomaly stream */}
      <div style={{ padding: "22px 28px 0" }}>
        <div className="v-eyebrow" style={{ color: "rgba(251,250,247,0.55)" }}>Telemetría · señales</div>
        <div style={{ marginTop: 12, fontFamily: "var(--mono)", fontSize: 10.5, lineHeight: 1.9 }}>
          {[
            { t: "09:38:12", k: "OK", c: "#2F7D5B", m: "VDK-04488 · ALU·firma cargada · hash verificado" },
            { t: "09:36:04", k: "WARN", c: "#C98A26", m: "Esp. cárdenas · SLA respuesta 92% < 94% objetivo" },
            { t: "09:32:51", k: "ROJO", c: "#FF8A7A", m: "Código rojo penal · MP iztacalco · 6 min ETA" },
            { t: "09:28:17", k: "OK", c: "#2F7D5B", m: "Notaría 23 · instrumento 14,228 firmado" },
            { t: "09:14:02", k: "OK", c: "#2F7D5B", m: "Cohorte mayo · 312 onboarding completos" },
          ].map((l, i) => (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "62px 50px 1fr", gap: 10, color: "rgba(251,250,247,0.7)" }}>
              <span style={{ color: "rgba(251,250,247,0.4)" }}>{l.t}</span>
              <span style={{ color: l.c, fontWeight: 600 }}>{l.k}</span>
              <span>{l.m}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "22px 22px 36px" }}>
        <div style={{ background: "rgba(212,175,92,0.08)", border: "1px solid rgba(212,175,92,0.3)", borderRadius: 12, padding: 14, display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 36, height: 36, borderRadius: 18, background: "rgba(212,175,92,0.15)", color: "#D4AF5C", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--serif)", fontSize: 18 }}>◈</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, fontWeight: 500 }}>Junta de gobernanza</div>
            <div style={{ fontSize: 10.5, color: "rgba(251,250,247,0.55)", marginTop: 1 }}>Hoy 18:00 · 8 votos pendientes</div>
          </div>
          <span style={{ fontSize: 10, color: "#D4AF5C", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Convocar →</span>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { ScreenEspecialistaDashboard, ScreenCodigoRojo, ScreenEntidadNotaria, ScreenRoot });
