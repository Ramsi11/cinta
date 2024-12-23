// Fungsi untuk membuat teks header memudar secara perlahan
document.addEventListener('DOMContentLoaded', function() {
  const headerText = document.querySelector('header h1');
  headerText.style.opacity = 0;

  setTimeout(function() {
    headerText.style.transition = "opacity 2s ease-in-out";
    headerText.style.opacity = 1;
  }, 1000);
});

// Efek parallax untuk latar belakang
window.addEventListener('scroll', function() {
  const background = document.querySelector('.intro');
  const scrollPosition = window.pageYOffset;
  
  // Latar belakang akan bergerak sedikit lebih lambat dari scroll
  background.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
});

// Pesan peringatan atau pengingat saat halaman dimuat
document.addEventListener('DOMContentLoaded', function() {
  setTimeout(function() {
  }, 3000); // Tampilkan setelah 3 detik halaman dimuat
});

// Fungsi untuk menampilkan pesan setelah formulir kontak dikirim
document.querySelector('.contact form').addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah pengiriman form
  alert("Pesanmu diterima, terima kasih telah berbagi perasaanmu.");
  this.reset(); // Mereset form setelah dikirim
});

// Efek hover yang memberikan animasi pada tombol
document.querySelectorAll('button, .button').forEach(button => {
  button.addEventListener('mouseover', function() {
    button.style.transform = 'scale(1.1)';
    button.style.transition = 'transform 0.3s ease';
  });

  button.addEventListener('mouseout', function() {
    button.style.transform = 'scale(1)';
  });
});