const menu = document.getElementById('menu');
const burger = document.getElementById('burger');

if (menu && burger) {
  burger.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    burger.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  menu.addEventListener('click', event => {
    if (event.target.closest('a')) {
      menu.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    }
  });
}
