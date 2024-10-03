





document.addEventListener("DOMContentLoaded", () => {
    const serviceBoxes = document.querySelectorAll(".service-box");
  
    serviceBoxes.forEach((box) => {
      box.addEventListener("click", () => {
        // Remove border from all service boxes
        serviceBoxes.forEach((box) => box.classList.remove("border-2", "border-indigo-500"));
  
        // Add border to the selected service box
        box.classList.add("border-2", "border-indigo-500");
      });
    });
  });
  




  // Add hover effect for service boxes
  const serviceBoxes = document.querySelectorAll('.service-box');

  serviceBoxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
      box.classList.add('scale-105');
    });
    box.addEventListener('mouseleave', () => {
      box.classList.remove('scale-105');
    });
  });

  // Initialize Swiper for testimonials
  const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });




  const featureCards = document.querySelectorAll('.feature-card');

  featureCards.forEach(card => {
      // Add hover effect
      card.addEventListener('mouseenter', () => {
          card.style.transform = 'scale(1.05)';
          card.style.transition = 'transform 0.3s';
      });

      card.addEventListener('mouseleave', () => {
          card.style.transform = 'scale(1)';
      });

      // Add click effect
      card.addEventListener('click', () => {
          featureCards.forEach(c => {
              c.classList.remove('selected');
              c.style.transform = 'scale(1)';
          });
          card.classList.add('selected');
          card.style.transform = 'scale(1.1)';
      });
  });




// mail
    function sendEmail(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Collect form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      
      // Construct the mailto link
      const mailtoLink = `mailto:asifurrahman.noyon@gmail.com?subject=Contact Form Submission&body=Name: ${name}%0AEmail: ${email}%0A%0AMessage: ${message}`;
      
      // Open the user's email client
      window.location.href = mailtoLink;
    }




    document.getElementById('year').textContent = new Date().getFullYear();