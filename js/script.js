// Basic script structure
document.addEventListener('DOMContentLoaded', function () {
    console.log('Application loaded');

    // Validasi Formulir Transaksi
    const transaksiForm = document.getElementById('transaksiForm');

    if (transaksiForm) {
        transaksiForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Mencegah pengiriman form default

            // Ambil elemen input
            const namaInput = document.getElementById('namaTransaksi');
            const jumlahInput = document.getElementById('jumlah');
            const kategoriInput = document.getElementById('kategori');

            // Ambil nilai
            const nama = namaInput.value.trim();
            const jumlah = jumlahInput.value.trim();
            const kategori = kategoriInput.value;

            let isValid = true;

            // Reset state validasi
            namaInput.classList.remove('is-invalid');
            jumlahInput.classList.remove('is-invalid');
            kategoriInput.classList.remove('is-invalid');

            // Validasi Nama
            if (nama === "") {
                isValid = false;
                namaInput.classList.add('is-invalid');
            }

            // Validasi Jumlah
            if (jumlah === "" || parseInt(jumlah) <= 0) {
                isValid = false;
                jumlahInput.classList.add('is-invalid');
            }

            // Validasi Kategori
            if (kategori === "") {
                isValid = false;
                kategoriInput.classList.add('is-invalid');
            }

            if (isValid) {
                alert("Transaksi berhasil disimpan! (Simulasi)");
                transaksiForm.reset();
                // Hapus kelas is-invalid jika ada sisa (seharusnya sudah bersih)
                namaInput.classList.remove('is-invalid');
                jumlahInput.classList.remove('is-invalid');
                kategoriInput.classList.remove('is-invalid');
            }
        });
    }

    // Validasi Form Login
    const loginForm = document.getElementById('loginForm');

    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');

            const username = usernameInput.value.trim();
            const password = passwordInput.value.trim();

            let isValid = true;

            // Reset validation
            usernameInput.classList.remove('is-invalid');
            passwordInput.classList.remove('is-invalid');

            if (username === "") {
                isValid = false;
                usernameInput.classList.add('is-invalid');
            }

            if (password === "") {
                isValid = false;
                passwordInput.classList.add('is-invalid');
            }

            if (isValid) {
                alert("Login Berhasil!");
                window.location.href = "index.html";
            }
        });
    }
});

