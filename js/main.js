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
  
  