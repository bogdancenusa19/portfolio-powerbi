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
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789:/?=.-_";
    const map = [7,19,19,15,18,62,63,63,3,17,8,21,4,66,6,14,14,6,11,4,66,2,14,12,63,5,8,11,4,63,3,63,53,15,68,45,56,61,29,47,39,43,61,10,31,67,33,30,10,5,14,50,20,5,40,56,40,9,22,61,35,28,46,35,34,63,21,8,4,22,64,20,18,15,65,18,7,0,17,8,13,6];
    const k = [77, 106, 65, 119, 77, 103, 61, 61];
  
    const z = prompt("You will be redirected to Google Drive.\nTo download the project, click the top-right download icon on the page.\n\nEnter access key to unlock the report:");
    if (!z) return;
  
    const input = btoa(z.trim());
    const pass = String.fromCharCode(...k);
    const link = map.map(i => chars[i]).join("");
  
    console.log("Redirecting to:", link);
    if (input === pass) {
      window.location.href = link;
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

 // Burger toggle
 document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("burger-toggle");
  const nav = document.getElementById("navbar-links");

  if (toggle && nav) {
    // Toggle burger menu on click
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });

    // Close menu on link click (only on mobile)
    const links = nav.querySelectorAll("a");
    links.forEach(link => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 768) {
          nav.classList.remove("show");
        }
      });
    });
  }
});

const galleryImages = Array.from(document.querySelectorAll('.gallery .image-block img'));
let currentIndex = 0;

function openImage(img) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  currentIndex = galleryImages.indexOf(img);
  lightboxImg.src = img.src;
  lightbox.style.display = 'flex';
}

function closeImage() {
  document.getElementById('lightbox').style.display = 'none';
}

function showNextImage() {
  currentIndex = (currentIndex + 1) % galleryImages.length;
  document.getElementById('lightbox-img').src = galleryImages[currentIndex].src;
}

function showPrevImage() {
  currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
  document.getElementById('lightbox-img').src = galleryImages[currentIndex].src;
}
document.addEventListener('keydown', function (event) {
  const lightbox = document.getElementById('lightbox');
  if (lightbox.style.display === 'flex') {
    if (event.key === 'ArrowRight') {
      showNextImage();
    } else if (event.key === 'ArrowLeft') {
      showPrevImage();
    } else if (event.key === 'Escape') {
      closeImage();
    }
  }
});


  
  
  