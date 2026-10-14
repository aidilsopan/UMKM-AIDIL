function pesan(produk) {
  const nomorWhatsApp = "6283852140069";

  const pesanWA =
    "Halo, saya ingin memesan " + produk +
    " dari Bakso Goreng Crispy.";

  const url =
    "https://wa.me/" + nomorWhatsApp +
    "?text=" + encodeURIComponent(pesanWA);

  window.open(url, "_blank");
}