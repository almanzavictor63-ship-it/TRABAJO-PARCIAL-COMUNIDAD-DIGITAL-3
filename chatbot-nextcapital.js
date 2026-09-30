/* =============================================
   NextCapital — Chatbot Widget v2
   Asesor virtual "Capita" con KB enriquecida
   ============================================= */

(function () {

  /* ═══════════════════════════════════════════
     BASE DE CONOCIMIENTO — RESPUESTAS PROFUNDAS
     ═══════════════════════════════════════════ */
  const KB = {

    saludo: [
      '¡Hola! 👋 Soy <strong>Capita</strong>, el asesor virtual de <strong>NextCapital</strong>. Estoy aquí para ayudarte a entender cómo podemos financiar tu negocio de forma rápida, justa y sin burocracia. ¿Qué te gustaría saber?',
      '¡Bienvenido a NextCapital! 🚀 Soy <strong>Capita</strong>. Ayudo a micro y pequeños empresarios del Perú a acceder a capital de trabajo sin historial crediticio ni garantías. ¿Tienes alguna pregunta sobre el proceso, los requisitos o los montos disponibles?'
    ],

    faq: [
      /* ── REQUISITOS ── */
      {
        tags: ['requisito','necesito','pedir','solicitar','documentos','garantia','garantías','aval','que pide','que necesita'],
        respuesta: `
          <strong>📋 ¿Qué necesitas para aplicar?</strong><br><br>
          En NextCapital <em>no</em> pedimos lo que pide un banco tradicional. Lo único que evaluamos es tu <strong>flujo de ventas digitales</strong>:<br><br>
          ✅ Cobros por <strong>Yape, Plin, POS o código QR</strong> de los últimos 15–30 días<br>
          ✅ Tener un negocio activo (no importa si es informal)<br>
          ✅ Número de celular peruano<br>
          ✅ DNI del titular del negocio<br><br>
          ❌ <strong>No pedimos:</strong> garantías hipotecarias, avales, facturas a empresas grandes, ni revisamos tu historial en Infocorp o SBS.<br><br>
          Todo el proceso es <strong>100% digital</strong>, sin visitas a oficinas ni carpetas físicas.
        `
      },
      /* ── MONTOS ── */
      {
        tags: ['monto','cuánto','cuanto','préstamo','prestamo','capital','máximo','minimo','limite','línea','linea'],
        respuesta: `
          <strong>💰 ¿Cuánto puedo solicitar?</strong><br><br>
          Los rangos disponibles son:<br><br>
          🇵🇪 <strong>En Soles:</strong> desde <strong>S/ 3,000</strong> hasta <strong>S/ 150,000</strong><br>
          🇺🇸 <strong>En Dólares:</strong> desde <strong>US$ 1,000</strong> hasta <strong>US$ 40,000</strong><br><br>
          El monto que recibes <em>no lo decides tú ni nosotros de forma arbitraria</em>: lo calcula nuestra IA analizando tu volumen real de ventas. Así garantizamos que el crédito sea proporcional a tu capacidad de pago y no te sobreendeudes.<br><br>
          Además, conforme demuestras <strong>buen comportamiento de pago</strong>, tu línea crece automáticamente sin que tengas que solicitarlo. Es nuestra <strong>Línea de Crédito Revolvente</strong>: úsala, págala y vuelve a disponer de ella.
        `
      },
      /* ── TASA / COSTO ── */
      {
        tags: ['tasa','interés','interes','costo','cobran','precio','comision','cuánto me cobran','cuanto cuesta','tea','tcea'],
        respuesta: `
          <strong>📊 ¿Cuánto cuesta el financiamiento?</strong><br><br>
          NextCapital usa <strong>precios dinámicos y personalizados</strong>: no existe una tasa única para todos. Tu tasa se calcula individualmente según:<br><br>
          • <strong>Volumen y estabilidad</strong> de tus ventas digitales<br>
          • <strong>Antigüedad</strong> de tu actividad comercial<br>
          • <strong>Comportamiento de pago</strong> en créditos anteriores con nosotros<br>
          • <strong>Tendencia de crecimiento</strong> de tu negocio<br><br>
          La tasa mensual parte desde <strong>1.05% mensual</strong>. Cuanto mayor y más estable sea tu flujo de ventas, mejores condiciones obtienes. No existe penalidad por prepago anticipado. La TCEA exacta se muestra antes de que aceptes cualquier oferta.
        `
      },
      /* ── TIEMPO / APROBACIÓN ── */
      {
        tags: ['tiempo','rapido','rápido','demora','cuando','cuándo','aprobacion','aprobación','minutos','horas','dias','cuánto tarda','proceso'],
        respuesta: `
          <strong>⚡ ¿Cuánto tarda el proceso?</strong><br><br>
          Este es uno de nuestros mayores diferenciales:<br><br>
          🔍 <strong>Evaluación:</strong> menos de 5 minutos (nuestra IA analiza tus ventas automáticamente)<br>
          ✅ <strong>Aprobación:</strong> recibes una oferta personalizada en el mismo día<br>
          💸 <strong>Desembolso:</strong> automático en tu Yape, Plin o cuenta bancaria, generalmente en menos de 24h tras aceptar la oferta<br><br>
          <em>Comparado con un banco (días o semanas) o una microfinanciera (24–48h con trámites presenciales), el proceso completo con NextCapital es exponencialmente más rápido porque no hay análisis de campo ni papelería que revisar.</em>
        `
      },
      /* ── CUOTAS / PAGO ── */
      {
        tags: ['pago','cuota','cuotas','pagar','cobro','flexible','adaptativo','cuánto pago','amortizacion','cuántas cuotas'],
        respuesta: `
          <strong>🔄 ¿Cómo funciona el pago?</strong><br><br>
          Usamos un sistema único llamado <strong>Recaudación Adaptativa Inteligente</strong>:<br><br>
          📈 <strong>Día de altas ventas:</strong> el sistema descuenta una cuota mayor, avanzando más rápido en tu deuda<br>
          📉 <strong>Día de bajas ventas:</strong> la cuota se reduce o se pausa automáticamente para no asfixiar tu caja<br><br>
          Esto significa que <em>nunca entrarás en mora por un mal día</em>. El sistema entiende la estacionalidad de tu negocio.<br><br>
          Los plazos disponibles son de <strong>3, 6, 9 y 12 cuotas</strong> (mensuales o adaptativas según tu producto). No hay penalidad por pagar antes de tiempo. El cargo siempre es transparente: lo ves antes de firmar.
        `
      },
      /* ── TECNOLOGÍA / IA ── */
      {
        tags: ['ia','inteligencia artificial','algoritmo','scoring','como evaluan','cómo evalúan','motor','engine','lstm','series temporales','yape','plin','pos','qr','digital','ventas','transacciones'],
        respuesta: `
          <strong>🤖 ¿Cómo nos evalúas sin Infocorp?</strong><br><br>
          Usamos nuestro propio motor de riesgo: el <strong>NextCapital AI-ST Risk Engine</strong>, basado en Inteligencia Artificial y redes neurales de series temporales (LSTM).<br><br>
          En lugar de revisar deudas pasadas, analizamos:<br><br>
          📱 Tus <strong>cobros diarios</strong> por Yape, Plin, POS y QR (últimos 15–30 días)<br>
          📈 La <strong>curva de liquidez futura</strong> proyectada de tu negocio<br>
          🔁 La <strong>regularidad y estabilidad</strong> de tus ventas<br>
          🌱 El <strong>potencial de crecimiento</strong> según tendencia<br><br>
          Además, nuestro <strong>NextCapital Dynamic Risk Engine</strong> recalibra tu perfil cada 15–30 días: si tu negocio crece, mejoran tus condiciones automáticamente; si detecta una caída, te envía alertas tempranas para que actúes antes de tener problemas.
        `
      },
      /* ── HISTORIAL / INFOCORP ── */
      {
        tags: ['historial','credito','crédito','crediticio','infocorp','buro','central','riesgo','sbs','negativo','deuda','deudas'],
        respuesta: `
          <strong>📋 ¿Importa si estoy en Infocorp?</strong><br><br>
          <strong>No consultamos Infocorp ni centrales de riesgo estáticas.</strong> Nuestra evaluación se basa exclusivamente en lo que tu negocio genera hoy, no en lo que deben de años atrás.<br><br>
          De hecho, construimos tu propio <strong>Historial Crediticio NextCapital</strong>: un registro digital, portable y verificable que refleja tu comportamiento financiero real.<br><br>
          🎯 <strong>¿Qué significa esto para ti?</strong><br>
          • Puedes acceder a financiamiento aunque tengas deudas pasadas en el sistema<br>
          • Cada pago que haces construye tu reputación financiera con nosotros<br>
          • Ese historial puede servir a futuro ante otras entidades financieras<br><br>
          <em>Estamos construyendo el sistema crediticio que el microempresario peruano merecía desde hace años.</em>
        `
      },
      /* ── INVERSIONISTAS ── */
      {
        tags: ['inversionista','inversor','invertir','inversión','inversion','rendimiento','retorno','p2p','crowdlending','ganar','rentabilidad'],
        respuesta: `
          <strong>📈 ¿Cómo funciona para inversionistas?</strong><br><br>
          NextCapital opera también como <strong>plataforma de crowdlending P2P</strong>: personas naturales e inversionistas particulares pueden financiar directamente solicitudes de capital de trabajo de MYPEs evaluadas por nosotros.<br><br>
          🏆 <strong>Ventajas para el inversionista:</strong><br>
          • <strong>Retornos superiores</strong> a los depósitos a plazo de la banca tradicional<br>
          • Diversificación: puedes distribuir tu inversión en múltiples empresas<br>
          • <strong>Trazabilidad total:</strong> visibilidad del destino de tus fondos en tiempo real<br>
          • Evaluación de riesgo continua mediante nuestra IA<br>
          • Proceso 100% digital: sin trámites presenciales<br><br>
          Si te interesa invertir, completa el formulario de esta página y selecciona la opción de "Inversionista". Nuestro equipo te contactará con información detallada.
        `
      },
      /* ── SEGURIDAD / REGULACIÓN ── */
      {
        tags: ['seguro','confiable','confianza','regulado','legal','sfc','smv','sbs','fraude','proteccion','datos','empresa'],
        respuesta: `
          <strong>🔒 ¿NextCapital es una empresa segura y regulada?</strong><br><br>
          Sí. Operamos como <strong>NC Finance SAC</strong>, empresa debidamente constituida y registrada en Perú bajo el marco regulatorio para plataformas fintech.<br><br>
          🛡️ <strong>Tus datos están protegidos por:</strong><br>
          • Ley N° 29733 de Protección de Datos Personales del Perú<br>
          • Encriptación SSL de extremo a extremo en todas las transacciones<br>
          • Infraestructura en nube con certificaciones de seguridad internacional<br><br>
          💡 <strong>Transparencia total:</strong> antes de aceptar cualquier oferta, ves todos los costos (tasa, TCEA, monto de cuotas) sin letras pequeñas. No hay cargos ocultos.
        `
      },
      /* ── COPILOTO / APP ── */
      {
        tags: ['copiloto','app','aplicacion','aplicación','móvil','movil','herramienta','gestión','gestion','control','gastos','proyección'],
        respuesta: `
          <strong>📱 ¿Qué más ofrece la plataforma?</strong><br><br>
          Además del crédito, nuestra app incluye el <strong>Copiloto Financiero NextCapital</strong>: un asistente de gestión diseñado específicamente para microempresarios que no tienen contador.<br><br>
          🛠️ <strong>Incluye:</strong><br>
          • <strong>Registro de ventas</strong> diarias con categorización automática<br>
          • <strong>Control de gastos</strong> y proyección de flujo de caja<br>
          • <strong>Alertas educativas</strong>: te avisa cuando tu caja está baja o cuando tienes oportunidad de solicitar más capital<br>
          • <strong>Dashboard de salud financiera</strong> de tu negocio en tiempo real<br><br>
          Todo en tu celular, sin instalar nada complejo. La app está diseñada para que cualquier comerciante, sin importar su nivel técnico, pueda entenderla en minutos.
        `
      },
      /* ── PARA QUIÉN ES ── */
      {
        tags: ['mype','negocio','empresa','quien','quién','para quien','para quién','bodega','restaurante','tienda','formal','informal','ruc','sin ruc'],
        respuesta: `
          <strong>🏪 ¿Para qué tipo de negocios es NextCapital?</strong><br><br>
          Estamos diseñados especialmente para <strong>micro y pequeñas empresas (MYPE) en Perú</strong> que:<br><br>
          ✅ Venden por medios digitales (Yape, Plin, POS, QR)<br>
          ✅ Tienen al menos 3 meses de actividad comercial<br>
          ✅ Necesitan capital para inventario, proveedores o cubrir baches de caja<br><br>
          <strong>¿Eres informal o no tienes RUC?</strong> No es impedimento. Evaluamos la actividad económica real, no el estado tributario.<br><br>
          📌 <strong>Sectores más comunes que atendemos:</strong><br>
          Bodegas, ferreterías, restaurantes y cafeterías, tiendas de ropa, negocios de delivery, farmacias, talleres mecánicos, servicios de belleza, e-commerce local.
        `
      },
      /* ── REVOLVENTE ── */
      {
        tags: ['revolvente','renovar','volver','siguiente','otra vez','nuevo credito','nuevo crédito','segundo','tercero'],
        respuesta: `
          <strong>♻️ ¿Puedo volver a pedir más capital?</strong><br><br>
          ¡Sí! Y esta es una de las mayores ventajas de NextCapital frente a otras opciones.<br><br>
          Contamos con <strong>Línea de Crédito Revolvente</strong>: una vez que pagas tu primer crédito (o avanzas un porcentaje significativo), tu línea se renueva automáticamente.<br><br>
          🎯 <strong>¿Cómo mejora con el tiempo?</strong><br>
          • Cada 15–30 días nuestro motor recalibra tu perfil con datos frescos de ventas<br>
          • Si tu negocio creció, obtienes <strong>mayor monto disponible</strong> y <strong>mejor tasa</strong> automáticamente<br>
          • Acumulas tu historial de pagos NextCapital, que actúa como un score crediticio propio<br><br>
          En la práctica, los clientes con buen historial con nosotros terminan accediendo a montos 3–5 veces mayores que su primer crédito en 12–18 meses.
        `
      },
      /* ── COMPARACIÓN CON BANCO ── */
      {
        tags: ['banco','mi banco','bcp','bbva','interbank','financiera','caja','comparacion','diferencia','vs','mejor','alternativa'],
        respuesta: `
          <strong>🆚 ¿En qué se diferencia NextCapital de un banco o financiera?</strong><br><br>
          <strong>Banca tradicional / microfinanciera:</strong><br>
          ❌ Requiere historial crediticio bancario y avales<br>
          ❌ Proceso: días o semanas con trámites presenciales<br>
          ❌ Cuotas fijas rígidas que no respetan tu estacionalidad<br>
          ❌ Público: solo negocios formalizados y bancarizados<br><br>
          <strong>NextCapital:</strong><br>
          ✅ Solo necesita tu flujo de ventas digitales (Yape/Plin/POS/QR)<br>
          ✅ Evaluación en menos de 5 minutos con IA<br>
          ✅ Cuotas adaptativas según tus ventas diarias<br>
          ✅ Accesible para MYPEs informales o sin historial<br><br>
          <em>No somos un banco. Somos una alternativa diseñada específicamente para el microempresario peruano que el sistema financiero tradicional ha ignorado durante décadas.</em>
        `
      },
      /* ── GRACIAS / CIERRE ── */
      {
        tags: ['gracias','ok','listo','entendido','perfecto','bien','genial','excelente','me ayudaste'],
        respuesta: `
          ¡Con mucho gusto! 😊 Para eso estamos.<br><br>
          Si estás listo para dar el siguiente paso, puedes <strong>precalificar ahora</strong> desde el formulario de esta misma página — el proceso toma menos de 2 minutos y no afecta ningún historial crediticio.<br><br>
          Si tienes más preguntas, aquí estaré. ¡Éxito con tu negocio! 🚀
        `
      },
      /* ── PLAZO ── */
      {
        tags: ['plazo','meses','cuantos meses','cuántos meses','12 meses','6 meses','duración','duracion'],
        respuesta: `
          <strong>📅 ¿A qué plazo puedo financiarme?</strong><br><br>
          Ofrecemos plazos de <strong>3, 6, 9 y 12 meses</strong>, según el producto y monto que solicites.<br><br>
          💡 <strong>Nuestra recomendación:</strong> para capital de trabajo operativo (pagar proveedores, reponer inventario) los plazos cortos de 3–6 meses suelen ser los más eficientes. Para inversiones en crecimiento del negocio, plazos de 9–12 meses dan más margen.<br><br>
          Recuerda que las cuotas se adaptan a tus ventas diarias gracias a nuestra <strong>Recaudación Adaptativa</strong>, así que el impacto en tu caja siempre es proporcional a lo que generas.
        `
      }
    ],

    quickReplies: [
      { label: '¿Qué necesito para aplicar?', msg: 'requisitos' },
      { label: '¿Cuánto puedo pedir?', msg: 'cuánto puedo solicitar' },
      { label: '¿Cómo son las cuotas?', msg: 'cómo funciona el pago' },
      { label: '¿Cuánto tarda la aprobación?', msg: 'cuánto tarda el proceso' }
    ],

    fallback: [
      'Entiendo tu pregunta, pero necesito un poco más de detalle para responderte bien. 🤔 Puedo ayudarte con información sobre <strong>requisitos, montos, tasas, plazos, proceso de aprobación, cuotas adaptativas, o comparación con bancos</strong>. ¿Cuál de estos temas te interesa?',
      'Para esa consulta específica, lo mejor es que uno de nuestros asesores humanos te atienda. 💬 Puedes <strong>precalificar en el formulario</strong> de esta página y en menos de 24h te llamamos para resolver todas tus dudas personalizadas.',
      '¡Buena pregunta! Aún estoy aprendiendo algunas cosas. 😅 Lo que sí puedo decirte es que <strong>NextCapital evalúa tu negocio por lo que genera hoy</strong>, no por su historial. ¿Te cuento más sobre el proceso o los requisitos?'
    ]
  };

  let fallbackIdx = 0;

  function normalize(t) {
    return t.toLowerCase()
      .normalize('NFD').replace(/[̀-ͯ]/g, '')
      .replace(/[^a-z0-9\s]/g, ' ');
  }

  function getBotResponse(text) {
    const msg = normalize(text);
    if (/^(hola|buenas|buenos|hey|hi|inicio|empezar|start|que tal|buenas tardes|buenas noches)/.test(msg)) {
      return KB.saludo[Math.floor(Math.random() * KB.saludo.length)];
    }
    for (const item of KB.faq) {
      if (item.tags.some(tag => msg.includes(normalize(tag)))) {
        return item.respuesta;
      }
    }
    const resp = KB.fallback[fallbackIdx % KB.fallback.length];
    fallbackIdx++;
    return resp;
  }

  /* ═══════════════════════════════
     ESTILOS DEL WIDGET
     ═══════════════════════════════ */
  const NAVY = '#0A1F44', BLUE = '#2B7FE0', GREEN = '#3DD68C';

  const style = document.createElement('style');
  style.textContent = `
    #nc-bubble {
      position:fixed;bottom:28px;right:28px;z-index:9999;
      width:58px;height:58px;border-radius:50%;
      background:linear-gradient(135deg,${BLUE} 0%,#00C9D4 55%,${GREEN} 100%);
      box-shadow:0 4px 22px rgba(43,127,224,.5);
      border:none;cursor:pointer;
      display:flex;align-items:center;justify-content:center;
      transition:transform .2s ease,box-shadow .2s ease;
    }
    #nc-bubble:hover{transform:scale(1.09);box-shadow:0 6px 30px rgba(43,127,224,.6);}
    #nc-bubble svg{width:28px;height:28px;}
    #nc-badge{
      position:absolute;top:-2px;right:-2px;
      background:#E53E3E;color:#fff;border-radius:50%;
      width:19px;height:19px;font-size:11px;font-weight:700;
      display:flex;align-items:center;justify-content:center;
      font-family:Inter,sans-serif;border:2px solid #fff;
    }

    #nc-win{
      position:fixed;bottom:98px;right:28px;z-index:9998;
      width:370px;max-height:560px;
      background:#fff;border-radius:20px;
      box-shadow:0 12px 48px rgba(10,31,68,.26),0 2px 8px rgba(10,31,68,.1);
      display:flex;flex-direction:column;overflow:hidden;
      font-family:'Inter',sans-serif;
      transform-origin:bottom right;
    }
    #nc-win.nc-open{animation:ncIn .28s cubic-bezier(.34,1.56,.64,1);}
    #nc-win.nc-close-anim{animation:ncOut .2s ease forwards;}
    @keyframes ncIn{from{opacity:0;transform:scale(.82) translateY(14px);}to{opacity:1;transform:scale(1) translateY(0);}}
    @keyframes ncOut{to{opacity:0;transform:scale(.88) translateY(10px);}}

    .nc-hdr{
      background:${NAVY};padding:14px 16px;
      display:flex;align-items:center;gap:11px;flex-shrink:0;
    }
    .nc-av{
      width:40px;height:40px;border-radius:50%;flex-shrink:0;
      background:linear-gradient(135deg,${BLUE},${GREEN});
      display:flex;align-items:center;justify-content:center;
      font-size:20px;
    }
    .nc-hdr-info{flex:1;}
    .nc-hdr-name{color:#fff;font-weight:700;font-size:.93rem;font-family:'Sora','Inter',sans-serif;}
    .nc-hdr-status{
      color:${GREEN};font-size:.71rem;font-weight:500;
      display:flex;align-items:center;gap:5px;margin-top:2px;
    }
    .nc-dot{width:7px;height:7px;border-radius:50%;background:${GREEN};animation:ncPulse 2s infinite;}
    @keyframes ncPulse{0%,100%{opacity:1;}50%{opacity:.35;}}
    .nc-x{
      background:none;border:none;color:rgba(255,255,255,.55);
      cursor:pointer;padding:5px;border-radius:7px;font-size:19px;line-height:1;
      transition:color .15s;
    }
    .nc-x:hover{color:#fff;}

    .nc-body{
      flex:1;overflow-y:auto;padding:16px 14px;
      display:flex;flex-direction:column;gap:10px;background:#F6F9FC;
      scrollbar-width:thin;scrollbar-color:#BDD0EA transparent;
    }
    .nc-msg{
      max-width:88%;padding:11px 14px;border-radius:16px;
      font-size:.83rem;line-height:1.6;animation:ncMsgIn .22s ease;
    }
    @keyframes ncMsgIn{from{opacity:0;transform:translateY(7px);}}
    .nc-msg.bot{
      background:#fff;color:${NAVY};border-bottom-left-radius:4px;
      box-shadow:0 1px 5px rgba(10,31,68,.09);align-self:flex-start;
    }
    .nc-msg.bot strong{color:${NAVY};}
    .nc-msg.bot em{color:#4A6FA5;font-style:italic;}
    .nc-msg.user{
      background:${BLUE};color:#fff;
      border-bottom-right-radius:4px;align-self:flex-end;
    }
    .nc-typing{
      display:flex;gap:5px;align-items:center;
      background:#fff;padding:11px 16px;border-radius:16px;
      border-bottom-left-radius:4px;align-self:flex-start;
      box-shadow:0 1px 4px rgba(10,31,68,.08);
    }
    .nc-typing span{
      width:7px;height:7px;border-radius:50%;background:${BLUE};
      animation:ncBounce 1.1s infinite ease-in-out;
    }
    .nc-typing span:nth-child(2){animation-delay:.18s;}
    .nc-typing span:nth-child(3){animation-delay:.36s;}
    @keyframes ncBounce{0%,80%,100%{transform:translateY(0);opacity:.45;}40%{transform:translateY(-7px);opacity:1;}}

    .nc-qr{
      display:flex;flex-wrap:wrap;gap:6px;
      padding:8px 14px 10px;background:#F6F9FC;flex-shrink:0;
    }
    .nc-qr-btn{
      font-size:.75rem;font-family:'Inter',sans-serif;
      background:#fff;color:${BLUE};
      border:1.5px solid ${BLUE};border-radius:20px;
      padding:5px 13px;cursor:pointer;white-space:nowrap;
      transition:all .15s;
    }
    .nc-qr-btn:hover{background:${BLUE};color:#fff;}

    .nc-ft{
      padding:10px 12px 12px;background:#fff;
      border-top:1px solid #EDF2FA;
      display:flex;gap:8px;align-items:center;flex-shrink:0;
    }
    .nc-input{
      flex:1;border:1.5px solid #BDD0EA;border-radius:24px;
      padding:9px 15px;font-size:.84rem;font-family:'Inter',sans-serif;
      outline:none;color:${NAVY};background:#F6F9FC;transition:border-color .15s;
    }
    .nc-input:focus{border-color:${BLUE};background:#fff;}
    .nc-input::placeholder{color:#9BB0CA;}
    .nc-send{
      width:38px;height:38px;border-radius:50%;border:none;
      background:linear-gradient(135deg,${BLUE},#00C9D4);
      color:#fff;cursor:pointer;
      display:flex;align-items:center;justify-content:center;
      transition:transform .15s,opacity .15s;flex-shrink:0;
    }
    .nc-send:hover{transform:scale(1.1);}
    .nc-send:disabled{opacity:.4;cursor:default;transform:none;}
    .nc-send svg{width:16px;height:16px;}
    .nc-brand{
      text-align:center;font-size:.67rem;color:#9BB0CA;
      padding:0 12px 10px;background:#fff;flex-shrink:0;
    }

    @media(max-width:430px){
      #nc-win{width:calc(100vw - 16px);right:8px;bottom:82px;}
      #nc-bubble{bottom:18px;right:18px;}
    }
  `;
  document.head.appendChild(style);

  /* ── Logo SVG del botón ── */
  const logoSVG = `<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 34L10 10L22 28L34 10L34 34" stroke="white" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="34" y1="10" x2="34" y2="3" stroke="white" stroke-width="4" stroke-linecap="round"/>
    <polyline points="29,7 34,2 39,7" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`;

  /* ── Bubble ── */
  const bubble = document.createElement('button');
  bubble.id = 'nc-bubble';
  bubble.setAttribute('aria-label', 'Chat con NextCapital');
  bubble.innerHTML = `${logoSVG}<span id="nc-badge">1</span>`;
  document.body.appendChild(bubble);

  /* ── Ventana ── */
  const win = document.createElement('div');
  win.id = 'nc-win';
  win.style.display = 'none';
  win.innerHTML = `
    <div class="nc-hdr">
      <div class="nc-av">🤖</div>
      <div class="nc-hdr-info">
        <div class="nc-hdr-name">Capita · NextCapital</div>
        <div class="nc-hdr-status"><span class="nc-dot"></span>En línea — respondo al instante</div>
      </div>
      <button class="nc-x" id="nc-x" aria-label="Cerrar">✕</button>
    </div>
    <div class="nc-body" id="nc-body"></div>
    <div class="nc-qr" id="nc-qr"></div>
    <div class="nc-ft">
      <input class="nc-input" id="nc-input" placeholder="Escribe tu pregunta…" autocomplete="off" maxlength="250"/>
      <button class="nc-send" id="nc-send" disabled aria-label="Enviar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      </button>
    </div>
    <div class="nc-brand">Powered by <strong>NextCapital AI</strong> · NC Finance SAC</div>
  `;
  document.body.appendChild(win);

  const body    = document.getElementById('nc-body');
  const input   = document.getElementById('nc-input');
  const sendBtn = document.getElementById('nc-send');
  const qrWrap  = document.getElementById('nc-qr');
  const badge   = document.getElementById('nc-badge');
  const closeX  = document.getElementById('nc-x');
  let isOpen = false;

  function addMsg(who, html) {
    const el = document.createElement('div');
    el.className = `nc-msg ${who}`;
    el.innerHTML = html;
    body.appendChild(el);
    body.scrollTop = body.scrollHeight;
  }

  function showTyping() {
    const t = document.createElement('div');
    t.className = 'nc-typing'; t.id = 'nc-typing';
    t.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(t);
    body.scrollTop = body.scrollHeight;
  }

  function removeTyping() {
    const t = document.getElementById('nc-typing');
    if (t) t.remove();
  }

  function showQR() {
    qrWrap.innerHTML = '';
    KB.quickReplies.forEach(({ label, msg }) => {
      const btn = document.createElement('button');
      btn.className = 'nc-qr-btn';
      btn.textContent = label;
      btn.addEventListener('click', () => { qrWrap.innerHTML = ''; send(msg); });
      qrWrap.appendChild(btn);
    });
  }

  function send(text) {
    const t = text || input.value.trim();
    if (!t) return;
    addMsg('user', t);
    input.value = ''; sendBtn.disabled = true;
    qrWrap.innerHTML = '';
    showTyping();
    const delay = 700 + Math.random() * 600;
    setTimeout(() => {
      removeTyping();
      addMsg('bot', getBotResponse(t));
    }, delay);
  }

  function open() {
    isOpen = true;
    badge.style.display = 'none';
    win.style.display = 'flex';
    win.classList.remove('nc-close-anim');
    win.classList.add('nc-open');
    input.focus();
    if (body.children.length === 0) {
      setTimeout(() => {
        addMsg('bot', KB.saludo[0]);
        setTimeout(showQR, 500);
      }, 180);
    }
  }

  function close() {
    isOpen = false;
    win.classList.remove('nc-open');
    win.classList.add('nc-close-anim');
    setTimeout(() => { win.style.display = 'none'; }, 210);
  }

  bubble.addEventListener('click', () => isOpen ? close() : open());
  closeX.addEventListener('click', close);

  input.addEventListener('input', () => { sendBtn.disabled = !input.value.trim(); });
  input.addEventListener('keydown', e => { if (e.key === 'Enter' && !e.shiftKey) send(); });
  sendBtn.addEventListener('click', () => send());

})();
