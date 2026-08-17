/* =========================================================
   PORTAFOLIO — JavaScript
   Sin dependencias. Todo vanilla.
   ========================================================= */

(function () {
  'use strict';

  /* ---------- 1. MENÚ MÓVIL ---------- */
  const toggle = document.getElementById('navToggle');
  const menu   = document.getElementById('navMenu');

  function closeMenu() {
    menu.classList.remove('is-open');
    toggle.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Abrir menú');
  }

  toggle.addEventListener('click', function () {
    const isOpen = menu.classList.toggle('is-open');
    toggle.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  });

  // Cerrar al hacer clic en un link
  menu.addEventListener('click', function (e) {
    if (e.target.closest('a')) closeMenu();
  });

  // Cerrar con Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      closeMenu();
      toggle.focus();
    }
  });

  /* ---------- 2. HEADER CON BORDE AL HACER SCROLL ---------- */
  const header = document.getElementById('header');
  let ticking = false;

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 10);
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
  onScroll();

  /* ---------- 3. ANIMACIÓN DE ENTRADA AL HACER SCROLL ---------- */
  const revealables = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry, i) {
        if (!entry.isIntersecting) return;
        // pequeño retraso escalonado para que no aparezcan todos de golpe
        setTimeout(function () {
          entry.target.classList.add('is-visible');
        }, i * 70);
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    revealables.forEach(function (el) { io.observe(el); });
  } else {
    // Navegador viejo: se muestra todo sin animar
    revealables.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- 4. LINK ACTIVO SEGÚN LA SECCIÓN VISIBLE ---------- */
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav__link');

  if ('IntersectionObserver' in window && sections.length) {
    const spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        navLinks.forEach(function (link) {
          link.classList.toggle('is-active', link.getAttribute('href') === '#' + id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- 5. FORMULARIO DE CONTACTO ---------- */
  const form   = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  if (form) {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      // Si aún no configuraste Formspree, abrimos el cliente de correo
      if (form.action.includes('TU_ID_AQUI')) {
        const nombre  = form.nombre.value;
        const mensaje = form.mensaje.value;
        const email   = form.email.value;
        const asunto  = encodeURIComponent('Contacto desde el portafolio — ' + nombre);
        const cuerpo  = encodeURIComponent(mensaje + '\n\n—\n' + nombre + '\n' + email);

        // ==== EDITA ESTO: tu correo ====
        window.location.href = 'mailto:alfonsomena.dev@gmail.com?subject=' + asunto + '&body=' + cuerpo;

        setStatus('Abriendo tu cliente de correo…', 'is-ok');
        return;
      }

      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      btn.disabled = true;
      btn.textContent = 'Enviando…';
      setStatus('', '');

      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' }
        });

        if (res.ok) {
          form.reset();
          setStatus('¡Mensaje enviado! Te respondo pronto. 🙌', 'is-ok');
        } else {
          setStatus('Algo falló. Escríbeme directo por correo, porfa.', 'is-error');
        }
      } catch (err) {
        setStatus('Sin conexión. Intenta de nuevo o escríbeme por correo.', 'is-error');
      } finally {
        btn.disabled = false;
        btn.textContent = originalText;
      }
    });
  }

  function setStatus(message, cls) {
    if (!status) return;
    status.textContent = message;
    status.className = 'form__status ' + cls;
  }

  /* ---------- 6. AÑO ACTUAL EN EL FOOTER ---------- */
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

})();
