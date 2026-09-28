/* =============================================
   NextCapital — JS
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ----- Entrada animada con IntersectionObserver ----- */
  const fadeEls = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.15 });
    fadeEls.forEach((el) => io.observe(el));
  } else {
    fadeEls.forEach((el) => el.classList.add('visible'));
  }

  /* ----- Navbar sticky con sombra ----- */
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 8) {
      navbar.style.boxShadow = '0 2px 16px rgba(13,31,60,.1)';
    } else {
      navbar.style.boxShadow = '';
    }
  });

  /* ----- Menú hamburguesa ----- */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  hamburger?.addEventListener('click', () => {
    const isOpen = mobileMenu.style.display === 'flex';
    mobileMenu.style.display = isOpen ? 'none' : 'flex';
    hamburger.setAttribute('aria-expanded', !isOpen);
  });

  /* ----- Formateo de moneda en el campo monto ----- */
  document.querySelectorAll('.input-amount').forEach((input) => {
    input.addEventListener('input', () => {
      let v = input.value.replace(/\D/g, '');
      if (v) {
        input.value = Number(v).toLocaleString('es-PE');
      }
    });
    input.addEventListener('focus', () => {
      input.value = input.value.replace(/,/g, '');
    });
    input.addEventListener('blur', () => {
      let v = input.value.replace(/\D/g, '');
      if (v) input.value = Number(v).toLocaleString('es-PE');
    });
  });

  /* ----- Validación y envío de formularios ----- */
  document.querySelectorAll('.nc-form').forEach((form) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateForm(form)) return;

      const btn = form.querySelector('[type="submit"]');
      const original = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Enviando…';

      // Simulación de envío
      setTimeout(() => {
        showToast('¡Registro exitoso! Te contactaremos pronto.');
        form.reset();
        btn.disabled = false;
        btn.textContent = original;
      }, 1400);
    });
  });

  function validateForm(form) {
    let valid = true;
    form.querySelectorAll('[required]').forEach((field) => {
      clearError(field);
      if (!field.value.trim()) {
        showError(field, 'Este campo es obligatorio');
        valid = false;
      } else if (field.type === 'email' && !isEmail(field.value)) {
        showError(field, 'Ingresa un correo válido');
        valid = false;
      } else if (field.type === 'tel' && !isTel(field.value)) {
        showError(field, 'Ingresa un número válido (9 dígitos)');
        valid = false;
      }
    });
    return valid;
  }

  function showError(field, msg) {
    field.style.borderColor = '#E53E3E';
    const err = document.createElement('p');
    err.className = 'field-error';
    err.style.cssText = 'color:#E53E3E;font-size:.75rem;margin-top:4px;';
    err.textContent = msg;
    field.parentNode.appendChild(err);
  }

  function clearError(field) {
    field.style.borderColor = '';
    field.parentNode.querySelectorAll('.field-error').forEach((e) => e.remove());
  }

  function isEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
  function isTel(v)   { return /^9\d{8}$/.test(v.replace(/\s/g, '')); }

  /* ----- Toast ----- */
  function showToast(msg) {
    const t = document.createElement('div');
    t.textContent = msg;
    t.style.cssText = `
      position:fixed; bottom:28px; left:50%; transform:translateX(-50%);
      background:#0D1F3C; color:#fff; padding:14px 28px; border-radius:10px;
      font-size:.9rem; font-weight:500; z-index:999; box-shadow:0 8px 24px rgba(0,0,0,.2);
      border-left:4px solid #1DB47A; max-width:90vw; text-align:center;
      animation: toastIn .3s ease;
    `;
    const style = document.createElement('style');
    style.textContent = '@keyframes toastIn{from{opacity:0;transform:translate(-50%,12px)}to{opacity:1;transform:translate(-50%,0)}}';
    document.head.appendChild(style);
    document.body.appendChild(t);
    setTimeout(() => {
      t.style.opacity = '0';
      t.style.transition = 'opacity .3s';
      setTimeout(() => t.remove(), 320);
    }, 3500);
  }

  /* ----- Scroll suave para anclas internas ----- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Cierra menú mobile si está abierto
        if (mobileMenu) mobileMenu.style.display = 'none';
      }
    });
  });
});
