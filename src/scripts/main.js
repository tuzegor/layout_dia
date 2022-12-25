'use strict';

const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const userData = {
    userEmail: contactForm.querySelector('[name="user-email"]').value,
    userName: contactForm.querySelector('[name="user-name"]').value,
    userComment: contactForm.querySelector('[name="user-message"]').value,
  };

  window.alert(`Thank you ${userData.userName}, we will contact you!`);
  contactForm.reset();
});
