const menuItems = ['Home', 'About us', 'Category'];

class App {
  constructor() {
    const burger = document.querySelector('.burger');
    burger.addEventListener('click', () =>
      burger.classList.toggle('burger_active'),
    );
  }
}

document.addEventListener('DOMContentLoaded', () => new App());
