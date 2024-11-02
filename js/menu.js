document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

window.onscroll = function() {
    const header = document.querySelector('header');
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.classList.add('shrink');
    } else {
        header.classList.remove('shrink'); 
    }
};

document.getElementById('logo').addEventListener('click', function() {
    alert('logo : Djadug Furniture');
});


function showAlert(Produk) {
    alert(" Produk Djadug Furniture yang sangat bagus : " + Produk);
}

document.addEventListener('DOMContentLoaded', function () {
    const rows = document.querySelectorAll('.pricing-table tbody tr');

    rows.forEach(row => {
        row.addEventListener('click', function () {
            const packageName = this.cells[0].innerText;
            const packagePrice = this.cells[1].innerText;
            const packageFeatures = this.cells[2].innerText;

            alert(`Paket : ${packageName}\nHarga: ${packagePrice}\nFitur : ${packageFeatures}`);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.registration__form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const nama = form.querySelector('input[type="text"]').value;
        const email = form.querySelector('input[type="email"]').value;
        const password = form.querySelector('input[type="password"]').value;
        const paket = form.querySelector('#paket').value;
        const terms = form.querySelector('#terms').checked;
        if (!nama || !email || !password || !paket || !terms) {
            alert('Harap lengkapi semua field yang diperlukan!');
            return;
        }
        console.log('Data Registrasi:', { nama, email, password, paket });
        alert('Registrasi berhasil!');
        form.reset();
    });
});


