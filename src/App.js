class App {
  constructor() {
    const burger = document.querySelector('.burger');
    const blur = document.querySelector('.menu');
    burger.addEventListener('click', () => {
      burger.classList.toggle('burger_active');
      blur.classList.toggle('menu_active');
    });
  }
}

document.addEventListener('DOMContentLoaded', () => new App());
