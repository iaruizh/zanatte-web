// Portado tal cual desde la version estatica ya verificada en produccion,
// para no arriesgar ningun cambio visual durante la migracion a Next.js.

export const RENACER_CSS = `
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

  nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 20px 60px; display: flex; align-items: center; justify-content: space-between; transition: all 0.4s ease; background: rgba(247,243,238,0.96); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(181,164,138,0.3); }
  .nav-logo { font-family: var(--font-serif); font-size: 26px; font-weight: 400; color: var(--green); letter-spacing: 1px; text-decoration: none; }
  .nav-logo .dot { color: var(--gold); }
  .nav-back { font-size: 11px; font-weight: 400; letter-spacing: 2px; text-transform: uppercase; color: var(--earth); text-decoration: none; }
  .nav-right { display: flex; gap: 20px; align-items: center; }
  .nav-cta { background: var(--green); color: white; padding: 10px 24px; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; border-radius: 2px; transition: background 0.3s; }
  .nav-cta:hover { background: #1B5E20; }

  .hero { min-height: 96vh; display: flex; align-items: center; justify-content: center; text-align: center; position: relative; overflow: hidden; padding: 140px 40px 80px; }
  .hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 60% 30%, rgba(200,160,48,0.10) 0%, transparent 65%); }
  .hero::after { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 15% 85%, rgba(46,125,50,0.07) 0%, transparent 60%); }
  .hero-content { position: relative; z-index: 1; max-width: 780px; }
  .hero-eyebrow { font-size: 11px; letter-spacing: 5px; text-transform: uppercase; color: var(--green); opacity: 0.9; margin-bottom: 32px; display: block; }
  .iv-icon { margin: 0 auto 28px; width: 84px; height: 118px; }
  .hero-title { font-family: var(--font-serif); font-size: clamp(52px, 8vw, 92px); font-weight: 300; color: var(--bark); line-height: 1; margin-bottom: 6px; }
  .hero-script { display: block; font-style: italic; color: var(--green); font-size: clamp(24px, 3vw, 34px); margin-top: 4px; }
  .hero-rule { width: 56px; height: 1px; background: var(--gold); margin: 32px auto; }
  .hero-sub { font-family: var(--font-serif); font-style: italic; font-size: clamp(19px, 2vw, 24px); font-weight: 300; color: var(--earth); line-height: 1.6; max-width: 620px; margin: 0 auto 48px; }
  .hero-btns { display: flex; gap: 20px; justify-content: center; flex-wrap: wrap; margin-bottom: 20px; }
  .btn-primary { background: var(--bark); color: var(--cream); padding: 16px 40px; font-size: 12px; letter-spacing: 2.5px; text-transform: uppercase; text-decoration: none; border-radius: 2px; transition: all 0.3s; }
  .btn-primary:hover { background: var(--green); transform: translateY(-2px); }
  .btn-outline { border: 1px solid var(--sand); color: var(--earth); padding: 16px 40px; font-size: 12px; letter-spacing: 2.5px; text-transform: uppercase; text-decoration: none; border-radius: 2px; transition: all 0.3s; }
  .btn-outline:hover { border-color: var(--earth); color: var(--bark); }
  .hero-fine { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--stone); }

  section { padding: 110px 60px; }
  .section-label { font-size: 10px; letter-spacing: 5px; text-transform: uppercase; color: var(--green); margin-bottom: 20px; display: block; }
  .section-title { font-family: var(--font-serif); font-size: clamp(34px, 4vw, 54px); font-weight: 300; line-height: 1.1; color: var(--bark); margin-bottom: 20px; }
  .section-title em { font-style: italic; color: var(--green); }

  .beneficios { background: var(--cream); }
  .beneficios-inner { max-width: 1100px; margin: 0 auto; }
  .beneficios-header { text-align: center; margin-bottom: 70px; }
  .beneficios-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; }
  .beneficio-card { background: var(--cream-deep); padding: 44px 30px; text-align: center; transition: background 0.3s; }
  .beneficio-card:hover { background: #fff; }
  .beneficio-icon { width: 44px; height: 44px; margin: 0 auto 20px; }
  .beneficio-title { font-family: var(--font-serif); font-size: 20px; font-weight: 400; color: var(--bark); }

  .sueros { background: var(--cream-deep); }
  .sueros-inner { max-width: 1100px; margin: 0 auto; }
  .sueros-header { text-align: center; margin-bottom: 70px; }
  .sueros-header .hero-sub { margin: 0 auto; }
  .sueros-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2px; }
  .suero-card { background: var(--cream); padding: 44px 32px; transition: background 0.3s; }
  .suero-card:hover { background: #fff; }
  .suero-card.wide { grid-column: span 3; }
  .suero-icon { width: 40px; height: 40px; margin-bottom: 20px; }
  .suero-name { font-family: var(--font-serif); font-size: 24px; font-weight: 400; color: var(--bark); margin-bottom: 12px; }
  .suero-desc { font-size: 14px; line-height: 1.8; color: var(--earth); font-weight: 300; margin-bottom: 14px; }
  .suero-tag { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--stone); }

  .proceso { background: var(--cream); }
  .proceso-inner { max-width: 760px; margin: 0 auto; }
  .proceso-header { text-align: center; margin-bottom: 70px; }
  .steps-list { display: flex; flex-direction: column; }
  .step-row { display: flex; gap: 28px; padding: 24px 0; border-top: 1px solid rgba(181,164,138,0.25); align-items: flex-start; }
  .step-row:first-child { border-top: none; }
  .step-n { font-family: var(--font-serif); font-style: italic; font-size: 26px; color: var(--gold); width: 40px; flex-shrink: 0; }
  .step-title { font-family: var(--font-serif); font-size: 21px; font-weight: 400; color: var(--bark); margin-bottom: 6px; }
  .step-text { font-size: 15px; color: var(--earth); line-height: 1.7; font-weight: 300; }

  .why-block { margin-top: 70px; padding-top: 50px; border-top: 1px solid rgba(181,164,138,0.3); }
  .why-label { text-align: center; font-size: 10px; letter-spacing: 5px; text-transform: uppercase; color: var(--green); margin-bottom: 30px; display: block; }
  .why-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px 30px; }
  .why-item { display: flex; gap: 12px; align-items: baseline; font-size: 15px; color: var(--bark); font-weight: 300; }
  .why-item::before { content: '✓'; font-family: var(--font-serif); font-style: italic; color: var(--green); }

  .cta-section { background: var(--ruah-dark); padding: 130px 60px; text-align: center; position: relative; overflow: hidden; }
  .cta-section::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse at 70% 50%, rgba(160,104,64,0.12) 0%, transparent 60%); }
  .cta-inner { max-width: 720px; margin: 0 auto; position: relative; z-index: 1; }
  .cta-label { font-size: 10px; letter-spacing: 5px; text-transform: uppercase; color: var(--ruah-copper); margin-bottom: 28px; display: block; }
  .cta-title { font-family: var(--font-serif); font-size: clamp(38px, 5vw, 64px); font-weight: 300; color: var(--cream); margin-bottom: 24px; line-height: 1.1; }
  .cta-title em { font-style: italic; color: var(--ruah-copper); }
  .cta-sub { font-size: 15px; color: rgba(247,243,238,0.6); line-height: 1.8; margin-bottom: 48px; max-width: 460px; margin-left: auto; margin-right: auto; }
  .btn-wa { background: #25D366; color: white; padding: 18px 44px; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; text-decoration: none; border-radius: 2px; transition: all 0.3s; display: inline-flex; align-items: center; gap: 10px; }
  .btn-wa:hover { background: #1da851; transform: translateY(-2px); }
  .cta-numbers { margin-top: 32px; font-size: 12px; letter-spacing: 1px; color: rgba(247,243,238,0.45); }

  footer { background: #0D0A08; padding: 36px 60px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; }
  .footer-brand { font-family: var(--font-serif); font-size: 20px; color: var(--green); font-weight: 400; }
  .footer-copy { font-size: 12px; color: rgba(247,243,238,0.2); letter-spacing: 1px; }
  .footer-links a { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: rgba(247,243,238,0.4); text-decoration: none; }

  .fade-in { opacity: 0; transform: translateY(30px); transition: opacity 0.8s ease, transform 0.8s ease; }
  .fade-in.visible { opacity: 1; transform: translateY(0); }

  @media (max-width: 900px) {
    nav { padding: 16px 24px; }
    section { padding: 80px 24px; }
    .beneficios-grid { grid-template-columns: 1fr 1fr; }
    .sueros-grid { grid-template-columns: 1fr; }
    .suero-card.wide { grid-column: span 1; }
    .why-grid { grid-template-columns: 1fr; }
    footer { flex-direction: column; text-align: center; }
    .cta-section { padding: 90px 24px; }
  }
`;

export const RENACER_BODY = `
<nav>
  <a href="/" class="nav-logo">Ż<span class="dot">anatte</span></a>
  <div class="nav-right">
    <a href="/" class="nav-back">← Zanatte</a>
    <a href="https://wa.me/573023333830?text=Hola%2C%20quiero%20reservar%20mi%20cupo%20para%20Renacer%20por%20Dentro%20%28Sueroterapia%20Zanatte%29." class="nav-cta" target="_blank">Reservar</a>
  </div>
</nav>

<section class="hero">
  <div class="hero-content">
    <span class="hero-eyebrow">Bogotá · Jornada especial de sueroterapia</span>
    <svg class="iv-icon" viewBox="0 0 84 118" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="42" y1="2" x2="42" y2="16" stroke="#B5A48A" stroke-width="2"/>
      <path d="M19 16 H65 a6 6 0 0 1 6 6 V64 a29 29 0 0 1 -58 0 V22 a6 6 0 0 1 6 -6 Z" stroke="#7A6A52" stroke-width="2"/>
      <path d="M19 54 H65 V64 a29 29 0 0 1 -46 0 Z" fill="#E8D5A8" opacity="0.6"/>
      <line x1="42" y1="93" x2="42" y2="106" stroke="#7A6A52" stroke-width="2"/>
      <path d="M42 106 C35 113 35 120 42 126 C49 120 49 113 42 106 Z" fill="#2E7D32" opacity="0.75" transform="translate(0,-14)"/>
    </svg>
    <h1 class="hero-title">Renacer<span class="hero-script">por dentro</span></h1>
    <div class="hero-rule"></div>
    <p class="hero-sub">No es solo un suero. Es un espacio para que tu cuerpo, tu energía y tu manera de sentirte contigo mismo vuelvan a empezar.</p>
    <div class="hero-btns">
      <a href="https://wa.me/573023333830?text=Hola%2C%20quiero%20reservar%20mi%20cupo%20para%20Renacer%20por%20Dentro%20%28Sueroterapia%20Zanatte%29." class="btn-primary" target="_blank">Reservar mi cupo</a>
      <a href="#sueros" class="btn-outline">Ver los sueros</a>
    </div>
    <span class="hero-fine">Cupos limitados · Respuesta inmediata por WhatsApp</span>
  </div>
</section>

<section class="beneficios">
  <div class="beneficios-inner">
    <div class="beneficios-header fade-in">
      <span class="section-label">Lo que tu cuerpo recibe</span>
      <h2 class="section-title">Un <em>reset</em> para tu cuerpo, tu energía<br>y tu manera de sentirte contigo mismo.</h2>
    </div>
    <div class="beneficios-grid">
      <div class="beneficio-card fade-in">
        <svg class="beneficio-icon" viewBox="0 0 48 48"><path d="M24 4 L40 10 V22 C40 32 33 40 24 44 C15 40 8 32 8 22 V10 Z" fill="none" stroke="#7A6A52" stroke-width="2"/><path d="M24 18 C20 22 20 27 24 31 C28 27 28 22 24 18Z" fill="#2E7D32" opacity="0.7"/></svg>
        <div class="beneficio-title">Sistema inmune más fuerte</div>
      </div>
      <div class="beneficio-card fade-in">
        <svg class="beneficio-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="9" fill="none" stroke="#7A6A52" stroke-width="2"/><g stroke="#C8A030" stroke-width="2"><line x1="24" y1="2" x2="24" y2="10"/><line x1="24" y1="38" x2="24" y2="46"/><line x1="2" y1="24" x2="10" y2="24"/><line x1="38" y1="24" x2="46" y2="24"/><line x1="8" y1="8" x2="14" y2="14"/><line x1="34" y1="34" x2="40" y2="40"/><line x1="8" y1="40" x2="14" y2="34"/><line x1="34" y1="14" x2="40" y2="8"/></g></svg>
        <div class="beneficio-title">Más energía y vitalidad</div>
      </div>
      <div class="beneficio-card fade-in">
        <svg class="beneficio-icon" viewBox="0 0 48 48"><path d="M24 4 C14 18 8 26 8 32 a16 16 0 0 0 32 0 C40 26 34 18 24 4Z" fill="#E8D5A8" opacity="0.6" stroke="#7A6A52" stroke-width="2"/></svg>
        <div class="beneficio-title">Piel más radiante</div>
      </div>
      <div class="beneficio-card fade-in">
        <svg class="beneficio-icon" viewBox="0 0 48 48"><path d="M24 24 m0 -14 a14 14 0 1 1 -9.9 23.9 a9 9 0 1 1 6.4 -15.3 a5 5 0 1 1 3.5 8.5" fill="none" stroke="#2E7D32" stroke-width="2" stroke-linecap="round"/></svg>
        <div class="beneficio-title">Desintoxicación celular</div>
      </div>
    </div>
  </div>
</section>

<section class="sueros" id="sueros">
  <div class="sueros-inner">
    <div class="sueros-header fade-in">
      <span class="section-label">Nuestros sueros</span>
      <h2 class="section-title">Elige el que <em>tu cuerpo</em><br>te está pidiendo.</h2>
    </div>
    <div class="sueros-grid">
      <div class="suero-card fade-in">
        <svg class="suero-icon" viewBox="0 0 48 48"><circle cx="24" cy="24" r="9" fill="none" stroke="#7A6A52" stroke-width="2"/><g stroke="#C8A030" stroke-width="2"><line x1="24" y1="2" x2="24" y2="10"/><line x1="24" y1="38" x2="24" y2="46"/><line x1="2" y1="24" x2="10" y2="24"/><line x1="38" y1="24" x2="46" y2="24"/><line x1="8" y1="8" x2="14" y2="14"/><line x1="34" y1="34" x2="40" y2="40"/><line x1="8" y1="40" x2="14" y2="34"/><line x1="34" y1="14" x2="40" y2="8"/></g></svg>
        <div class="suero-name">Revitalizante</div>
        <p class="suero-desc">Vitaminas y antioxidantes que devuelven la energía del día a día.</p>
        <span class="suero-tag">Cansancio acumulado</span>
      </div>
      <div class="suero-card fade-in">
        <svg class="suero-icon" viewBox="0 0 48 48"><path d="M24 4 L40 10 V22 C40 32 33 40 24 44 C15 40 8 32 8 22 V10 Z" fill="none" stroke="#7A6A52" stroke-width="2"/><path d="M24 18 C20 22 20 27 24 31 C28 27 28 22 24 18Z" fill="#2E7D32" opacity="0.7"/></svg>
        <div class="suero-name">Inmunológico</div>
        <p class="suero-desc">Fortalece tus defensas frente a los males de temporada.</p>
        <span class="suero-tag">Prevención</span>
      </div>
      <div class="suero-card fade-in">
        <svg class="suero-icon" viewBox="0 0 48 48"><path d="M24 24 m0 -14 a14 14 0 1 1 -9.9 23.9 a9 9 0 1 1 6.4 -15.3 a5 5 0 1 1 3.5 8.5" fill="none" stroke="#2E7D32" stroke-width="2" stroke-linecap="round"/></svg>
        <div class="suero-name">Detox</div>
        <p class="suero-desc">Elimina toxinas, mejora la digestión y purifica el organismo.</p>
        <span class="suero-tag">Limpieza interna</span>
      </div>
      <div class="suero-card fade-in">
        <svg class="suero-icon" viewBox="0 0 48 48"><path d="M20 8 C12 20 7 27 7 32 a14 14 0 0 0 28 0 c0 -5 -5 -12 -13 -24Z" fill="#E8D5A8" opacity="0.6" stroke="#7A6A52" stroke-width="2"/><path d="M36 8 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2Z" fill="#C8A030"/></svg>
        <div class="suero-name">Antiaging</div>
        <p class="suero-desc">Retrasa el envejecimiento celular y mejora la luminosidad de la piel.</p>
        <span class="suero-tag">Piel y vitalidad</span>
      </div>
      <div class="suero-card fade-in">
        <svg class="suero-icon" viewBox="0 0 48 48"><path d="M24 40 C10 30 6 22 10 15 a9 9 0 0 1 14 -2 a9 9 0 0 1 14 2 c4 7 0 15 -14 25Z" fill="none" stroke="#7A6A52" stroke-width="2"/></svg>
        <div class="suero-name">Recuperación</div>
        <p class="suero-desc">Repone minerales, rehidrata y reduce la inflamación post-esfuerzo.</p>
        <span class="suero-tag">Después del ejercicio</span>
      </div>
    </div>
  </div>
</section>

<section class="proceso">
  <div class="proceso-inner">
    <div class="proceso-header fade-in">
      <span class="section-label">Cómo vivirás tu jornada</span>
      <h2 class="section-title">Cuatro pasos,<br><em>una sola sesión.</em></h2>
    </div>
    <div class="steps-list fade-in">
      <div class="step-row">
        <span class="step-n">01</span>
        <div><div class="step-title">Recepción y valoración</div><p class="step-text">Conversamos contigo para entender qué necesita tu cuerpo hoy.</p></div>
      </div>
      <div class="step-row">
        <span class="step-n">02</span>
        <div><div class="step-title">Suero personalizado</div><p class="step-text">Elegimos la fórmula ideal según tu objetivo: energía, defensas, piel o recuperación.</p></div>
      </div>
      <div class="step-row">
        <span class="step-n">03</span>
        <div><div class="step-title">Aplicación en ambiente relajado</div><p class="step-text">Procedimiento cómodo, seguro y supervisado por profesionales certificados.</p></div>
      </div>
      <div class="step-row">
        <span class="step-n">04</span>
        <div><div class="step-title">Recarga y bienestar inmediato</div><p class="step-text">Sales sintiendo la diferencia: más ligereza, más energía, más tú.</p></div>
      </div>
    </div>

    <div class="why-block fade-in">
      <span class="why-label">Por qué unirte</span>
      <div class="why-grid">
        <div class="why-item">Profesionales certificados</div>
        <div class="why-item">Productos seguros y de calidad</div>
        <div class="why-item">Ambiente cómodo y privado</div>
        <div class="why-item">Resultados desde el día uno</div>
      </div>
    </div>
  </div>
</section>

<section class="cta-section">
  <div class="cta-inner fade-in">
    <span class="cta-label">Cupos limitados</span>
    <h2 class="cta-title">Tu cuerpo ya te está<br><em>pidiendo este espacio.</em></h2>
    <p class="cta-sub">Escríbenos por WhatsApp y te confirmamos tu cupo para Renacer por Dentro, la jornada de sueroterapia de Zanatte.</p>
    <a href="https://wa.me/573023333830?text=Hola%2C%20quiero%20reservar%20mi%20cupo%20para%20Renacer%20por%20Dentro%20%28Sueroterapia%20Zanatte%29." class="btn-wa" target="_blank">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
      Reservar mi cupo
    </a>
    <div class="cta-numbers">302 333 3830 · 310 476 2206</div>
  </div>
</section>

<footer>
  <div class="footer-brand">Żanatte</div>
  <span class="footer-copy">© 2026 Zanatte · Renacer por Dentro</span>
  <div class="footer-links"><a href="/">Volver a Zanatte.com.co</a></div>
</footer>
`;
