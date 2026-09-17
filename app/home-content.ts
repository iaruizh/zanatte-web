// Contenido exacto de la pagina principal real (zanatte-html/index.html),
// portado tal cual para no arriesgar ningun cambio visual durante la
// migracion a Next.js. HOME_CSS es el bloque <style> completo; HOME_BODY es
// el <body> completo (nav a footer), sin el <script> final (se reimplementa
// como useEffect en app/page.tsx).

export const HOME_CSS = `
  :root {
    --cream: #F7F3EE; --cream-deep: #EDE6D8; --sand: #D4C4A8; --stone: #B5A48A;
    --earth: #7A6A52; --bark: #3D2E20; --green: #2E7D32; --green-light: #4CAF50;
    --gold: #C8A030; --gold-light: #E8D5A8; --ruah-dark: #1A1410; --ruah-copper: #A06840;
    --font-serif: 'Cormorant Garamond', Georgia, serif; --font-sans: 'Jost', sans-serif;
  }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { scroll-behavior: smooth; }
  body { font-family: var(--font-sans); background: var(--cream); color: var(--bark); font-weight: 300; -webkit-font-smoothing: antialiased; }
  ::-webkit-scrollbar { width: 4px; } ::-webkit-scrollbar-track { background: var(--cream); } ::-webkit-scrollbar-thumb { background: var(--stone); border-radius: 2px; }

  /* NAV */
  nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 20px 60px; display: flex; align-items: center; justify-content: space-between; transition: all 0.4s ease; }
  nav.scrolled { background: rgba(247,243,238,0.96); backdrop-filter: blur(12px); padding: 14px 60px; border-bottom: 1px solid rgba(181,164,138,0.3); }
  .nav-logo { font-family: var(--font-serif); font-size: 30px; font-weight: 400; color: var(--green); letter-spacing: 1px; }
  .nav-logo .dot { color: var(--gold); }
  .nav-links { display: flex; gap: 36px; list-style: none; }
  .nav-links a { font-size: 11px; font-weight: 400; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.8); text-decoration: none; transition: opacity 0.3s; }
  nav.scrolled .nav-links a { color: var(--bark); }
  .nav-links a:hover { opacity: 0.6; }
  .nav-right { display: flex; gap: 20px; align-items: center; }
  .nav-social { display: flex; gap: 14px; align-items: center; }
  .nav-social a { color: rgba(255,255,255,0.65); text-decoration: none; transition: color 0.3s; display: flex; align-items: center; }
  nav.scrolled .nav-social a { color: var(--earth); }
  .nav-social a:hover { color: var(--green-light); }
  .nav-cta { background: var(--green); color: white; padding: 10px 24px; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; border-radius: 2px; transition: background 0.3s; }
  .nav-cta:hover { background: #1B5E20; }

  /* HERO */
  .hero { min-height: 100vh; background: linear-gradient(160deg, #1a2e1a 0%, #2C2018 50%, #1A1410 100%); display: flex; align-items: center; justify-content: center; text-align: center; position: relative; overflow: hidden; padding: 120px 40px 80px; }
  .hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 50% 60%, rgba(46,125,50,0.15) 0%, transparent 70%); }
  .hero-content { position: relative; z-index: 1; max-width: 900px; }
  .hero-eyebrow { font-size: 11px; letter-spacing: 5px; text-transform: uppercase; color: var(--green-light); opacity: 0.8; margin-bottom: 32px; display: block; }
  .hero-title { font-family: var(--font-serif); font-size: clamp(52px, 7vw, 96px); font-weight: 300; color: var(--cream); line-height: 1.05; margin-bottom: 32px; }
  .hero-title em { font-style: italic; color: var(--gold); }
  .hero-sub { font-size: 16px; font-weight: 300; color: rgba(247,243,238,0.65); line-height: 1.8; max-width: 560px; margin: 0 auto 56px; }
  .hero-btns { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
  .btn-primary { background: var(--green); color: white; padding: 16px 40px; font-size: 12px; letter-spacing: 2.5px; text-transform: uppercase; text-decoration: none; border-radius: 2px; transition: all 0.3s; }
  .btn-primary:hover { background: #1B5E20; transform: translateY(-2px); }
  .btn-outline { border: 1px solid rgba(247,243,238,0.3); color: var(--cream); padding: 16px 40px; font-size: 12px; letter-spacing: 2.5px; text-transform: uppercase; text-decoration: none; border-radius: 2px; transition: all 0.3s; }
  .btn-outline:hover { border-color: rgba(247,243,238,0.7); transform: translateY(-2px); }
  .hero-scroll { position: absolute; bottom: 40px; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 8px; }
  .hero-scroll span { font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: rgba(247,243,238,0.4); }
  .scroll-line { width: 1px; height: 50px; background: linear-gradient(to bottom, rgba(247,243,238,0.4), transparent); animation: scrollAnim 2s ease-in-out infinite; }
  @keyframes scrollAnim { 0%,100%{opacity:0.3} 50%{opacity:1} }

  /* SECTIONS BASE */
  section { padding: 120px 60px; }
  .section-label { font-size: 10px; letter-spacing: 5px; text-transform: uppercase; color: var(--green); margin-bottom: 20px; display: block; }
  .section-title { font-family: var(--font-serif); font-size: clamp(36px, 4vw, 60px); font-weight: 300; line-height: 1.1; color: var(--bark); margin-bottom: 24px; }
  .section-title em { font-style: italic; color: var(--green); }
  .section-body { font-size: 16px; line-height: 1.9; color: var(--earth); max-width: 560px; font-weight: 300; }

  /* PROBLEMAS */
  .problemas { background: var(--cream); }
  .problemas-inner { max-width: 1100px; margin: 0 auto; }
  .problemas-header { text-align: center; margin-bottom: 70px; }
  .problemas-header .section-body { margin: 0 auto; text-align: center; }
  .problemas-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
  .problema-card { background: var(--cream-deep); padding: 44px 36px; transition: background 0.3s; }
  .problema-card:hover { background: #fff; }
  .problema-icon { font-size: 32px; margin-bottom: 20px; display: block; }
  .problema-title { font-family: var(--font-serif); font-size: 22px; font-weight: 400; color: var(--bark); margin-bottom: 12px; }
  .problema-desc { font-size: 14px; line-height: 1.8; color: var(--earth); font-weight: 300; }

  /* TRANSFORMACIÓN */
  .transformacion { background: var(--ruah-dark); padding: 100px 60px; }
  .transformacion-inner { max-width: 1000px; margin: 0 auto; }
  .transformacion-label { font-size: 10px; letter-spacing: 5px; text-transform: uppercase; color: var(--ruah-copper); margin-bottom: 20px; display: block; }
  .transformacion-title { font-family: var(--font-serif); font-size: clamp(32px, 3.5vw, 52px); font-weight: 300; color: var(--cream); margin-bottom: 60px; line-height: 1.1; }
  .transformacion-grid { display: grid; grid-template-columns: 1fr 60px 1fr; gap: 2rem; align-items: center; }
  .trans-col h3 { font-family: var(--font-serif); font-size: 24px; font-weight: 300; margin-bottom: 20px; }
  .trans-col.antes h3 { color: rgba(247,243,238,0.35); }
  .trans-col.despues h3 { color: #6DD894; }
  .trans-item { display: flex; align-items: center; gap: 12px; padding: 12px 16px; border-radius: 3px; margin-bottom: 8px; font-size: 15px; }
  .trans-item.a { background: rgba(255,255,255,0.04); color: rgba(247,243,238,0.5); }
  .trans-item.d { background: rgba(46,125,50,0.2); color: rgba(247,243,238,0.9); }
  .trans-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; }
  .trans-item.a .trans-dot { background: rgba(255,255,255,0.2); }
  .trans-item.d .trans-dot { background: #6DD894; }
  .trans-arrow { text-align: center; font-size: 28px; color: var(--ruah-copper); }

  /* RUAH — eje principal */
  .ruah { background: var(--ruah-dark); position: relative; overflow: hidden; padding: 160px 60px; }
  .ruah::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 30% 50%, rgba(160,104,64,0.12) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(46,125,50,0.08) 0%, transparent 50%); }
  .ruah-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; position: relative; z-index: 1; }
  .ruah-label { font-size: 10px; letter-spacing: 6px; text-transform: uppercase; color: var(--ruah-copper); margin-bottom: 16px; display: block; }
  .ruah-title { font-family: var(--font-serif); font-size: clamp(48px, 5vw, 80px); font-weight: 300; color: var(--cream); line-height: 1.05; margin-bottom: 16px; }
  .ruah-title em { font-style: italic; color: var(--ruah-copper); }
  .ruah-meaning { font-family: var(--font-serif); font-size: 13px; font-style: italic; color: rgba(247,243,238,0.35); margin-bottom: 32px; letter-spacing: 1px; }
  .ruah-body { font-size: 16px; line-height: 1.9; color: rgba(247,243,238,0.55); margin-bottom: 36px; font-weight: 300; }
  .ruah-fases { display: flex; flex-direction: column; gap: 10px; margin-bottom: 40px; }
  .ruah-fase { border-left: 2px solid var(--ruah-copper); padding: 10px 16px; background: rgba(255,255,255,0.04); }
  .ruah-fase h4 { font-family: var(--font-serif); font-size: 17px; color: var(--cream); font-weight: 400; margin-bottom: 4px; }
  .ruah-fase p { font-size: 13px; color: rgba(247,243,238,0.5); font-weight: 300; }
  .btn-ruah { display: inline-block; border: 1px solid var(--ruah-copper); color: var(--ruah-copper); padding: 16px 44px; font-size: 12px; letter-spacing: 3px; text-transform: uppercase; text-decoration: none; border-radius: 2px; transition: all 0.3s; }
  .btn-ruah:hover { background: var(--ruah-copper); color: var(--cream); }
  .ruah-visual { display: flex; align-items: center; justify-content: center; }
  .ruah-circle { width: 360px; height: 360px; border-radius: 50%; border: 1px solid rgba(160,104,64,0.25); display: flex; align-items: center; justify-content: center; position: relative; }
  .ruah-circle::before { content: ''; position: absolute; inset: 20px; border-radius: 50%; border: 1px solid rgba(160,104,64,0.15); }
  .ruah-word { font-family: var(--font-serif); font-size: 80px; font-weight: 300; color: rgba(247,243,238,0.08); letter-spacing: 10px; }

  /* RUTA */
  .ruta { background: var(--cream-deep); }
  .ruta-inner { max-width: 1100px; margin: 0 auto; }
  .ruta-header { text-align: center; margin-bottom: 80px; }
  .ruta-header .section-body { margin: 0 auto; text-align: center; }
  .steps { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; position: relative; }
  .steps::before { content: ''; position: absolute; top: 32px; left: 10%; right: 10%; height: 1px; background: var(--sand); z-index: 0; }
  .step { text-align: center; padding: 0 16px; position: relative; z-index: 1; }
  .step-dot { width: 64px; height: 64px; border-radius: 50%; background: var(--cream); border: 2px solid var(--green); display: flex; align-items: center; justify-content: center; margin: 0 auto 28px; }
  .step-num { font-family: var(--font-serif); font-size: 20px; color: var(--green); font-weight: 400; }
  .step-title { font-family: var(--font-serif); font-size: 18px; color: var(--bark); margin-bottom: 10px; font-weight: 400; }
  .step-text { font-size: 13px; color: var(--earth); line-height: 1.7; font-weight: 300; }

  /* TERAPIAS */
  .terapias { background: var(--cream); }
  .terapias-inner { max-width: 1100px; margin: 0 auto; }
  .terapias-header { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: end; margin-bottom: 80px; }
  .terapias-nota { margin-top: 32px; padding: 20px 24px; background: rgba(46,125,50,0.07); border-left: 3px solid var(--green); font-size: 14px; color: var(--earth); line-height: 1.7; }
  .terapias-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
  .terapia-card { background: var(--cream-deep); padding: 44px 36px; transition: background 0.3s; }
  .terapia-card:hover { background: #fff; }
  .terapia-icon { font-size: 32px; margin-bottom: 24px; display: block; }
  .terapia-name { font-family: var(--font-serif); font-size: 22px; font-weight: 400; color: var(--bark); margin-bottom: 12px; }
  .terapia-duration { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--green); margin-bottom: 16px; display: block; }
  .terapia-desc { font-size: 14px; line-height: 1.8; color: var(--earth); font-weight: 300; }
  .terapia-cta { display: inline-block; margin-top: 24px; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--green); text-decoration: none; border-bottom: 1px solid var(--green); padding-bottom: 2px; transition: opacity 0.3s; }
  .terapia-cta:hover { opacity: 0.6; }

  /* FILOSOFIA */
  .filosofia { background: var(--cream-deep); }
  .filosofia-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 100px; align-items: center; max-width: 1100px; margin: 0 auto; }
  .filosofia-quote { font-family: var(--font-serif); font-size: clamp(24px, 2.5vw, 38px); font-style: italic; font-weight: 300; color: var(--bark); line-height: 1.4; border-left: 2px solid var(--green); padding-left: 40px; }
  .filosofia-quote strong { font-style: normal; color: var(--green); font-weight: 400; }

  /* PILARES */
  .pilares { background: var(--cream); }
  .pilares-inner { max-width: 1100px; margin: 0 auto; }
  .pilares-header { text-align: center; margin-bottom: 80px; }
  .pilares-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; }
  .pilar { background: var(--cream-deep); padding: 50px 36px; position: relative; overflow: hidden; }
  .pilar::before { content: ''; position: absolute; bottom: 0; left: 0; width: 100%; height: 3px; background: var(--green); transform: scaleX(0); transform-origin: left; transition: transform 0.4s ease; }
  .pilar:hover::before { transform: scaleX(1); }
  .pilar-num { font-family: var(--font-serif); font-size: 64px; font-weight: 300; color: rgba(46,125,50,0.1); line-height: 1; margin-bottom: 24px; display: block; }
  .pilar-title { font-family: var(--font-serif); font-size: 22px; font-weight: 400; color: var(--bark); margin-bottom: 16px; }
  .pilar-text { font-size: 14px; line-height: 1.8; color: var(--earth); font-weight: 300; }

  /* TESTIMONIOS */
  .testimonios { background: var(--cream-deep); }
  .testimonios-inner { max-width: 1100px; margin: 0 auto; }
  .testimonios-header { text-align: center; margin-bottom: 70px; }
  .testimonios-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
  .testimonio-card { background: var(--cream); padding: 44px 36px; position: relative; }
  .testimonio-card::before { content: '"'; font-family: var(--font-serif); font-size: 5rem; color: var(--green); opacity: .12; position: absolute; top: .5rem; left: 1.5rem; line-height: 1; }
  .testimonio-text { font-size: 15px; color: var(--earth); line-height: 1.9; margin-bottom: 28px; padding-top: 20px; font-weight: 300; font-style: italic; }
  .testimonio-autor { display: flex; gap: 14px; align-items: center; }
  .testimonio-avatar { width: 44px; height: 44px; border-radius: 50%; background: var(--green); color: white; display: flex; align-items: center; justify-content: center; font-family: var(--font-serif); font-size: 20px; flex-shrink: 0; }
  .testimonio-nombre { font-size: 15px; color: var(--bark); font-weight: 400; }
  .testimonio-meta { font-size: 12px; color: var(--stone); margin-top: 3px; }
  .testimonio-tag { font-size: 11px; letter-spacing: 1px; color: var(--green); text-transform: uppercase; margin-top: 4px; display: block; }

  /* FUNDADOR */
  .fundador { background: var(--cream); }
  .fundador-grid { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.4fr; gap: 100px; align-items: center; }
  .fundador-img { aspect-ratio: 3/4; border-radius: 4px; overflow: hidden; background: var(--cream-deep); }
  .fundador-img img { width: 100%; height: 100%; object-fit: cover; object-position: top center; }
  .fundador-label { font-size: 10px; letter-spacing: 5px; text-transform: uppercase; color: var(--green); margin-bottom: 20px; display: block; }
  .fundador-name { font-family: var(--font-serif); font-size: clamp(36px, 3.5vw, 54px); font-weight: 300; color: var(--bark); margin-bottom: 8px; }
  .fundador-role { font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: var(--stone); margin-bottom: 24px; font-weight: 400; }
  .fundador-diferencial { background: rgba(46,125,50,0.07); border-left: 3px solid var(--green); padding: 16px 20px; margin-bottom: 28px; }
  .fundador-diferencial p { font-size: 14px; color: var(--earth); line-height: 1.7; }
  .fundador-diferencial strong { color: var(--green); font-weight: 500; }
  .fundador-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
  .fundador-chip { border: 1px solid var(--green); color: var(--green); padding: 4px 12px; border-radius: 20px; font-size: 12px; }
  .fundador-body { font-size: 16px; line-height: 1.9; color: var(--earth); font-weight: 300; margin-bottom: 40px; }
  .fundador-quote { font-family: var(--font-serif); font-size: 22px; font-style: italic; color: var(--bark); border-left: 2px solid var(--green); padding-left: 24px; line-height: 1.5; }
  .fundador-link { display: inline-block; margin-top: 32px; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--green); text-decoration: none; border-bottom: 1px solid var(--green); padding-bottom: 2px; }

  /* UBICACION */
  .ubicacion { background: var(--cream-deep); padding: 0; }
  .ubicacion-inner { max-width: 1100px; margin: 0 auto; display: grid; grid-template-columns: 1fr 1.5fr; }
  .ubicacion-info { padding: 80px 60px; }
  .ubicacion-map iframe { width: 100%; height: 100%; min-height: 480px; border: 0; display: block; }
  .contacto-items { margin-top: 40px; display: flex; flex-direction: column; gap: 24px; }
  .contacto-item { display: flex; gap: 16px; align-items: flex-start; }
  .contacto-item-icon { width: 40px; height: 40px; border-radius: 50%; background: rgba(46,125,50,0.1); display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 18px; }
  .contacto-item-text p { font-size: 10px; letter-spacing: 3px; text-transform: uppercase; color: var(--stone); margin-bottom: 4px; }
  .contacto-item-text a, .contacto-item-text span { font-size: 15px; color: var(--bark); text-decoration: none; font-weight: 300; }
  .contacto-item-text a:hover { color: var(--green); }

  /* REDES */
  .redes { background: var(--bark); padding: 56px 60px; display: flex; align-items: center; justify-content: center; gap: 60px; flex-wrap: wrap; }
  .red-link { display: flex; flex-direction: column; align-items: center; gap: 10px; text-decoration: none; color: rgba(247,243,238,0.45); transition: color 0.3s; }
  .red-link:hover { color: var(--green-light); }
  .red-name { font-size: 10px; letter-spacing: 3px; text-transform: uppercase; }

  /* CTA */
  .cta-section { background: var(--ruah-dark); padding: 120px 60px; text-align: center; }
  .cta-inner { max-width: 800px; margin: 0 auto; }
  .cta-title { font-family: var(--font-serif); font-size: clamp(40px, 5vw, 72px); font-weight: 300; color: var(--cream); margin-bottom: 24px; line-height: 1.1; }
  .cta-title em { font-style: italic; color: var(--gold); }
  .cta-sub { font-size: 16px; color: rgba(247,243,238,0.55); line-height: 1.8; margin-bottom: 56px; }
  .cta-btns { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; }
  .btn-wa { background: #25D366; color: white; padding: 18px 44px; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; border-radius: 2px; transition: all 0.3s; display: flex; align-items: center; gap: 10px; }
  .btn-wa:hover { background: #1da851; transform: translateY(-2px); }
  .btn-ivan { border: 1px solid rgba(247,243,238,0.25); color: var(--cream); padding: 18px 44px; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; border-radius: 2px; transition: all 0.3s; }
  .btn-ivan:hover { border-color: rgba(247,243,238,0.6); transform: translateY(-2px); }

  /* FOOTER */
  footer { background: #0D0A08; padding: 36px 60px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
  .footer-brand { font-family: var(--font-serif); font-size: 22px; color: var(--green); font-weight: 400; }
  .footer-copy { font-size: 12px; color: rgba(247,243,238,0.2); letter-spacing: 1px; }
  .footer-links { display: flex; gap: 32px; }
  .footer-links a { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(247,243,238,0.3); text-decoration: none; transition: color 0.3s; }
  .footer-links a:hover { color: rgba(247,243,238,0.7); }

  .fade-in { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
  .fade-in.visible { opacity: 1; transform: translateY(0); }

  @media (max-width: 900px) {
    nav { padding: 16px 24px; } nav.scrolled { padding: 12px 24px; } .nav-links { display: none; }
    section { padding: 80px 24px; }
    .problemas-grid, .terapias-grid, .pilares-grid, .testimonios-grid { grid-template-columns: 1fr 1fr; }
    .filosofia-grid, .terapias-header, .ruah-inner, .fundador-grid, .ubicacion-inner { grid-template-columns: 1fr; gap: 48px; }
    .transformacion-grid { grid-template-columns: 1fr; gap: 1rem; }
    .trans-arrow { display: none; }
    .steps { grid-template-columns: 1fr 1fr; } .steps::before { display: none; }
    footer { flex-direction: column; text-align: center; }
    .ruah-visual { display: none; }
    .redes { padding: 40px 24px; gap: 32px; }
    .cta-section { padding: 80px 24px; }
  }
  @media (max-width: 600px) {
    .problemas-grid, .terapias-grid, .pilares-grid, .testimonios-grid, .steps { grid-template-columns: 1fr; }
  }
`;

export const HOME_BODY = `
<nav id="navbar">
  <div class="nav-logo">Ż<span class="dot">anatte</span></div>
  <ul class="nav-links">
    <li><a href="#problemas">¿Te identificas?</a></li>
    <li><a href="#ruah">RUAH</a></li>
    <li><a href="#terapias">Terapias</a></li>
    <li><a href="#ivan">Iván</a></li>
    <li><a href="#ubicacion">Contacto</a></li>
  </ul>
  <div class="nav-right">
    <div class="nav-social">
      <a href="https://www.facebook.com/zanatte" target="_blank" aria-label="Facebook">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
      </a>
      <a href="https://www.instagram.com/zanatte.co" target="_blank" aria-label="Instagram">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
      </a>
      <a href="https://www.tiktok.com/@zanatte.co" target="_blank" aria-label="TikTok">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
      </a>
    </div>
    <a href="https://wa.me/573144114302" class="nav-cta" target="_blank">Agendar</a>
  </div>
</nav>

<section class="hero">
  <div class="hero-content">
    <span class="hero-eyebrow">Bogotá, Colombia · Centro Holointegrativo</span>
    <h1 class="hero-title">Recupera tu <em>energía,</em><br>tu equilibrio<br>y tu claridad</h1>
    <p class="hero-sub">Acompañamos personas que viven con estrés, agotamiento, ansiedad o dolor crónico a recuperar energía, claridad y bienestar integral.</p>
    <div class="hero-btns">
      <a href="#ruah" class="btn-primary">Experiencia RUAH</a>
      <a href="#problemas" class="btn-outline">¿Esto es para ti?</a>
    </div>
  </div>
  <div class="hero-scroll"><span>Descubrir</span><div class="scroll-line"></div></div>
</section>

<section class="problemas" id="problemas">
  <div class="problemas-inner">
    <div class="problemas-header fade-in">
      <span class="section-label">¿Te identificas?</span>
      <h2 class="section-title">Situaciones que <em>acompañamos</em></h2>
      <p class="section-body">Antes de hablar de terapias, hablemos de lo que estás viviendo. Estos son los estados con los que más llegan nuestros pacientes.</p>
    </div>
    <div class="problemas-grid">
      <div class="problema-card fade-in"><span class="problema-icon">⚡</span><h3 class="problema-title">Estrés y agotamiento</h3><p class="problema-desc">Cansancio que no desaparece con el descanso. Tensión constante que afecta tu rendimiento y relaciones.</p></div>
      <div class="problema-card fade-in"><span class="problema-icon">🌀</span><h3 class="problema-title">Ansiedad y mente acelerada</h3><p class="problema-desc">Pensamientos que no paran. Dificultad para estar presente. Sensación de no tener el control.</p></div>
      <div class="problema-card fade-in"><span class="problema-icon">💤</span><h3 class="problema-title">Insomnio y mal descanso</h3><p class="problema-desc">Noches difíciles que afectan tu día. El cuerpo no recupera aunque duermas.</p></div>
      <div class="problema-card fade-in"><span class="problema-icon">🔥</span><h3 class="problema-title">Dolor crónico y migrañas</h3><p class="problema-desc">Tensión muscular, dolores de cabeza y molestias digestivas que los medicamentos no resuelven de fondo.</p></div>
      <div class="problema-card fade-in"><span class="problema-icon">🧭</span><h3 class="problema-title">Desconexión y falta de propósito</h3><p class="problema-desc">Sensación de ir en piloto automático. Vacío, falta de motivación o dirección clara en tu vida.</p></div>
      <div class="problema-card fade-in"><span class="problema-icon">🌿</span><h3 class="problema-title">Buscas salud integral</h3><p class="problema-desc">Quieres algo más allá de la medicina convencional. Una visión que integre cuerpo, emoción y conciencia.</p></div>
    </div>
  </div>
</section>

<section class="transformacion">
  <div class="transformacion-inner fade-in">
    <span class="transformacion-label">El cambio real</span>
    <h2 class="transformacion-title">De dónde vienes<br>a dónde vas</h2>
    <div class="transformacion-grid">
      <div class="trans-col antes">
        <h3>Antes</h3>
        <div class="trans-item a"><span class="trans-dot"></span>Agotamiento y tensión constante</div>
        <div class="trans-item a"><span class="trans-dot"></span>Mente acelerada y ansiedad</div>
        <div class="trans-item a"><span class="trans-dot"></span>Dolor crónico sin solución</div>
        <div class="trans-item a"><span class="trans-dot"></span>Desconexión contigo mismo</div>
        <div class="trans-item a"><span class="trans-dot"></span>Falta de claridad y propósito</div>
      </div>
      <div class="trans-arrow">→</div>
      <div class="trans-col despues">
        <h3>Después</h3>
        <div class="trans-item d"><span class="trans-dot"></span>Energía renovada y vitalidad</div>
        <div class="trans-item d"><span class="trans-dot"></span>Calma mental y equilibrio emocional</div>
        <div class="trans-item d"><span class="trans-dot"></span>Cuerpo restaurado y sin bloqueos</div>
        <div class="trans-item d"><span class="trans-dot"></span>Reconexión profunda contigo</div>
        <div class="trans-item d"><span class="trans-dot"></span>Claridad y dirección en tu vida</div>
      </div>
    </div>
  </div>
</section>

<section class="ruah" id="ruah">
  <div class="ruah-inner">
    <div>
      <span class="ruah-label">La solución · Experiencia insignia</span>
      <h2 class="ruah-title">Descubre<br><em>RUAH</em></h2>
      <p class="ruah-meaning">רוּחַ — Del hebreo: aliento, espíritu, viento vital</p>
      <p class="ruah-body">RUAH es nuestra experiencia premium. Una sesión de 3 a 4 horas que integra diagnóstico, restauración corporal y reconexión emocional en un solo proceso diseñado para ti. No es una terapia suelta — es la puerta de entrada más poderosa a tu proceso de bienestar.</p>
      <div class="ruah-fases">
        <div class="ruah-fase"><h4>Fase I — Diagnóstico integral</h4><p>Iridología y evaluación bioenergética para mapear tu estado real.</p></div>
        <div class="ruah-fase"><h4>Fase II — Restauración corporal</h4><p>Protocolo de terapias físicas: masaje, hipertermia o biomagnetismo según tu diagnóstico.</p></div>
        <div class="ruah-fase"><h4>Fase III — Integración y cierre</h4><p>Acompañamiento emocional y plan personalizado de continuidad.</p></div>
      </div>
      <a href="https://wa.me/573144114302?text=Hola,%20quiero%20agendar%20la%20experiencia%20RUAH" class="btn-ruah" target="_blank">Agendar experiencia RUAH</a>
    </div>
    <div class="ruah-visual"><div class="ruah-circle"><span class="ruah-word">רוּחַ</span></div></div>
  </div>
</section>

<section class="ruta">
  <div class="ruta-inner">
    <div class="ruta-header fade-in">
      <span class="section-label">Tu camino en Zanatte</span>
      <h2 class="section-title">¿Cómo funciona<br>el <em>proceso?</em></h2>
      <p class="section-body">No existe una fórmula única. Pero sí un camino claro que hemos recorrido con cada persona que llega aquí.</p>
    </div>
    <div class="steps">
      <div class="step fade-in"><div class="step-dot"><span class="step-num">I</span></div><h3 class="step-title">Valoración</h3><p class="step-text">Escuchamos tu historia y evaluamos tu estado integral.</p></div>
      <div class="step fade-in"><div class="step-dot"><span class="step-num">II</span></div><h3 class="step-title">RUAH</h3><p class="step-text">La puerta de entrada a tu restauración profunda.</p></div>
      <div class="step fade-in"><div class="step-dot"><span class="step-num">III</span></div><h3 class="step-title">Plan personal</h3><p class="step-text">Protocolo de terapias adaptado a tu situación.</p></div>
      <div class="step fade-in"><div class="step-dot"><span class="step-num">IV</span></div><h3 class="step-title">Seguimiento</h3><p class="step-text">Ajustamos el proceso según tu evolución.</p></div>
      <div class="step fade-in"><div class="step-dot"><span class="step-num">V</span></div><h3 class="step-title">Comunidad</h3><p class="step-text">Retiros y programas para mantener tu bienestar.</p></div>
    </div>
  </div>
</section>

<section class="terapias" id="terapias">
  <div class="terapias-inner">
    <div class="terapias-header">
      <div class="fade-in"><span class="section-label">Herramientas terapéuticas</span><h2 class="section-title">Nuestras <em>terapias</em></h2></div>
      <div class="fade-in"><p class="section-body">Cada terapia es una herramienta. La combinación correcta es lo que genera resultados reales. Por eso siempre comenzamos con una valoración — no vendemos terapias sueltas, diseñamos protocolos.</p></div>
    </div>
    <div class="terapias-grid">
      <div class="terapia-card fade-in"><span class="terapia-icon">🔍</span><h3 class="terapia-name">Valoración Integral</h3><span class="terapia-duration">20 – 40 min · El punto de partida</span><p class="terapia-desc">Diagnóstico iridológico, quantum electromagnético y evaluación psicoemocional. Encontramos la causa real, no solo el síntoma.</p><a href="https://wa.me/573144114302" class="terapia-cta" target="_blank">Agendar →</a></div>
      <div class="terapia-card fade-in"><span class="terapia-icon">🔥</span><h3 class="terapia-name">Terapia de Hipertermia</h3><span class="terapia-duration">1 hora · Desintoxicación profunda</span><p class="terapia-desc">Simulación controlada de fiebre que potencia las defensas naturales, elimina toxinas y restaura el sistema inmunológico.</p><a href="https://wa.me/573144114302" class="terapia-cta" target="_blank">Agendar →</a></div>
      <div class="terapia-card fade-in"><span class="terapia-icon">✋</span><h3 class="terapia-name">Terapia de Hologramas</h3><span class="terapia-duration">10 – 20 min · Alivio inmediato</span><p class="terapia-desc">La técnica más eficaz para el manejo del dolor. Estimula puntos en mapas corporales con resultados visibles desde la primera sesión.</p><a href="https://wa.me/573144114302" class="terapia-cta" target="_blank">Agendar →</a></div>
      <div class="terapia-card fade-in"><span class="terapia-icon">🧲</span><h3 class="terapia-name">Biomagnetismo</h3><span class="terapia-duration">20 min · Equilibrio energético</span><p class="terapia-desc">Terapia con imanes que reequilibra el pH corporal, mejora la circulación y fortalece el sistema inmunitario de forma natural.</p><a href="https://wa.me/573144114302" class="terapia-cta" target="_blank">Agendar →</a></div>
      <div class="terapia-card fade-in"><span class="terapia-icon">💎</span><h3 class="terapia-name">Gemoterapia</h3><span class="terapia-duration">20 min · Restauración energética</span><p class="terapia-desc">Uso terapéutico de minerales y cristales para estimular la autocuración, reducir el estrés y restablecer el equilibrio emocional.</p><a href="https://wa.me/573144114302" class="terapia-cta" target="_blank">Agendar →</a></div>
      <div class="terapia-card fade-in"><span class="terapia-icon">🤲</span><h3 class="terapia-name">Masaje Reestructurativo</h3><span class="terapia-duration">30 – 40 min · Liberación celular</span><p class="terapia-desc">Libera memorias celulares en el tejido conjuntivo. Indicado para columna, cansancio crónico, depresión y recuperación física.</p><a href="https://wa.me/573144114302" class="terapia-cta" target="_blank">Agendar →</a></div>
    </div>
    <div class="terapias-nota fade-in">💡 Recuerda: la gente compra resultados, no terapias. Por eso siempre empezamos entendiendo tu situación antes de recomendar cualquier protocolo.</div>
  </div>
</section>

<section class="filosofia" id="filosofia">
  <div class="filosofia-grid">
    <div class="fade-in">
      <span class="section-label">Nuestra filosofía</span>
      <h2 class="section-title">Zanatte nació de una <em>pregunta</em></h2>
      <p class="section-body">Vivimos en una época con más información que nunca, pero con menos claridad, propósito y conexión humana. El cuerpo se cansa. La mente se dispersa. El espíritu se olvida.<br><br>Zanatte nace para crear espacios donde las personas puedan restaurarse integralmente — no desde la urgencia, sino desde la profundidad.</p>
    </div>
    <div class="fade-in">
      <blockquote class="filosofia-quote">"La enfermedad no es un error del cuerpo.<br>Es un mensaje del ser que pide<br><strong>ser escuchado.</strong>"</blockquote>
    </div>
  </div>
</section>

<section class="pilares">
  <div class="pilares-inner">
    <div class="pilares-header fade-in">
      <span class="section-label">Los fundamentos</span>
      <h2 class="section-title">Cuatro pilares de <em>bienestar</em></h2>
    </div>
    <div class="pilares-grid">
      <div class="pilar fade-in"><span class="pilar-num">01</span><h3 class="pilar-title">Desarrollo Humano</h3><p class="pilar-text">La restauración personal comienza cuando una persona decide conocerse profundamente. Trabajamos desde adentro hacia afuera.</p></div>
      <div class="pilar fade-in"><span class="pilar-num">02</span><h3 class="pilar-title">Espiritualidad</h3><p class="pilar-text">Reconectar con el propósito de vida y la dimensión espiritual del ser humano como fuente de sanación genuina.</p></div>
      <div class="pilar fade-in"><span class="pilar-num">03</span><h3 class="pilar-title">Educación</h3><p class="pilar-text">Enseñamos herramientas para continuar el proceso de bienestar de manera autónoma, más allá de las sesiones.</p></div>
      <div class="pilar fade-in"><span class="pilar-num">04</span><h3 class="pilar-title">Comunidad</h3><p class="pilar-text">Crecer acompañado acelera la restauración. Construimos espacios de encuentro y bienestar colectivo.</p></div>
    </div>
  </div>
</section>

<section class="testimonios">
  <div class="testimonios-inner">
    <div class="testimonios-header fade-in">
      <span class="section-label">Lo que dicen quienes han pasado por aquí</span>
      <h2 class="section-title">Experiencias <em>reales</em></h2>
    </div>
    <div class="testimonios-grid">
      <div class="testimonio-card fade-in">
        <p class="testimonio-text">Llevaba meses con migraña constante y nada funcionaba. Después de tres sesiones con Iván empecé a dormir mejor y el dolor disminuyó notablemente. Lo que hace va mucho más allá de lo que esperas.</p>
        <div class="testimonio-autor">
          <div class="testimonio-avatar">M</div>
          <div>
            <div class="testimonio-nombre">María C.</div>
            <div class="testimonio-meta">42 años · Docente</div>
            <span class="testimonio-tag">Migraña crónica</span>
          </div>
        </div>
      </div>
      <div class="testimonio-card fade-in">
        <p class="testimonio-text">Llegué con mucho estrés y una sensación de agotamiento total. La experiencia RUAH fue reveladora. No esperaba salir sintiéndome tan liviano y con tanta claridad mental.</p>
        <div class="testimonio-autor">
          <div class="testimonio-avatar">J</div>
          <div>
            <div class="testimonio-nombre">Julián R.</div>
            <div class="testimonio-meta">35 años · Empresario</div>
            <span class="testimonio-tag">Experiencia RUAH</span>
          </div>
        </div>
      </div>
      <div class="testimonio-card fade-in">
        <p class="testimonio-text">Lo que más me sorprendió fue el enfoque integral. No es solo una terapia — es un proceso completo que te mira como persona. Zanatte es diferente a todo lo que había probado.</p>
        <div class="testimonio-autor">
          <div class="testimonio-avatar">A</div>
          <div>
            <div class="testimonio-nombre">Andrea M.</div>
            <div class="testimonio-meta">38 años · Psicóloga</div>
            <span class="testimonio-tag">Programa de bienestar</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="fundador" id="ivan">
  <div class="fundador-grid">
    <div class="fundador-img fade-in">
      <img src="https://ivanruizholistico.com/images/ivan-ruiz-hero.jpg"
           onerror="this.style.background='#EDE6D8';this.removeAttribute('src');"
           alt="Iván Alejandro Ruiz - Terapeuta Holointegrativo" loading="lazy">
    </div>
    <div class="fade-in">
      <span class="fundador-label">El fundador</span>
      <h2 class="fundador-name">Iván Alejandro Ruiz</h2>
      <p class="fundador-role">Terapeuta Holointegrativo · Fundador de Zanatte</p>
      <div class="fundador-diferencial">
        <p><strong>Ingeniero Mecatrónico + Terapeuta Holointegrativo.</strong> Una combinación rarísima que le permite leer el cuerpo humano con la precisión de un ingeniero y la sensibilidad de un terapeuta. Muy pocos profesionales en el mundo integran estas dos dimensiones.</p>
      </div>
      <div class="fundador-chips">
        <span class="fundador-chip">Ingeniero Mecatrónico</span>
        <span class="fundador-chip">Terapeuta Holointegrativo</span>
        <span class="fundador-chip">Herbolario</span>
        <span class="fundador-chip">+5 años de experiencia</span>
      </div>
      <p class="fundador-body">Su camino comenzó desde una búsqueda personal profunda: entender por qué las personas se enferman y qué necesitan realmente para restaurarse. Durante años integró herramientas de la medicina natural, la psicoterapia emocional, la iridología y las terapias energéticas en un modelo propio que hoy es el corazón de Zanatte.</p>
      <blockquote class="fundador-quote">"Sana tu cuerpo. Sana tu mente.<br>Sana tu alma."</blockquote>
      <a href="https://www.ivanruizholistico.com" class="fundador-link" target="_blank">Conocer la historia completa de Iván →</a>
    </div>
  </div>
</section>

<section class="ubicacion" id="ubicacion">
  <div class="ubicacion-inner">
    <div class="ubicacion-info fade-in">
      <span class="section-label">Encuéntranos</span>
      <h2 class="section-title" style="font-size:clamp(28px,3vw,44px);">Visítanos en <em>Bogotá</em></h2>
      <div class="contacto-items">
        <div class="contacto-item"><div class="contacto-item-icon">📍</div><div class="contacto-item-text"><p>Dirección</p><span>Calle 1F # 18-19, Bogotá, Colombia</span></div></div>
        <div class="contacto-item"><div class="contacto-item-icon">💬</div><div class="contacto-item-text"><p>WhatsApp</p><a href="https://wa.me/573144114302" target="_blank">+57 314 411 4302</a></div></div>
        <div class="contacto-item"><div class="contacto-item-icon">🌐</div><div class="contacto-item-text"><p>Marca personal de Iván</p><a href="https://www.ivanruizholistico.com" target="_blank">ivanruizholistico.com</a></div></div>
        <div class="contacto-item"><div class="contacto-item-icon">🕐</div><div class="contacto-item-text"><p>Atención</p><span>Lunes a Sábado</span></div></div>
      </div>
    </div>
    <div class="ubicacion-map">
      <iframe src="https://maps.google.com/maps?q=Calle+1F+%2318-19,+Bogot%C3%A1,+Colombia&output=embed&z=16" allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Ubicación Zanatte Bogotá"></iframe>
    </div>
  </div>
</section>

<div class="redes">
  <a href="https://www.facebook.com/zanatte" target="_blank" class="red-link">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
    <span class="red-name">Facebook</span>
  </a>
  <a href="https://www.instagram.com/zanatte.co" target="_blank" class="red-link">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    <span class="red-name">Instagram</span>
  </a>
  <a href="https://www.tiktok.com/@zanatte.co" target="_blank" class="red-link">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
    <span class="red-name">TikTok</span>
  </a>
  <a href="https://www.ivanruizholistico.com" target="_blank" class="red-link">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
    <span class="red-name">Web Iván</span>
  </a>
</div>

<section class="cta-section">
  <div class="cta-inner fade-in">
    <h2 class="cta-title">Comienza tu camino<br>de <em>restauración</em></h2>
    <p class="cta-sub">Da el primer paso. Agenda tu valoración integral y descubre qué está detrás de tu desequilibrio. Zanatte te acompaña.</p>
    <div class="cta-btns">
      <a href="https://wa.me/573144114302?text=Hola,%20quiero%20agendar%20una%20valoración%20en%20Zanatte" class="btn-wa" target="_blank">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        Agendar por WhatsApp
      </a>
      <a href="https://www.ivanruizholistico.com" class="btn-ivan" target="_blank">Conocer a Iván →</a>
    </div>
  </div>
</section>

<footer>
  <div class="footer-brand">Żanatte</div>
  <span class="footer-copy">© 2026 Zanatte · Bogotá, Colombia · Todos los derechos reservados</span>
  <div class="footer-links">
    <a href="#ruah">RUAH</a>
    <a href="#terapias">Terapias</a>
    <a href="#filosofia">Filosofía</a>
    <a href="https://www.ivanruizholistico.com" target="_blank">Iván</a>
  </div>
</footer>
`;
