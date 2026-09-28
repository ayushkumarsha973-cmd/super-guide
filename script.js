const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const navActions = document.querySelector('.nav-actions');
const year = document.getElementById('year');
const cartCount = document.querySelector('.cart-count');

if (year) {
  year.textContent = new Date().getFullYear();
}

if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('active');
    navActions.classList.toggle('active');
  });
}

const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const currentCount = parseInt(cartCount?.textContent || '0', 10);
    const nextCount = currentCount + 1;
    if (cartCount) {
      cartCount.textContent = String(nextCount);
    }
    button.textContent = 'Added';
    button.disabled = true;
  });
});

const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = newsletterForm.querySelector('input');
    if (input) {
      input.value = '';
      alert('Thanks for subscribing!');
    }
  });
}

const authTabs = document.querySelectorAll('.tab-btn');
const authPanels = document.querySelectorAll('.auth-panel');
const authForms = document.querySelectorAll('.auth-form');

if (authTabs.length && authPanels.length) {
  authTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.target;
      authTabs.forEach((button) => button.classList.toggle('active', button === tab));
      authPanels.forEach((panel) => panel.classList.toggle('active', panel.id === target));
    });
  });
}

if (authForms.length) {
  authForms.forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const email = formData.get('email')?.toString().trim();
      const password = formData.get('password')?.toString().trim();
      if (!email || !password) {
        alert('Please complete all required fields.');
        return;
      }
      const isLogin = form.closest('.auth-panel')?.id === 'login';
      if (isLogin) {
        alert(`Logged in successfully as ${email}.`);
      } else {
        const name = formData.get('name')?.toString().trim();
        if (!name) {
          alert('Please enter your name.');
          return;
        }
        alert(`Account created for ${name}.`);
      }
      form.reset();
    });
  });
}
