/* =============================================
   NextCapital — Chatbot Widget
   ============================================= */

(function () {
  /* ── Base de conocimiento NextCapital ── */
  const KB = {
    saludo: [
      '¡Hola! 👋 Soy <strong>Capita</strong>, tu asesor virtual de NextCapital. ¿En qué puedo ayudarte hoy?',
      '¡Bienvenido a NextCapital! 🚀 Soy <strong>Capita</strong>. Puedo ayudarte con información sobre nuestros créditos, requisitos, tasas y más. ¿Qué necesitas?'
    ],
    faq: [
      {
        tags: ['requisito', 'pedir', 'necesito', 'solicitar', 'documentos', 'garantia', 'garantías', 'aval'],
        respuesta: '✅ <strong>No necesitas garantías</strong> ni historial crediticio bancario. Solo evaluamos tu <strong>flujo de ventas digitales</strong> (Yape, Plin, POS, QR) de los últimos 15–30 días. ¡Sin trámites presenciales ni carpetas físicas!'
      },
      {
        tags: ['monto', 'cuánto', 'cuanto', 'préstamo', 'prestamo', 'capital', 'máximo', 'minimo'],
        respuesta: '💰 Financiamos desde <strong>S/ 3,000 hasta S/ 150,000</strong> (o su equivalente en dólares US$ 1,000 – US$ 40,000). El monto se determina automáticamente según tu volumen de ventas digitales.'
      },
      {
        tags: ['tasa', 'interés', 'interes', 'costo', 'cobran', 'precio', 'comision'],
        respuesta: '📊 <strong>Tasas personalizadas</strong>: no usamos un tarifario fijo. Tu tasa se calcula individualmente según tu nivel de riesgo y volumen transaccional. Entre más ventas demuestres, mejores condiciones obtienes. Puedes precalificar gratis en el formulario de arriba. 👆'
      },
      {
        tags: ['tiempo', 'rapido', 'rápido', 'demora', 'cuando', 'cuándo', 'aprobacion', 'aprobación', 'minutos', 'horas'],
        respuesta: '⚡ <strong>Evaluación en menos de 5 minutos</strong> mediante nuestra IA. El desembolso llega automáticamente a tu Yape, Plin o cuenta bancaria. Sin esperas ni visitas a una agencia.'
      },
      {
        tags: ['pago', 'cuota', 'cuotas', 'pagar', 'cobro', 'flexible', 'adaptativo'],
        respuesta: '🔄 Usamos <strong>Recaudación Adaptativa Inteligente</strong>: en días de buenas ventas se descuenta una cuota mayor; en días flojos, la cuota se reduce o pausa sola. ¡Tu pago se adapta a tu negocio, no al revés!'
      },
      {
        tags: ['yape', 'plin', 'pos', 'qr', 'digital', 'ventas', 'transacciones'],
        respuesta: '📱 Conectamos con tus <strong>cobros digitales</strong>: Yape, Plin, POS, códigos QR. Analizamos tus transacciones de los últimos 15–30 días con IA para darte una evaluación honesta y justa, sin revisar tu historial en centrales de riesgo.'
      },
      {
        tags: ['inversionista', 'inversor', 'invertir', 'inversión', 'inversion', 'rendimiento', 'retorno'],
        respuesta: '📈 NextCapital también opera como <strong>plataforma P2P crowdlending</strong>: personas naturales e inversionistas pueden financiar MYPEs evaluadas por nuestra plataforma, obteniendo <strong>retornos superiores</strong> a los depósitos a plazo tradicionales. ¿Te interesa invertir?'
      },
      {
        tags: ['historial', 'credito', 'crédito', 'crediticio', 'buro', 'infocorp', 'central', 'riesgo'],
        respuesta: '📋 <strong>No usamos centrales de riesgo estáticas</strong>. Evaluamos tu flujo de caja real. Además, construimos tu <strong>Historial Crediticio NextCapital</strong>: un registro portable y verificable que puedes usar ante otras entidades financieras en el futuro.'
      },
      {
        tags: ['linea', 'línea', 'revolvente', 'renovar', 'volver', 'siguiente'],
        respuesta: '♻️ Tenemos <strong>Línea de Crédito Revolvente</strong>: úsala, págala y vuelve a disponer de ella. A medida que demuestres buen comportamiento de pago, tu línea crece automáticamente.'
      },
      {
        tags: ['copiloto', 'app', 'aplicacion', 'aplicación', 'móvil', 'movil', 'herramienta', 'gestión'],
        respuesta: '🤖 Nuestra app incluye un <strong>Copiloto Financiero</strong>: registro de ventas, control de gastos, proyección de liquidez y alertas educativas. Todo en tu celular, sin necesidad de ser contador.'
      },
      {
        tags: ['mype', 'negocio', 'empresa', 'quien', 'quién', 'para quien', 'para quién'],
        respuesta: '🏪 NextCapital está diseñado para <strong>micro y pequeñas empresas (MYPE) en Perú</strong>, especialmente las que están iniciando o son informales, y que cobran por medios digitales. ¡Si tienes ventas reales, puedes acceder a financiamiento!'
      },
      {
        tags: ['seguro', 'confiable', 'confianza', 'regulado', 'legal', 'sfc', 'smv', 'sbs'],
        respuesta: '🔒 Operamos bajo el marco regulatorio peruano para plataformas fintech. Tu información y transacciones están protegidas. Somos <strong>NC Finance SAC</strong>, empresa registrada en Perú.'
      },
      {
        tags: ['gracias', 'ok', 'listo', 'entendido', 'perfecto', 'bien'],
        respuesta: '¡Con gusto! 😊 Si tienes más preguntas, aquí estaré. También puedes <strong>precalificar ahora</strong> desde el formulario de esta página. ¡Suerte con tu negocio! 🚀'
      }
    ],
    quickReplies: [
      { label: '¿Qué necesito para aplicar?', msg: 'requisitos' },
      { label: '¿Cuánto puedo pedir?', msg: 'monto máximo' },
      { label: '¿Cuánto tarda la aprobación?', msg: 'tiempo de aprobacion' },
      { label: '¿Cómo son las cuotas?', msg: 'cuotas flexibles' }
    ],
    fallback: [
      '¡Mmm! No estoy seguro de entender eso. 🤔 Puedo ayudarte con <strong>requisitos, montos, tasas, tiempos de aprobación y pagos</strong>. ¿Sobre qué quieres saber más?',
      'Para esa pregunta específica, te recomiendo <strong>completar el formulario de precalificación</strong> o contactarnos directamente. ¡Nuestro equipo humano puede ayudarte mejor! 💬'
    ]
  };

  let fallbackIndex = 0;

  function getBotResponse(text) {
    const msg = text.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
    // Saludo inicial
    if (/^(hola|buenas|buenos|hey|hi|inicio|empezar|start)/.test(msg)) {
      return KB.saludo[Math.floor(Math.random() * KB.saludo.length)];
    }
    // Buscar en FAQ
    for (const item of KB.faq) {
      if (item.tags.some(tag => msg.includes(tag))) {
        return item.respuesta;
      }
    }
    // Fallback rotativo
    const resp = KB.fallback[fallbackIndex % KB.fallback.length];
    fallbackIndex++;
    return resp;
  }

  /* ── Crear Widget ── */
  const NAVY  = '#0A1F44';
  const BLUE  = '#2B7FE0';
  const GREEN = '#3DD68C';

  const style = document.createElement('style');
  style.textContent = `
    #nc-chat-bubble {
      position: fixed; bottom: 28px; right: 28px; z-index: 9999;
      width: 56px; height: 56px; border-radius: 50%;
      background: linear-gradient(135deg, ${BLUE} 0%, #00C9D4 60%, ${GREEN} 100%);
      box-shadow: 0 4px 20px rgba(43,127,224,.45);
      border: none; cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: transform .2s ease, box-shadow .2s ease;
    }
    #nc-chat-bubble:hover { transform: scale(1.08); box-shadow: 0 6px 28px rgba(43,127,224,.55); }
    #nc-chat-bubble svg { width: 28px; height: 28px; }

    #nc-chat-badge {
      position: absolute; top: -3px; right: -3px;
      background: #E53E3E; color: #fff; border-radius: 50%;
      width: 18px; height: 18px; font-size: 11px; font-weight: 700;
      display: flex; align-items: center; justify-content: center;
      font-family: Inter, sans-serif; border: 2px solid #fff;
    }

    #nc-chat-window {
      position: fixed; bottom: 96px; right: 28px; z-index: 9998;
      width: 360px; max-height: 520px;
      background: #fff; border-radius: 18px;
      box-shadow: 0 8px 40px rgba(10,31,68,.22);
      display: flex; flex-direction: column;
      overflow: hidden; font-family: 'Inter', sans-serif;
      transform-origin: bottom right;
      animation: ncSlideIn .25s cubic-bezier(.34,1.56,.64,1);
    }
    @keyframes ncSlideIn {
      from { opacity: 0; transform: scale(.85) translateY(12px); }
      to   { opacity: 1; transform: scale(1) translateY(0); }
    }
    #nc-chat-window.nc-closing {
      animation: ncSlideOut .2s ease forwards;
    }
    @keyframes ncSlideOut {
      to { opacity: 0; transform: scale(.88) translateY(10px); }
    }

    .nc-chat-header {
      background: ${NAVY};
      padding: 14px 16px;
      display: flex; align-items: center; gap: 11px;
    }
    .nc-chat-avatar {
      width: 38px; height: 38px; border-radius: 50%; flex-shrink: 0;
      background: linear-gradient(135deg, ${BLUE}, ${GREEN});
      display: flex; align-items: center; justify-content: center;
      font-size: 18px;
    }
    .nc-chat-header-info { flex: 1; }
    .nc-chat-header-name {
      color: #fff; font-weight: 700; font-size: .92rem;
      font-family: 'Sora', 'Inter', sans-serif;
    }
    .nc-chat-header-status {
      color: ${GREEN}; font-size: .72rem; font-weight: 500;
      display: flex; align-items: center; gap: 5px; margin-top: 1px;
    }
    .nc-status-dot {
      width: 7px; height: 7px; border-radius: 50%; background: ${GREEN};
      animation: ncPulse 2s infinite;
    }
    @keyframes ncPulse {
      0%,100% { opacity: 1; } 50% { opacity: .4; }
    }
    .nc-chat-close {
      background: none; border: none; color: rgba(255,255,255,.6);
      cursor: pointer; padding: 4px; border-radius: 6px; font-size: 18px; line-height: 1;
      transition: color .15s;
    }
    .nc-chat-close:hover { color: #fff; }

    .nc-chat-body {
      flex: 1; overflow-y: auto; padding: 16px 14px;
      display: flex; flex-direction: column; gap: 10px;
      background: #F7F9FC;
      scrollbar-width: thin; scrollbar-color: #BDD0EA transparent;
    }
    .nc-msg {
      max-width: 82%; padding: 10px 13px; border-radius: 14px;
      font-size: .84rem; line-height: 1.55; animation: ncMsgIn .2s ease;
    }
    @keyframes ncMsgIn { from { opacity: 0; transform: translateY(6px); } }
    .nc-msg.bot {
      background: #fff; color: ${NAVY};
      border-bottom-left-radius: 4px;
      box-shadow: 0 1px 4px rgba(10,31,68,.08);
      align-self: flex-start;
    }
    .nc-msg.user {
      background: ${BLUE}; color: #fff;
      border-bottom-right-radius: 4px;
      align-self: flex-end;
    }
    .nc-typing {
      display: flex; gap: 5px; align-items: center;
      background: #fff; padding: 10px 14px; border-radius: 14px;
      border-bottom-left-radius: 4px; align-self: flex-start;
      box-shadow: 0 1px 4px rgba(10,31,68,.08);
    }
    .nc-typing span {
      width: 7px; height: 7px; border-radius: 50%; background: ${BLUE};
      animation: ncBounce 1.1s infinite ease-in-out;
    }
    .nc-typing span:nth-child(2) { animation-delay: .18s; }
    .nc-typing span:nth-child(3) { animation-delay: .36s; }
    @keyframes ncBounce {
      0%,80%,100% { transform: translateY(0); opacity: .5; }
      40%          { transform: translateY(-6px); opacity: 1; }
    }

    .nc-quick-replies {
      display: flex; flex-wrap: wrap; gap: 6px;
      padding: 0 14px 10px;
      background: #F7F9FC;
    }
    .nc-qr-btn {
      font-size: .76rem; font-family: 'Inter', sans-serif;
      background: #fff; color: ${BLUE};
      border: 1.5px solid ${BLUE}; border-radius: 20px;
      padding: 5px 12px; cursor: pointer; white-space: nowrap;
      transition: all .15s;
    }
    .nc-qr-btn:hover { background: ${BLUE}; color: #fff; }

    .nc-chat-footer {
      padding: 12px 12px 14px;
      background: #fff;
      border-top: 1px solid #EDF2FA;
      display: flex; gap: 8px; align-items: center;
    }
    .nc-chat-input {
      flex: 1; border: 1.5px solid #BDD0EA; border-radius: 24px;
      padding: 9px 15px; font-size: .84rem; font-family: 'Inter', sans-serif;
      outline: none; color: ${NAVY}; background: #F7F9FC;
      transition: border-color .15s;
    }
    .nc-chat-input:focus { border-color: ${BLUE}; background: #fff; }
    .nc-chat-input::placeholder { color: #8FA3BF; }
    .nc-send-btn {
      width: 38px; height: 38px; border-radius: 50%; border: none;
      background: linear-gradient(135deg, ${BLUE}, #00C9D4);
      color: #fff; cursor: pointer; display: flex; align-items: center; justify-content: center;
      transition: transform .15s, opacity .15s; flex-shrink: 0;
    }
    .nc-send-btn:hover { transform: scale(1.08); }
    .nc-send-btn:disabled { opacity: .45; cursor: default; transform: none; }
    .nc-send-btn svg { width: 16px; height: 16px; }

    .nc-chat-footer-brand {
      text-align: center; font-size: .68rem; color: #8FA3BF;
      padding: 0 12px 10px; background: #fff;
    }

    @media (max-width: 420px) {
      #nc-chat-window { width: calc(100vw - 20px); right: 10px; bottom: 84px; }
      #nc-chat-bubble { bottom: 18px; right: 18px; }
    }
  `;
  document.head.appendChild(style);

  /* ── Logo SVG inline pequeño ── */
  const logoSVG = `<svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 34 L10 10 L22 28 L34 10 L34 34" stroke="white" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="34" y1="10" x2="34" y2="3" stroke="white" stroke-width="4" stroke-linecap="round"/>
    <polyline points="29,7 34,2 39,7" stroke="white" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  </svg>`;

  /* ── Bubble button ── */
  const bubble = document.createElement('button');
  bubble.id = 'nc-chat-bubble';
  bubble.setAttribute('aria-label', 'Abrir chat de NextCapital');
  bubble.innerHTML = `${logoSVG}<span id="nc-chat-badge">1</span>`;
  document.body.appendChild(bubble);

  /* ── Chat window ── */
  const win = document.createElement('div');
  win.id = 'nc-chat-window';
  win.style.display = 'none';
  win.innerHTML = `
    <div class="nc-chat-header">
      <div class="nc-chat-avatar">🤖</div>
      <div class="nc-chat-header-info">
        <div class="nc-chat-header-name">Capita · NextCapital</div>
        <div class="nc-chat-header-status">
          <span class="nc-status-dot"></span> En línea — respondo al instante
        </div>
      </div>
      <button class="nc-chat-close" id="nc-close-btn" aria-label="Cerrar chat">✕</button>
    </div>
    <div class="nc-chat-body" id="nc-body"></div>
    <div class="nc-quick-replies" id="nc-qr"></div>
    <div class="nc-chat-footer">
      <input class="nc-chat-input" id="nc-input" placeholder="Escribe tu pregunta…" autocomplete="off" maxlength="200"/>
      <button class="nc-send-btn" id="nc-send" disabled aria-label="Enviar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
        </svg>
      </button>
    </div>
    <div class="nc-chat-footer-brand">Powered by <strong>NextCapital AI</strong> · NC Finance SAC</div>
  `;
  document.body.appendChild(win);

  /* ── Referencias ── */
  const body    = document.getElementById('nc-body');
  const input   = document.getElementById('nc-input');
  const sendBtn = document.getElementById('nc-send');
  const qrWrap  = document.getElementById('nc-qr');
  const badge   = document.getElementById('nc-chat-badge');
  const closeBtn= document.getElementById('nc-close-btn');

  let isOpen = false;

  /* ── Helpers ── */
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
    return t;
  }

  function removeTyping() {
    const t = document.getElementById('nc-typing');
    if (t) t.remove();
  }

  function showQuickReplies() {
    qrWrap.innerHTML = '';
    KB.quickReplies.forEach(({ label, msg }) => {
      const btn = document.createElement('button');
      btn.className = 'nc-qr-btn';
      btn.textContent = label;
      btn.addEventListener('click', () => {
        qrWrap.innerHTML = '';
        sendMessage(msg);
      });
      qrWrap.appendChild(btn);
    });
  }

  function sendMessage(text) {
    const trimmed = text || input.value.trim();
    if (!trimmed) return;
    addMsg('user', trimmed);
    input.value = '';
    sendBtn.disabled = true;
    qrWrap.innerHTML = '';

    const typing = showTyping();
    const delay = 600 + Math.random() * 500;
    setTimeout(() => {
      typing.remove();
      const resp = getBotResponse(trimmed);
      addMsg('bot', resp);
    }, delay);
  }

  /* ── Abrir / cerrar ── */
  function openChat() {
    isOpen = true;
    badge.style.display = 'none';
    win.style.display = 'flex';
    win.classList.remove('nc-closing');
    input.focus();
    // Mensaje de bienvenida si está vacío
    if (body.children.length === 0) {
      setTimeout(() => {
        addMsg('bot', KB.saludo[0]);
        setTimeout(showQuickReplies, 400);
      }, 200);
    }
  }

  function closeChat() {
    isOpen = false;
    win.classList.add('nc-closing');
    setTimeout(() => { win.style.display = 'none'; }, 200);
  }

  bubble.addEventListener('click', () => isOpen ? closeChat() : openChat());
  closeBtn.addEventListener('click', closeChat);

  /* ── Input y envío ── */
  input.addEventListener('input', () => {
    sendBtn.disabled = input.value.trim() === '';
  });

  input.addEventListener('keydown', e => {
    if (e.key === 'Enter') sendMessage();
  });

  sendBtn.addEventListener('click', () => sendMessage());

})();
