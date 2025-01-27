/**
 * Template Name: QuickStart
 * Template URL: https://bootstrapmade.com/quickstart-bootstrap-startup-website-template/
 * Updated: Aug 07 2024 with Bootstrap v5.3.3
 * Author: BootstrapMade.com
 * License: https://bootstrapmade.com/license/
 */

(function () {
  "use strict";

  /**
   * Apply .scrolled class to the body as the page is scrolled down
   */
  function toggleScrolled() {
    const selectBody = document.querySelector("body");
    const selectHeader = document.querySelector("#header");
    if (
      !selectHeader.classList.contains("scroll-up-sticky") &&
      !selectHeader.classList.contains("sticky-top") &&
      !selectHeader.classList.contains("fixed-top")
    )
      return;
    window.scrollY > 100
      ? selectBody.classList.add("scrolled")
      : selectBody.classList.remove("scrolled");
  }

  document.addEventListener("scroll", toggleScrolled);
  window.addEventListener("load", toggleScrolled);

  /**
   * Mobile nav toggle
   */
  const mobileNavToggleBtn = document.querySelector(".mobile-nav-toggle");

  function mobileNavToogle() {
    document.querySelector("body").classList.toggle("mobile-nav-active");
    mobileNavToggleBtn.classList.toggle("bi-list");
    mobileNavToggleBtn.classList.toggle("bi-x");
  }
  mobileNavToggleBtn.addEventListener("click", mobileNavToogle);

  /**
   * Hide mobile nav on same-page/hash links
   */
  document.querySelectorAll("#navmenu a").forEach((navmenu) => {
    navmenu.addEventListener("click", () => {
      if (document.querySelector(".mobile-nav-active")) {
        mobileNavToogle();
      }
    });
  });

  /**
   * Toggle mobile nav dropdowns
   */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((navmenu) => {
    navmenu.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /**
   * Preloader
   */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.remove();
    });
  }

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  scrollTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }
  window.addEventListener("load", aosInit);

  /**
   * Initiate glightbox
   */
  const glightbox = GLightbox({
    selector: ".glightbox",
  });

  /**
   * Frequently Asked Questions Toggle
   */
  document
    .querySelectorAll(".faq-item h3, .faq-item .faq-toggle")
    .forEach((faqItem) => {
      faqItem.addEventListener("click", () => {
        faqItem.parentNode.classList.toggle("faq-active");
      });
    });

  /**
   * Init swiper sliders
   */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim()
      );

      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }

  window.addEventListener("load", initSwiper);

  /**
   * Correct scrolling position upon page load for URLs containing hash links.
   */
  window.addEventListener("load", function (e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  /**
   * Navmenu Scrollspy
   */
  let navmenulinks = document.querySelectorAll(".navmenu a");

  function navmenuScrollspy() {
    navmenulinks.forEach((navmenulink) => {
      if (!navmenulink.hash) return;
      let section = document.querySelector(navmenulink.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((link) => link.classList.remove("active"));
        navmenulink.classList.add("active");
      } else {
        navmenulink.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);
})();

/*--------------------------------------------------------------
# WHATSAPP
--------------------------------------------------------------*/

(function () {
  "use strict";

  const whatsappIcon = document.getElementById("whatsapp-icon");

  // Tampilkan atau sembunyikan ikon WhatsApp saat scroll
  function toggleWhatsappIcon() {
    if (window.scrollY > 100) {
      whatsappIcon.classList.add("active");
    } else {
      whatsappIcon.classList.remove("active");
    }
  }

  // Redirect ke WhatsApp dengan form template
  whatsappIcon.addEventListener("click", () => {
    const messageTemplate = `
Halo,

Kami tertarik untuk memperoleh informasi lebih lanjut mengenai layanan pembuatan website yang ditawarkan.

Mohon kirimkan detail berikut:
1. Estimasi biaya pembuatan.
2. Perkiraan waktu pengerjaan.
3. Contoh website (jika tersedia).

Kami menantikan respons. Terima kasih atas perhatian yang diberikan.
`;

    const whatsappLink = `https://wa.me/6285811091913?text=${encodeURIComponent(
      messageTemplate
    )}`;

    // Redirect ke WhatsApp
    window.open(whatsappLink, "_blank");
  });

  // Event listener untuk scroll dan load
  document.addEventListener("scroll", toggleWhatsappIcon);
  window.addEventListener("load", toggleWhatsappIcon);
})();

/*--------------------------------------------------------------
# MODAL JS
--------------------------------------------------------------*/

document.addEventListener("DOMContentLoaded", function () {
  const serviceModal = new bootstrap.Modal(
    document.getElementById("serviceModal")
  );
  const modalContent = document.getElementById("modalContent");

  // Data konten untuk setiap layanan
  const serviceDetails = {
    "personal-branding": `
      <h5>Cocok untuk:</h5>
      <p>Freelancer, profesional, atau pemilik usaha kecil.</p>
      <h5>Fitur utama:</h5>
      <ul>
        <li>Desain yang sesuai dengan gaya personal atau identitas bisnis Anda.</li>
        <li>Penyajian informasi produk atau jasa yang terstruktur dan menarik.</li>
        <li>Halaman responsif untuk semua perangkat (PC, tablet, smartphone).</li>
      </ul>
    `,
    "promosi-produk": `
      <h5>Cocok untuk:</h5>
      <p>Pemilik usaha retail, distributor, atau penjual online.</p>
      <h5>Fitur utama:</h5>
      <ul>
        <li>Tampilan katalog produk dengan foto dan deskripsi menarik.</li>
        <li>Informasi kontak yang jelas agar pelanggan mudah menghubungi Anda.</li>
        <li>Call-to-action yang menonjol (seperti tombol "Hubungi Kami" atau "Order Sekarang").</li>
      </ul>
    `,
    "promosi-jasa": `
      <h5>Cocok untuk:</h5>
      <p>Konsultan, penyedia jasa kreatif, atau bisnis layanan lainnya.</p>
      <h5>Fitur utama:</h5>
      <ul>
        <li>Penjelasan detail tentang layanan yang Anda tawarkan.</li>
        <li>Galeri hasil pekerjaan atau testimoni untuk membangun kepercayaan.</li>
        <li>Halaman khusus untuk kontak atau pemesanan layanan.</li>
      </ul>
    `,
    "landing-page": `
      <h5>Cocok untuk:</h5>
      <p>Peluncuran produk baru, promosi khusus, atau event tertentu.</p>
      <h5>Fitur utama:</h5>
      <ul>
        <li>Desain fokus pada konversi (seperti mendapatkan leads atau mengarahkan ke WhatsApp).</li>
        <li>Tata letak ringkas dengan navigasi yang mudah dipahami.</li>
        <li>Optimal untuk SEO dasar dan kecepatan loading yang tinggi.</li>
      </ul>
    `,
  };

  // Mengatur konten modal berdasarkan klik tombol Learn More
  document.querySelectorAll(".read-more").forEach((button) => {
    button.addEventListener("click", function (e) {
      const service = e.target.closest("a").getAttribute("data-service");
      modalContent.innerHTML =
        serviceDetails[service] || "Informasi tidak tersedia.";
    });
  });
});
