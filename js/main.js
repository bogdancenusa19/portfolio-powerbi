// Lightbox image zoom
function openImage(img) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    lightboxImg.src = img.src;
    lightbox.style.display = 'flex';
  }
  
  function closeImage() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
  }

  function promptDownload() {
    const input = prompt(
      "You will be redirected to Google Drive.\nTo download the project, click the top-right download icon on the page.\n\n Enter access key to unlock the report:"
    );
  
    if (!input) return;
  
    const correct = "2002";
    if (input.trim() === correct) {
      // Redirect to Google Drive
      window.location.href = "https://drive.google.com/file/d/1p_T49DVNR9kF-HEkfoYufO4Ojw9JCUJI/view?usp=sharing";
    } else {
      alert("Incorrect password.");
    }
  }
  function updateCountdowns() {
    const countdowns = document.querySelectorAll('.countdown-timer');
    const now = new Date().getTime();
  
    countdowns.forEach(el => {
      const deadline = new Date(el.dataset.deadline).getTime();
      const distance = deadline - now;
  
      if (distance <= 0) {
        el.textContent = "Opens soon!";
        return;
      }
  
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((distance / (1000 * 60)) % 60);
  
      el.textContent = `Opens in: ${days}d ${hours}h ${minutes}m`;
    });
  }
  
  setInterval(updateCountdowns, 60000); // actualizează la fiecare 1 minut
  updateCountdowns(); // apel inițial
  
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.project-navbar');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  
  