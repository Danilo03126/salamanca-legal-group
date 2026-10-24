import { useState, useEffect } from 'react'
import './App.css'

const areas = [
  {
    id: 'corporativo',
    nombre: 'Derecho Corporativo',
    numero: '01',
    descripcion: 'Soluciones jurídicas para empresas, sociedades y proyectos empresariales.',
    detalle: 'Acompañamiento jurídico para empresas y emprendedores en la estructuración de negocios, la toma de decisiones y la gestión de relaciones comerciales.',
    servicios: ['Constitución y reformas de sociedades', 'Gobierno corporativo', 'Contratos comerciales', 'Asesoría jurídica empresarial', 'Negociación y revisión de acuerdos'],
  },
  {
    id: 'laboral',
    nombre: 'Derecho Laboral',
    numero: '02',
    descripcion: 'Orientación en relaciones entre empleadores y trabajadores.',
    detalle: 'Orientación jurídica sobre relaciones laborales, cumplimiento de obligaciones y manejo de situaciones entre empleadores y trabajadores.',
    servicios: ['Elaboración y revisión de contratos laborales', 'Reglamentos y políticas internas', 'Terminación de contratos de trabajo', 'Prevención y manejo de conflictos laborales', 'Asesoría en obligaciones laborales'],
  },
  {
    id: 'civil',
    nombre: 'Derecho Civil',
    numero: '03',
    descripcion: 'Contratos, obligaciones, responsabilidad y patrimonio.',
    detalle: 'Análisis de relaciones jurídicas entre particulares, con especial atención a las obligaciones, los contratos y la protección de intereses patrimoniales.',
    servicios: ['Elaboración y revisión de contratos', 'Incumplimientos contractuales', 'Responsabilidad civil', 'Obligaciones y acuerdos entre particulares', 'Asuntos patrimoniales'],
  },
  {
    id: 'penal',
    nombre: 'Derecho Penal',
    numero: '04',
    descripcion: 'Orientación jurídica en asuntos y procedimientos penales.',
    detalle: 'Estudio inicial de situaciones relacionadas con el ámbito penal y orientación sobre derechos, garantías y alternativas jurídicas disponibles.',
    servicios: ['Orientación jurídica penal', 'Análisis inicial de situaciones', 'Acompañamiento y representación, según el caso', 'Información sobre derechos y garantías', 'Revisión de documentación relacionada'],
  },
  {
    id: 'tributario',
    nombre: 'Derecho Tributario',
    numero: '05',
    descripcion: 'Obligaciones fiscales y planeación tributaria responsable.',
    detalle: 'Orientación en el cumplimiento de obligaciones tributarias y en la revisión de situaciones fiscales de personas y organizaciones.',
    servicios: ['Revisión de obligaciones tributarias', 'Análisis de situaciones fiscales', 'Orientación sobre procedimientos tributarios', 'Revisión de documentación fiscal', 'Acompañamiento en controversias tributarias'],
  },
  {
    id: 'inmobiliario',
    nombre: 'Derecho Inmobiliario',
    numero: '06',
    descripcion: 'Seguridad jurídica para propiedades y operaciones inmobiliarias.',
    detalle: 'Análisis de documentos, contratos y operaciones relacionadas con bienes inmuebles, con el propósito de identificar aspectos jurídicos relevantes antes de tomar decisiones.',
    servicios: ['Revisión de contratos inmobiliarios', 'Estudio documental de propiedades', 'Compraventa de inmuebles', 'Contratos de arrendamiento', 'Orientación sobre obligaciones de las partes'],
  },
]

// DATOS FICTICIOS PARA LA DEMOSTRACIÓN
const procesosIniciales = [
  {
    id: 'SLG-001',
    cliente: 'María Rodríguez',
    asunto: 'Proceso civil demostrativo',
    area: 'Derecho Civil',
    estado: 'En trámite',
    abogado: 'Andrés Salamanca',
    fecha: '2026-11-12',
    descripcion: 'Ejemplo de seguimiento de un asunto civil.',
    actualizaciones: [{ fecha: '2026-10-20', texto: 'Se registró una actualización de demostración.' }],
  },
  {
    id: 'SLG-002',
    cliente: 'María Rodríguez',
    asunto: 'Asunto contractual demostrativo',
    area: 'Derecho Corporativo',
    estado: 'Pendiente de revisión',
    abogado: 'Laura Méndez',
    fecha: '2026-11-20',
    descripcion: 'Ejemplo de seguimiento contractual.',
    actualizaciones: [{ fecha: '2026-10-22', texto: 'El asunto está pendiente de revisión en esta demostración.' }],
  },
  {
    id: 'SLG-003',
    cliente: 'Carlos Torres',
    asunto: 'Asunto laboral demostrativo',
    area: 'Derecho Laboral',
    estado: 'Finalizado',
    abogado: 'Andrés Salamanca',
    fecha: '',
    descripcion: 'Ejemplo de asunto finalizado.',
    actualizaciones: [],
  },
]

const usuariosDemo = {
  cliente: { correo: 'cliente@slg.test', clave: 'Cliente123', nombre: 'María Rodríguez' },
  abogado: { correo: 'abogado@slg.test', clave: 'Abogado123', nombre: 'Andrés Salamanca' },
}

function App() {
  const [vista, setVista] = useState('inicio')
  const [areaSeleccionada, setAreaSeleccionada] = useState(null)
  const [menuMovil, setMenuMovil] = useState(false)
  const [tipoUsuario, setTipoUsuario] = useState('cliente')
  const [usuario, setUsuario] = useState(null)
  const [correo, setCorreo] = useState('')
  const [clave, setClave] = useState('')
  const [errorLogin, setErrorLogin] = useState('')
  const [procesos, setProcesos] = useState(procesosIniciales)
  const [procesoSeleccionado, setProcesoSeleccionado] = useState(null)
  const [mensajePortal, setMensajePortal] = useState('')
  const [contactoEnviado, setContactoEnviado] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [vista])

  function irAInicio(seccion = 'inicio') {
    setVista('inicio')
    setAreaSeleccionada(null)
    setMenuMovil(false)
    window.setTimeout(() => {
      document.getElementById(seccion)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  function abrirServicios() {
    setVista('servicios')
    setAreaSeleccionada(null)
    setMenuMovil(false)
  }

  function abrirArea(area) {
    setAreaSeleccionada(area)
    setVista('detalle')
    setMenuMovil(false)
  }

  function abrirContacto() {
    setVista('contacto')
    setMenuMovil(false)
    setContactoEnviado(false)
  }

  function abrirPortal() {
    setVista('portal')
    setMenuMovil(false)
    setErrorLogin('')
    setCorreo('')
    setClave('')
  }

  function iniciarSesion(event) {
    event.preventDefault()
    setErrorLogin('')
    const cuenta = usuariosDemo[tipoUsuario]

    if (correo.trim().toLowerCase() !== cuenta.correo || clave !== cuenta.clave) {
      setErrorLogin('Los datos no coinciden con la cuenta de demostración.')
      return
    }

    setUsuario({ tipo: tipoUsuario, nombre: cuenta.nombre, correo: cuenta.correo })
    setProcesoSeleccionado(null)
    setMensajePortal('')
    setVista(tipoUsuario === 'cliente' ? 'panel-cliente' : 'panel-abogado')
  }

  function cerrarSesion() {
    setUsuario(null)
    setProcesoSeleccionado(null)
    setMensajePortal('')
    setCorreo('')
    setClave('')
    setErrorLogin('')
    setVista('inicio')
  }

  function actualizarEstado(id, nuevoEstado) {
    const actualizacion = {
      fecha: new Date().toISOString().slice(0, 10),
      texto: `El estado del asunto se actualizó a: ${nuevoEstado}.`,
    }

    setProcesos((anteriores) =>
      anteriores.map((proceso) =>
        proceso.id === id
          ? { ...proceso, estado: nuevoEstado, actualizaciones: [actualizacion, ...proceso.actualizaciones] }
          : proceso
      )
    )

    setProcesoSeleccionado((actual) =>
      actual && actual.id === id
        ? { ...actual, estado: nuevoEstado, actualizaciones: [actualizacion, ...actual.actualizaciones] }
        : actual
    )

    setMensajePortal('Estado actualizado en esta demostración.')
  }

  const procesosUsuario = procesos.filter((proceso) => {
    if (!usuario) return false
    return usuario.tipo === 'cliente'
      ? proceso.cliente === usuario.nombre
      : proceso.abogado === usuario.nombre
  })

  function formatoFecha(fecha) {
    if (!fecha) return 'No definida'
    const [anio, mes, dia] = fecha.split('-')
    return `${dia}/${mes}/${anio}`
  }

  return (
    <div className="app">
      <header className="navbar">
        <button className="logo" onClick={() => irAInicio()} aria-label="Volver al inicio">
          SALAMANCA
          <span>LEGAL GROUP</span>
        </button>

        <button className="menu-toggle" onClick={() => setMenuMovil(!menuMovil)} aria-expanded={menuMovil}>
          {menuMovil ? 'Cerrar' : 'Menú'}
        </button>

        <nav className={menuMovil ? 'nav-links nav-open' : 'nav-links'} aria-label="Navegación principal">
          <button onClick={() => irAInicio('nosotros')}>La firma</button>
          <button onClick={abrirServicios}>Servicios</button>
          <button onClick={() => irAInicio('equipo')}>Equipo</button>
          <button className="nav-contact" onClick={abrirContacto}>Contactarnos <span>↗</span></button>
          <button className="nav-portal" onClick={abrirPortal}>Portal privado</button>
        </nav>
      </header>

      <main>
        {vista === 'inicio' && (
          <>
            <section className="hero" id="inicio">
              <div className="hero-copy">
                <div className="hero-label"><span className="gold-line" /> ASESORÍA JURÍDICA · COLOMBIA</div>
                <h1>Decisiones jurídicas<br /><span>con visión de futuro.</span></h1>
                <p className="hero-description">
                  Estrategia, conocimiento y criterio jurídico para acompañar decisiones que importan.
                </p>
                <div className="hero-actions">
                  <button className="primary-btn" onClick={abrirServicios}>Conocer nuestras áreas <span>↗</span></button>
                  <button className="text-btn" onClick={() => irAInicio('nosotros')}>Conocer la firma <span>→</span></button>
                </div>
                <div className="hero-signature"><span className="signature-line" /> Rigor jurídico. Visión estratégica.</div>
              </div>
              <div className="hero-visual" aria-label="Arquitectura moderna de una firma profesional">
                <div className="hero-photo-overlay" />
                <div className="hero-visual-caption"><span>01 / 06</span><span>CONFIANZA · CRITERIO · COMPROMISO</span></div>
                <div className="hero-stamp"><span>SLG</span><small>LEGAL GROUP</small></div>
              </div>
              <div className="hero-bottom-note"><span>ASESORÍA MULTIDISCIPLINARIA</span><span>COLOMBIA · SERVICIOS JURÍDICOS</span></div>
            </section>

            <section className="intro-section" id="nosotros">
              <div className="section-kicker">01 / LA FIRMA</div>
              <div className="intro-layout">
                <h2>Una firma jurídica.<br /><span>Una perspectiva estratégica.</span></h2>
                <div className="intro-copy">
                  <p>Salamanca Legal Group es una propuesta de firma concebida para acompañar a empresas, emprendedores y particulares en sus decisiones jurídicas.</p>
                  <p>Nuestro concepto combina análisis jurídico, visión estratégica y herramientas tecnológicas para ofrecer una experiencia clara y organizada.</p>
                  <button className="inline-link" onClick={abrirServicios}>Conoce nuestras áreas <span>→</span></button>
                </div>
              </div>
            </section>

            <section className="values-section">
              <div className="section-kicker">02 / NUESTRO ENFOQUE</div>
              <h2 className="section-title">Principios que orientan<br /><span>cada decisión.</span></h2>
              <p className="section-description">Un enfoque centrado en las necesidades y circunstancias de cada cliente.</p>
              <div className="value-grid">
                {[
                  { n: '01', titulo: 'Atención personalizada', texto: 'Cada situación merece un análisis adaptado a sus circunstancias.' },
                  { n: '02', titulo: 'Visión estratégica', texto: 'Evaluamos las implicaciones jurídicas antes de tomar decisiones.' },
                  { n: '03', titulo: 'Tecnología jurídica', texto: 'Herramientas digitales para facilitar la gestión de información.' },
                ].map((valor) => (
                  <article className="value-card" key={valor.n}>
                    <span className="card-number">{valor.n}</span>
                    <h3>{valor.titulo}</h3>
                    <p>{valor.texto}</p>
                  </article>
                ))}
              </div>
            </section>

            <section className="digital-section" id="portal">
              <div className="digital-layout">
                <div>
                  <div className="section-kicker">03 / PORTAL DIGITAL</div>
                  <h2>Su información,<br /><span>organizada.</span></h2>
                  <p>Acceda a una demostración de nuestro concepto de portal privado para clientes y abogados.</p>
                  <button className="primary-btn digital-button" onClick={abrirPortal}>Entrar al portal <span>↗</span></button>
                </div>
                <div className="digital-panel">
                  <div className="panel-top"><span>SALAMANCA / PORTAL</span><span className="panel-dot" /></div>
                  <div className="panel-content">
                    <span className="panel-caption">ESPACIO DIGITAL</span>
                    <h3>Seguimiento de asuntos.</h3>
                    <div className="panel-row"><span>01</span><span>Procesos jurídicos</span><span>↗</span></div>
                    <div className="panel-row"><span>02</span><span>Historial de actualizaciones</span><span>↗</span></div>
                    <div className="panel-row"><span>03</span><span>Gestión de asuntos</span><span>↗</span></div>
                    <p className="panel-note">Demostración con información ficticia.</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="team-section" id="equipo">
              <div className="section-kicker">04 / EQUIPO</div>
              <h2 className="section-title">Conocimiento jurídico.<br /><span>Compromiso profesional.</span></h2>
              <div className="team-note"><span>SLG</span><p>Un enfoque multidisciplinario orientado al análisis responsable y a la búsqueda de alternativas jurídicas.</p></div>
            </section>
          </>
        )}

        {vista === 'servicios' && (
          <section className="services-page">
            <div className="section-kicker">SALAMANCA LEGAL GROUP / ÁREAS JURÍDICAS</div>
            <h1>Conocimiento jurídico.<br /><span>Soluciones con perspectiva.</span></h1>
            <p className="services-intro">Explora nuestras seis áreas de práctica. Selecciona una para conocer su enfoque y los servicios que comprende.</p>

            <div className="service-card-grid">
              {areas.map((area) => (
                <button className="service-card" key={area.id} onClick={() => abrirArea(area)}>
                  <span className="service-card-top"><span>{area.numero} / ÁREA DE PRÁCTICA</span><span className="service-card-arrow">↗</span></span>
                  <span className="service-card-mark" aria-hidden="true">{['§', '↔', '◇', '⚖', '∑', '⌂'][Number(area.numero) - 1]}</span>
                  <strong>{area.nombre}</strong>
                  <span className="service-card-description">{area.descripcion}</span>
                  <span className="service-card-link">Descubrir área <span>→</span></span>
                </button>
              ))}
            </div>

            <div className="services-footer-note">
              <span className="gold-line" />
              <p>Un enfoque coordinado para comprender cada situación desde su contexto jurídico.</p>
            </div>
            <button className="text-btn back-link" onClick={() => irAInicio()}>← Volver al inicio</button>
          </section>
        )}

        {vista === 'detalle' && areaSeleccionada && (
          <section className="detail-page">
            <div className="detail-heading">
              <div className="section-kicker">ÁREAS JURÍDICAS / {areaSeleccionada.numero}</div>
              <h1>{areaSeleccionada.nombre}</h1>
              <p>{areaSeleccionada.detalle}</p>
              <button className="text-btn back-link" onClick={abrirServicios}>← Volver a todas las áreas</button>
            </div>
            <div className="detail-services">
              <div>
                <div className="section-kicker">SERVICIOS JURÍDICOS</div>
                <h2>Asuntos que<br /><span>requieren claridad.</span></h2>
                <p className="detail-side-copy">Cada asunto debe revisarse según sus circunstancias y la normativa aplicable.</p>
              </div>
              <div className="detail-list">
                {areaSeleccionada.servicios.map((servicio, index) => (
                  <div className="detail-row" key={servicio}>
                    <span>{String(index + 1).padStart(2, '0')}</span><p>{servicio}</p><span>↗</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="detail-contact">
              <div className="section-kicker">SALAMANCA LEGAL GROUP</div>
              <h2>¿Desea plantear una consulta?</h2>
              <p>Cuéntenos brevemente qué tipo de orientación está buscando a través de nuestro formulario de contacto demostrativo.</p>
              <button className="primary-btn" onClick={abrirContacto}>Ir a contactarnos <span>↗</span></button>
            </div>
          </section>
        )}

        {vista === 'contacto' && (
          <section className="contact-page">
            <div className="contact-page-heading">
              <div className="section-kicker">SALAMANCA LEGAL GROUP / CONTACTO</div>
              <h1>Conversemos sobre<br /><span>lo que importa.</span></h1>
              <p>Comparta información general sobre su consulta. Este formulario es una demostración y no envía datos a ningún servidor.</p>
            </div>

            <div className="contact-layout">
              <div className="contact-side">
                <span className="contact-side-number">SLG / 01</span>
                <h2>Un primer paso<br />hacia la claridad.</h2>
                <p>Indique el área de interés y una breve descripción para organizar su solicitud de demostración.</p>
                <div className="contact-channel">
                  <span>CANAL DE CONTACTO</span>
                  <strong>Formulario de demostración</strong>
                  <small>No se han configurado correo, teléfono ni dirección oficiales.</small>
                </div>
              </div>

              <form className="contact-form" onSubmit={(event) => { event.preventDefault(); setContactoEnviado(true) }}>
                <div className="contact-form-heading"><span>FORMULARIO DE CONTACTO</span><span>01 — 04</span></div>
                <label htmlFor="contact-nombre">Nombre completo</label>
                <input id="contact-nombre" name="nombre" type="text" placeholder="Escriba su nombre" autoComplete="name" required />

                <label htmlFor="contact-email">Correo electrónico</label>
                <input id="contact-email" name="email" type="email" placeholder="nombre@correo.com" autoComplete="email" required />

                <label htmlFor="contact-motivo">Área de interés</label>
                <select id="contact-motivo" name="motivo" defaultValue="" required>
                  <option value="" disabled>Seleccione un área</option>
                  {areas.map((area) => <option key={area.id} value={area.nombre}>{area.nombre}</option>)}
                  <option value="Consulta general">Consulta general</option>
                </select>

                <label htmlFor="contact-mensaje">Descripción breve</label>
                <textarea id="contact-mensaje" name="mensaje" rows="5" placeholder="Describa brevemente el motivo de su consulta. Evite incluir información confidencial." required />

                <button className="primary-btn contact-submit" type="submit">Enviar solicitud de demostración <span>↗</span></button>
                {contactoEnviado && <p className="contact-success" role="status">Formulario validado correctamente. Esta demostración no ha enviado ni guardado sus datos.</p>}
                <p className="contact-form-note">Demostración visual. No incluya datos sensibles ni información confidencial.</p>
              </form>
            </div>
            <button className="text-btn back-link" onClick={() => irAInicio()}>← Volver al inicio</button>
          </section>
        )}

        {vista === 'portal' && (
          <section className="portal-page">
            <div className="section-kicker">SALAMANCA LEGAL GROUP</div>
            <h1>Portal privado</h1>
            <p className="services-intro">Seleccione el tipo de acceso para continuar.</p>

            <div className="portal-choice-grid">
              <button className={`portal-choice ${tipoUsuario === 'cliente' ? 'portal-choice-active' : ''}`} onClick={() => { setTipoUsuario('cliente'); setErrorLogin('') }}>
                <span className="portal-choice-number">01 / CLIENTES</span><strong>Portal de clientes</strong><span>Consulte sus asuntos y sus actualizaciones.</span><span className="portal-choice-arrow">↗</span>
              </button>
              <button className={`portal-choice ${tipoUsuario === 'abogado' ? 'portal-choice-active' : ''}`} onClick={() => { setTipoUsuario('abogado'); setErrorLogin('') }}>
                <span className="portal-choice-number">02 / ABOGADOS</span><strong>Portal de abogados</strong><span>Consulte y gestione los asuntos asignados.</span><span className="portal-choice-arrow">↗</span>
              </button>
            </div>

            <form className="portal-login" onSubmit={iniciarSesion}>
              <div className="section-kicker">ACCESO DE {tipoUsuario === 'cliente' ? 'CLIENTE' : 'ABOGADO'}</div>
              <h2>Iniciar sesión</h2>
              <label htmlFor="correo">Correo electrónico</label>
              <input id="correo" type="email" autoComplete="username" placeholder="usuario@ejemplo.com" value={correo} onChange={(event) => setCorreo(event.target.value)} required />
              <label htmlFor="clave">Contraseña</label>
              <input id="clave" type="password" autoComplete="current-password" placeholder="Introduzca su contraseña" value={clave} onChange={(event) => setClave(event.target.value)} required />
              {errorLogin && <p className="portal-error" role="alert">{errorLogin}</p>}
              <button className="primary-btn portal-submit" type="submit">Entrar al portal <span>↗</span></button>
              <div className="demo-credentials">
                <strong>Credenciales de demostración</strong>
                <p>Cliente: <code>cliente@slg.test</code></p><p>Contraseña: <code>Cliente123</code></p>
                <hr />
                <p>Abogado: <code>abogado@slg.test</code></p><p>Contraseña: <code>Abogado123</code></p>
              </div>
            </form>
            <button className="text-btn back-link" onClick={() => irAInicio()}>← Volver a la página principal</button>
          </section>
        )}

        {(vista === 'panel-cliente' || vista === 'panel-abogado') && usuario && (
          <section className="portal-page dashboard-page">
            <div className="dashboard-heading">
              <div>
                <div className="section-kicker">SALAMANCA / ESPACIO PRIVADO</div>
                <h1>{vista === 'panel-cliente' ? 'Mis procesos' : 'Gestión de asuntos'}</h1>
                <p className="services-intro">Bienvenido, {usuario.nombre}.</p>
              </div>
              <button className="text-btn" onClick={cerrarSesion}>Cerrar sesión ↗</button>
            </div>

            <div className="demo-warning">DEMOSTRACIÓN · DATOS FICTICIOS · NO UTILIZAR PARA CASOS REALES</div>
            <div className="dashboard-stats">
              <article><span>ASUNTOS ASIGNADOS</span><strong>{procesosUsuario.length}</strong></article>
              <article><span>EN TRÁMITE</span><strong>{procesosUsuario.filter((p) => p.estado === 'En trámite').length}</strong></article>
              <article><span>FINALIZADOS</span><strong>{procesosUsuario.filter((p) => p.estado === 'Finalizado').length}</strong></article>
            </div>

            {mensajePortal && <p className="portal-success" role="status">{mensajePortal}</p>}
            <h2 className="dashboard-section-title">{vista === 'panel-cliente' ? 'Sus asuntos' : 'Procesos asignados'}</h2>

            {procesosUsuario.length === 0 ? (
              <p className="services-intro">No hay asuntos disponibles para esta cuenta de demostración.</p>
            ) : (
              <div className="case-list">
                {procesosUsuario.map((proceso) => (
                  <article className="case-card" key={proceso.id}>
                    <div className="case-card-top"><span>{proceso.id}</span><span className={`case-status ${proceso.estado === 'Finalizado' ? 'case-status-done' : ''}`}>{proceso.estado}</span></div>
                    <h3>{proceso.asunto}</h3><p>{proceso.area}</p>
                    <div className="case-card-meta"><span>Abogado asignado</span><strong>{proceso.abogado}</strong></div>
                    <div className="case-card-meta"><span>Próxima fecha de ejemplo</span><strong>{formatoFecha(proceso.fecha)}</strong></div>
                    <button className="inline-link" onClick={() => { setProcesoSeleccionado(proceso); setMensajePortal('') }}>Ver detalles <span>→</span></button>
                  </article>
                ))}
              </div>
            )}

            {procesoSeleccionado && (
              <section className="case-detail-panel">
                <div className="case-detail-top">
                  <div><div className="section-kicker">DETALLE DEL ASUNTO</div><h2>{procesoSeleccionado.asunto}</h2></div>
                  <button className="text-btn" onClick={() => setProcesoSeleccionado(null)}>Cerrar ×</button>
                </div>
                <p><strong>Referencia:</strong> {procesoSeleccionado.id}</p>
                <p><strong>Área:</strong> {procesoSeleccionado.area}</p>
                <p><strong>Estado:</strong> {procesoSeleccionado.estado}</p>
                <p><strong>Descripción:</strong> {procesoSeleccionado.descripcion}</p>
                <h3>Historial de actualizaciones</h3>
                {procesoSeleccionado.actualizaciones.length === 0 ? (
                  <p className="services-intro">No hay actualizaciones registradas.</p>
                ) : (
                  <div className="case-history">
                    {procesoSeleccionado.actualizaciones.map((item, index) => <article key={`${item.fecha}-${index}`}><span>{formatoFecha(item.fecha)}</span><p>{item.texto}</p></article>)}
                  </div>
                )}
                {usuario.tipo === 'abogado' && (
                  <div className="case-update">
                    <label htmlFor="nuevo-estado">Actualizar estado</label>
                    <select id="nuevo-estado" value={procesoSeleccionado.estado} onChange={(event) => actualizarEstado(procesoSeleccionado.id, event.target.value)}>
                      <option>En trámite</option><option>Pendiente de revisión</option><option>Pendiente de actuación</option><option>Finalizado</option>
                    </select>
                    <p className="case-update-note">El cambio se mantiene solamente mientras esta demostración permanezca abierta.</p>
                  </div>
                )}
              </section>
            )}
            <button className="text-btn back-link" onClick={cerrarSesion}>← Salir del portal</button>
          </section>
        )}
      </main>

      <footer className="footer">
        <button className="footer-brand" onClick={() => irAInicio()}>SALAMANCA LEGAL GROUP</button>
        <span>Enfoque jurídico y visión estratégica.</span>
        <button className="footer-top" onClick={() => irAInicio()}>Volver arriba ↑</button>
      </footer>
    </div>
  )
}

export default App
