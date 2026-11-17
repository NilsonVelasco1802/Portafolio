  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');
  const abrir = document.getElementById('icono-abrir');
  const cerrar = document.getElementById('icono-cerrar');

  const clasesCerrado = ['opacity-0', 'invisible', 'pointer-events-none'];
  const clasesAbierto = ['opacity-100', 'visible', 'pointer-events-auto'];

  function toggleMenu(abierto) {
    menu.classList.remove(...(abierto ? clasesCerrado : clasesAbierto));
    menu.classList.add(...(abierto ? clasesAbierto : clasesCerrado));
    abrir.classList.toggle('hidden', abierto);
    cerrar.classList.toggle('hidden', !abierto);
    btn.setAttribute('aria-expanded', abierto);
    document.body.classList.toggle('overflow-hidden', abierto); // evita scroll detrás del menú
  }

  btn.addEventListener('click', () => {
    toggleMenu(btn.getAttribute('aria-expanded') !== 'true');
  });

  // Cierra el menú al hacer clic en una opción
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => toggleMenu(false));
  });