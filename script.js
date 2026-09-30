/* =========================================================
   SCRIPT.JS - PORTFOLIO PARHAN MAULANA
   Fungsi file:
   Menambahkan interaksi sederhana pada website.
   ========================================================= */

// Mengambil tombol menu HP
const menuToggle = document.getElementById("menuToggle");

// Mengambil elemen navigasi
const nav = document.querySelector("nav");

// Ketika tombol menu ditekan, tampilkan/sembunyikan menu
menuToggle.addEventListener("click", function () {
    nav.classList.toggle("show");
});

// Ketika menu navigasi diklik di HP, menu ditutup kembali
document.querySelectorAll("nav a").forEach(function (link) {
    link.addEventListener("click", function () {
        nav.classList.remove("show");
    });
});

// Tahun footer otomatis mengikuti tahun sekarang
document.getElementById("year").textContent = new Date().getFullYear();
