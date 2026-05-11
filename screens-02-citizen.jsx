// Védika — Ciudadano screens

function ScreenMateria() {
  const cats = [
    { n: "Familiar",   s: "Divorcio · pensión · custodia",  c: 312 },
    { n: "Penal",      s: "Detención · defensa · denuncia", c: 148, hot: true },
    { n: "Laboral",    s: "Despido · liquidación",          c: 224 },
    { n: "Civil",      s: "Contratos · arrendamiento",      c: 196, on: true },
    { n: "Mercantil",  s: "Pagarés · cobranza · juicios",   c: 88 },
    { n: "Agrario",    s: "Tierras · ejidos · sucesión",    c: 41 },
    { n: "Corporativo",s: "Sociedades · marcas · igualas",  c: 74 },
    { n: "Notarial",   s: "Testamento · escrituras",        c: 96 },
  ];
  return (
    <div className="v-screen" style={{ background: "#FBFAF7", overflow: "auto" }}>
      <NavTop eyebrow="Naturaleza · 2 / 4"/>
      <div style={{ padding: "8px 28px 0" }}>
        <div className="v-serif" style={{ fontSize: 30, fontWeight: 500, color: "#0B1733", letterSpacing: -0.8, lineHeight: 1.1 }}>
          ¿Qué <span style={{ fontStyle: "italic", color: "#B89248" }}>materia</span><br/>te trae aquí?
        </div>
        <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 13, color: "#6B7A93", marginTop: 10, lineHeight: 1.5 }}>
          La elección define al especialista, el tabulador y la ruta procesal.
        </div>
      </div>
      <div style={{ padding: "24px 20px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 9 }}>
        {cats.map((c, i) => (
          <div key={c.n} style={{
            background: c.on ? "linear-gradient(160deg, #FFFFFF, #FBF7EC)" : "#FFFFFF",
            border: `1px solid ${c.on ? "#B89248" : "rgba(11,23,51,0.08)"}`,
            borderRadius: 12, padding: "14px 14px", aspectRatio: "1 / 1",
            display: "flex", flexDirection: "column", justifyContent: "space-between", position: "relative",
            boxShadow: c.on ? "0 6px 18px rgba(184,146,72,0.16)" : "0 2px 6px rgba(11,23,51,0.04)",
          }}>
            {c.hot && <div style={{ position: "absolute", top: 9, right: 12, fontFamily: "var(--mono)", fontSize: 8, color: "#C44A3F", letterSpacing: 1 }}>● GUARDIA</div>}
            {c.on && <div style={{ position: "absolute", top: 9, right: 12, fontFamily: "var(--mono)", fontSize: 8, color: "#B89248", letterSpacing: 1, fontWeight: 600 }}>SELECTED</div>}
            <div className="v-serif" style={{ fontSize: 22, color: "#0B1733", fontWeight: 500, letterSpacing: -0.4 }}>{c.n}</div>
            <div>
              <div style={{ fontSize: 10.5, color: "#6B7A93", lineHeight: 1.4 }}>{c.s}</div>
              <div style={{ marginTop: 9, paddingTop: 7, borderTop: "1px solid rgba(11,23,51,0.06)", fontFamily: "var(--mono)", fontSize: 9, color: "#A6B0C2", letterSpacing: 0.5 }}>{c.c} especialistas</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ padding: "20px 20px 0" }}>
        <div style={{ background: "rgba(196,74,63,0.06)", border: "1px solid rgba(196,74,63,0.3)", borderRadius: 12, padding: "12px 14px", display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: 16, border: "1.5px solid #C44A3F", color: "#C44A3F", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 18 }}>!</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12.5, color: "#0B1733", fontWeight: 500 }}>¿Detención en curso?</div>
            <div style={{ fontSize: 10.5, color: "#6B7A93", marginTop: 1 }}>Activa Código Rojo Penal · 3:12 min SLA</div>
          </div>
          <span style={{ fontSize: 10, color: "#C44A3F", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Rojo →</span>
        </div>
      </div>
      <div style={{ padding: "18px 20px 36px" }}>
        <Btn primary full big>Continuar con Civil  →</Btn>
      </div>
    </div>
  );
}

function ScreenPanel() {
  return (
    <div className="v-screen" style={{ background: "#FBFAF7", overflow: "auto", paddingBottom: 110 }}>
      {/* header */}
      <div style={{ padding: "62px 24px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <Avatar initials="AM" size={42}/>
          <div>
            <div style={{ fontSize: 10, letterSpacing: "0.22em", color: "#B89248", fontWeight: 600 }}>BUENOS DÍAS</div>
            <div className="v-serif" style={{ fontSize: 18, color: "#0B1733", fontWeight: 500, marginTop: 1 }}>Andrea Méndez</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <div style={{ width: 38, height: 38, borderRadius: 12, background: "#FFFFFF", border: "1px solid rgba(11,23,51,0.08)", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
            <span style={{ fontSize: 14, color: "#0B1733" }}>◌</span>
            <div style={{ position: "absolute", top: 6, right: 6, width: 8, height: 8, borderRadius: 4, background: "#C44A3F", border: "1.5px solid #FFFFFF" }}/>
          </div>
        </div>
      </div>

      <div style={{ padding: "22px 28px 0" }}>
        <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 13, color: "#6B7A93" }}>Tu panel personal</div>
        <div className="v-serif" style={{ fontSize: 30, fontWeight: 500, color: "#0B1733", letterSpacing: -0.7, lineHeight: 1.1, marginTop: 4 }}>
          1 caso <span style={{ fontStyle: "italic", color: "#B89248" }}>activo</span>,<br/>4 hitos por delante.
        </div>
      </div>

      {/* hero next event */}
      <div style={{ padding: "22px 20px 0" }}>
        <div style={{ background: "linear-gradient(135deg, #0B1733 0%, #1A2A4F 50%, #0B1733 100%)", borderRadius: 18, padding: "20px 22px", color: "#FBFAF7", position: "relative", overflow: "hidden", boxShadow: "0 16px 38px rgba(11,23,51,0.25)" }}>
          <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: 90, background: "radial-gradient(circle, rgba(212,175,92,0.18), transparent 70%)" }}/>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
            <div className="v-eyebrow" style={{ color: "#D4AF5C" }}>Próxima audiencia</div>
            <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "rgba(251,250,247,0.6)" }}>en 14 min</span>
          </div>
          <div className="v-serif" style={{ fontSize: 22, fontWeight: 500, marginTop: 8, letterSpacing: -0.4 }}>Audiencia conciliatoria</div>
          <div style={{ fontSize: 11.5, color: "rgba(251,250,247,0.7)", marginTop: 4 }}>Mtro. Cárdenas · VDK-04488 · Sala virtual</div>
          <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
            <Btn primary style={{ padding: "11px 16px", fontSize: 12 }}>Entrar a la sala</Btn>
            <Btn ghost style={{ padding: "11px 16px", fontSize: 12, color: "#FBFAF7", border: "1px solid rgba(251,250,247,0.2)" }}>Detalles</Btn>
          </div>
        </div>
      </div>

      {/* grid tiles */}
      <div style={{ padding: "22px 20px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { l: "Mis casos", v: "1", s: "1 activo", g: "❖" },
          { l: "Documentos", v: "12", s: "Bóveda", g: "▤" },
          { l: "Agendar cita", v: "+", s: "Triangular", g: "◐" },
          { l: "Pagos", v: "$35K", s: "1 hito pend.", g: "₿", red: true },
        ].map((t, i) => (
          <div key={i} style={{ background: "#FFFFFF", border: "1px solid rgba(11,23,51,0.08)", borderRadius: 14, padding: "16px 16px", position: "relative", boxShadow: "0 2px 8px rgba(11,23,51,0.04)" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(184,146,72,0.10)", display: "flex", alignItems: "center", justifyContent: "center", color: "#B89248", fontSize: 16, fontFamily: "var(--serif)" }}>{t.g}</div>
            <div className="v-serif" style={{ fontSize: 26, fontWeight: 500, color: "#0B1733", marginTop: 12, letterSpacing: -0.5 }}>{t.v}</div>
            <div style={{ fontSize: 11.5, color: "#0B1733", marginTop: 1 }}>{t.l}</div>
            <div style={{ fontSize: 10, color: t.red ? "#C44A3F" : "#A6B0C2", marginTop: 2, fontWeight: t.red ? 600 : 400 }}>{t.s}</div>
          </div>
        ))}
      </div>

      {/* progress band */}
      <div style={{ padding: "22px 28px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <div className="v-eyebrow">Avance · caso VDK-04488</div>
          <span style={{ fontSize: 11, color: "#6B7A93" }}>4 de 7 hitos</span>
        </div>
        <div style={{ display: "flex", gap: 3, marginTop: 10 }}>
          {[1,1,1,1,0,0,0].map((on, i) => (
            <div key={i} style={{ flex: 1, height: 6, borderRadius: 3, background: on ? "linear-gradient(90deg, #B89248, #D4AF5C)" : "rgba(11,23,51,0.08)" }}/>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 9.5, color: "#A6B0C2", fontFamily: "var(--mono)", letterSpacing: 0.4 }}>
          <span>APERTURA</span><span>DICTAMEN</span><span>NOTIF.</span><span>AUDIENCIA</span>
        </div>
      </div>

      <TabBar active="panel"/>
    </div>
  );
}

function ScreenCaseDetail() {
  const steps = [
    { d: "Hoy · 09:22", t: "Audiencia conciliatoria", s: "Sala virtual VDK", on: true, st: "Programada" },
    { d: "Mar 09", t: "Demanda presentada · JLCA", s: "Tribunal Federal · CDMX", done: true },
    { d: "May 06", t: "Reunión inicial con Mtro. Cárdenas", s: "Caso aceptado · 30/70 acordado", done: true },
    { d: "May 03", t: "Dictamen de viabilidad cargado", s: "Liberado: $5,000 MXN", done: true },
    { d: "May 01", t: "Apertura del expediente", s: "Pre-mediación · $10,000 MXN", done: true },
  ];
  return (
    <div className="v-screen" style={{ background: "#FBFAF7", overflow: "auto" }}>
      <NavTop eyebrow="Detalle · expediente"/>
      <div style={{ padding: "10px 28px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "#B89248", letterSpacing: 1, fontWeight: 500 }}>VDK-04488</span>
          <span style={{ fontFamily: "var(--mono)", fontSize: 10, color: "#A6B0C2" }}>Abierto 01 may</span>
        </div>
        <div className="v-serif" style={{ fontSize: 30, fontWeight: 500, color: "#0B1733", marginTop: 8, letterSpacing: -0.8, lineHeight: 1.1 }}>
          Despido <span style={{ fontStyle: "italic", color: "#B89248" }}>injustificado</span>
        </div>
        <div style={{ marginTop: 12, display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          <Tag tone="emerald" small>● Jurídico Activo</Tag>
          <Tag tone="gold" small>Laboral</Tag>
          <span style={{ fontSize: 10.5, color: "#6B7A93", marginLeft: 4 }}>ETA 9 días</span>
        </div>
      </div>

      {/* specialist card */}
      <div style={{ padding: "22px 20px 0" }}>
        <div style={{ background: "#FFFFFF", border: "1px solid rgba(184,146,72,0.3)", borderRadius: 14, padding: 16, boxShadow: "0 4px 14px rgba(11,23,51,0.05)" }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <Avatar initials="JC" size={50} gold/>
            <div style={{ flex: 1 }}>
              <div className="v-eyebrow">Tu especialista</div>
              <div className="v-serif" style={{ fontSize: 17, color: "#0B1733", fontWeight: 500, marginTop: 2 }}>Mtro. J. Cárdenas</div>
              <div style={{ fontSize: 11, color: "#6B7A93" }}>Laboralista · 14 años · 4.88 ★ · Maestro Academia</div>
            </div>
          </div>
          <div style={{ marginTop: 14, display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 6 }}>
            <Btn ghost style={{ padding: "9px 0", fontSize: 11.5 }}>💬 Chat</Btn>
            <Btn ghost style={{ padding: "9px 0", fontSize: 11.5 }}>📞 Llamar</Btn>
            <Btn primary style={{ padding: "9px 0", fontSize: 11.5 }}>Sala</Btn>
          </div>
        </div>
      </div>

      {/* timeline */}
      <div style={{ padding: "22px 28px 0" }}>
        <div className="v-eyebrow">Cronología procesal</div>
        <div style={{ marginTop: 14, position: "relative", paddingLeft: 22 }}>
          <div style={{ position: "absolute", left: 7, top: 6, bottom: 16, width: 1, background: "rgba(11,23,51,0.10)" }}/>
          {steps.map((s, i) => (
            <div key={i} style={{ paddingBottom: 16, position: "relative" }}>
              <div style={{
                position: "absolute", left: -22, top: 4,
                width: 15, height: 15, borderRadius: 8,
                background: s.on ? "#B89248" : s.done ? "#FBFAF7" : "transparent",
                border: `2px solid ${s.on ? "#B89248" : s.done ? "#0B1733" : "#A6B0C2"}`,
                boxShadow: s.on ? "0 0 0 5px rgba(184,146,72,0.18)" : "none",
              }}/>
              <div style={{ fontFamily: "var(--mono)", fontSize: 9.5, color: s.on ? "#B89248" : "#A6B0C2", letterSpacing: 0.6, textTransform: "uppercase" }}>{s.d}</div>
              <div style={{ fontSize: 13.5, color: "#0B1733", marginTop: 2, fontWeight: 500 }}>{s.t}</div>
              <div style={{ fontSize: 11.5, color: "#6B7A93", marginTop: 1 }}>{s.s}</div>
              {s.st && <div style={{ marginTop: 6 }}><Tag tone="gold" small>{s.st}</Tag></div>}
            </div>
          ))}
        </div>
      </div>

      {/* 30/70 status bar */}
      <div style={{ padding: "8px 20px 24px" }}>
        <div style={{ background: "#FFFFFF", border: "1px solid rgba(11,23,51,0.08)", borderRadius: 14, padding: 16 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
            <div className="v-eyebrow">Plan de honorarios</div>
            <span style={{ fontFamily: "var(--mono)", fontSize: 11, color: "#0B1733", fontWeight: 500 }}>$35,000 MXN</span>
          </div>
          <div style={{ marginTop: 10, display: "flex", height: 8, borderRadius: 4, overflow: "hidden", border: "1px solid rgba(11,23,51,0.08)" }}>
            <div style={{ flex: 40, background: "linear-gradient(90deg, #B89248, #D4AF5C)" }}/>
            <div style={{ flex: 30, background: "rgba(184,146,72,0.18)" }}/>
            <div style={{ flex: 30, background: "rgba(11,23,51,0.06)" }}/>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 8, fontSize: 10, color: "#6B7A93" }}>
            <span><b style={{ color: "#0B1733" }}>40%</b> Inicio</span>
            <span><b style={{ color: "#0B1733" }}>30%</b> Pruebas</span>
            <span><b style={{ color: "#0B1733" }}>30%</b> Sentencia</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ScreenBoveda() {
  const folders = [
    { n: "Contratos", c: 4, on: true },
    { n: "Evidencias", c: 8 },
    { n: "Identidad", c: 3, locked: true },
    { n: "Notificaciones", c: 5 },
    { n: "Pagos · facturas", c: 6 },
    { n: "Sentencias", c: 0, empty: true },
  ];
  return (
    <div className="v-screen" style={{ background: "#FBFAF7", overflow: "auto", paddingBottom: 110 }}>
      <NavTop title={<span>Bóveda <span style={{ fontStyle: "italic", color: "#B89248" }}>Védika</span></span>} eyebrow="Tu archivo blindado"/>
      <div style={{ padding: "0 28px" }}>
        <div style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontSize: 13, color: "#6B7A93", lineHeight: 1.5, marginTop: 4 }}>
          12 documentos · 86 MB cifrados con biometría de grado bancario.
        </div>
      </div>

      <div style={{ padding: "22px 22px 0" }}>
        <div style={{ display: "flex", alignItems: "center", background: "#FFFFFF", border: "1px solid rgba(11,23,51,0.08)", borderRadius: 14, padding: "11px 14px", gap: 10 }}>
          <span style={{ color: "#A6B0C2", fontSize: 14 }}>⌕</span>
          <span style={{ fontSize: 13, color: "#A6B0C2" }}>Buscar en mi bóveda…</span>
          <span style={{ flex: 1 }}/>
          <span style={{ fontSize: 10, color: "#B89248", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600 }}>Filtros</span>
        </div>
      </div>

      <div style={{ padding: "22px 22px 0" }}>
        <div className="v-eyebrow" style={{ marginBottom: 10 }}>Carpetas</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 10 }}>
          {folders.map(f => (
            <div key={f.n} style={{ background: "#FFFFFF", border: f.on ? "1px solid #B89248" : "1px solid rgba(11,23,51,0.08)", borderRadius: 12, padding: 12, position: "relative", boxShadow: f.on ? "0 6px 18px rgba(184,146,72,0.16)" : "0 2px 6px rgba(11,23,51,0.03)" }}>
              {/* folder icon */}
              <svg width="42" height="34" viewBox="0 0 42 34" style={{ display: "block" }}>
                <path d="M2 6 L2 30 Q2 32 4 32 L38 32 Q40 32 40 30 L40 12 Q40 10 38 10 L18 10 L14 6 Q12 4 10 4 L4 4 Q2 4 2 6Z"
                      fill={f.empty ? "#E9E5D8" : "url(#fg)"} stroke="#8D6E2C" strokeWidth=".7" strokeOpacity=".4"/>
                <defs>
                  <linearGradient id="fg" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#E5C880"/><stop offset="100%" stopColor="#B89248"/>
                  </linearGradient>
                </defs>
                <rect x="14" y="14" width="14" height="3" fill="#0B1733" opacity=".35"/>
                <circle cx="33" cy="18" r="3" fill="#0B1733" opacity=".35"/>
                {f.locked && <circle cx="33" cy="18" r="1.6" fill="#FBFAF7"/>}
              </svg>
              <div style={{ fontSize: 12.5, color: "#0B1733", marginTop: 8, fontWeight: 500 }}>{f.n}</div>
              <div style={{ fontFamily: "var(--mono)", fontSize: 10, color: "#A6B0C2", letterSpacing: 0.4, marginTop: 2 }}>{f.locked ? "🔒 cifrada" : f.empty ? "vacía" : `${f.c} archivos`}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: "20px 22px 0" }}>
        <div className="v-eyebrow" style={{ marginBottom: 10 }}>Recientes</div>
        {[
          { n: "Contrato_laboral_andrea.pdf", t: "Contratos · 2.4 MB", d: "Hoy · 08:14", st: "Firma autógrafa", tone: "gold" },
          { n: "Dictamen_viabilidad_VDK04488.pdf", t: "Sentencias · 0.9 MB", d: "Ayer", st: "Verificado", tone: "emerald" },
          { n: "Recibo_premediacion_10K.xml", t: "Pagos · 84 KB", d: "May 01", st: "SAT", tone: "ink" },
        ].map((f, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: i < 2 ? "1px solid rgba(11,23,51,0.06)" : "none" }}>
            <div style={{ width: 36, height: 44, borderRadius: 4, background: "#FBF8EE", border: "1px solid rgba(184,146,72,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--mono)", fontSize: 9, color: "#8D6E2C", fontWeight: 600 }}>PDF</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12.5, color: "#0B1733", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{f.n}</div>
              <div style={{ fontSize: 10.5, color: "#6B7A93", marginTop: 1 }}>{f.t} · {f.d}</div>
            </div>
            <Tag tone={f.tone} small>{f.st}</Tag>
          </div>
        ))}
      </div>

      <TabBar active="boveda"/>
    </div>
  );
}

Object.assign(window, { ScreenMateria, ScreenPanel, ScreenCaseDetail, ScreenBoveda });
