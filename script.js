  const burger = document.querySelector('.burger');
  const header = document.querySelector('header');
  burger.addEventListener('click', () => {
    header.classList.toggle('nav-open');
  });

  document.getElementById('order-now-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const formContainer = document.getElementById('order-form-container');
    formContainer.style.display = formContainer.style.display === 'none' ? 'block' : 'none';
    });

document.addEventListener('DOMContentLoaded', () => {
    const orderBtn = document.getElementById('order-now-btn');
    const overlay = document.getElementById('overlay-order-form');
    const form = document.getElementById('order-form');

    // Open form
    orderBtn.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });

    // Close form when clicking on overlay background
    overlay.addEventListener('click', (e) => {
        if (!form.contains(e.target)) {
            overlay.style.display = 'none';
        }
    });
});
