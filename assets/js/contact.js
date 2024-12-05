// Inisialisasi EmailJS dengan public key yang benar
(function () {
  emailjs.init("Cq9N6qRkx3n64NGzu"); // Ganti dengan user_id atau public key yang valid
})();

// Ambil form dan tambahkan event listener
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Mencegah form dari pengiriman default

    // Ambil data dari form
    const formData = new FormData(this);
    const data = {
      to_name: "Penerima", // Sesuaikan dengan nama penerima
      from_name: formData.get("name"), // Nama pengirim
      email: formData.get("email"),
      service_type: formData.get("service_type"),
      message: formData.get("message"),
    };

    // Debugging data untuk memastikan semuanya sudah benar
    console.log(data); // Menampilkan data yang akan dikirim

    // Menampilkan animasi loading
    document.querySelector(".loading").style.display = "block";
    document.querySelector(".sent-message").style.display = "none";
    document.querySelector(".error-message").style.display = "none";

    // Kirim email menggunakan EmailJS
    emailjs
      .send("service_m51b6hk", "template_zdzpf1t", data) // Ganti dengan service_id dan template_id Anda yang valid
      .then(
        function (response) {
          console.log("Pesan berhasil dikirim:", response);
          document.querySelector(".loading").style.display = "none"; // Sembunyikan loading
          document.querySelector(".sent-message").style.display = "block"; // Tampilkan pesan sukses

          // Reset form setelah pengiriman berhasil
          document.getElementById("contact-form").reset();
        },
        function (error) {
          console.error("Error:", error);
          document.querySelector(".loading").style.display = "none"; // Sembunyikan loading
          document.querySelector(".error-message").style.display = "none"; // Sembunyikan pesan error
          // Anda bisa menambahkan pesan error khusus atau hanya menghilangkan error message.
        }
      );
  });
