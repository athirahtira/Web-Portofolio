function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    let isValid = true;

    if (!name) {
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    const phonePattern = /^\d{12,15}$/;
    if (!phone || !phonePattern.test(phone)) {
        document.getElementById("phoneError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("phoneError").style.display = "none";
    }

    if (!message) {
        document.getElementById("messageError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("messageError").style.display = "none";
    }

    if (isValid) {
        const whatsappNumber = "081213407684";
        const whatsappURL = `https://wa.me/${whatsappNumber}?text=` +
            `Nama: ${encodeURIComponent(name)}%0A` +
            `Email: ${encodeURIComponent(email)}%0A` +
            `Nomor HP: ${encodeURIComponent(phone)}%0A` +
            `Pesan: ${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");
    }
}
