
# Test Documentation Payment Gateway Vue

## 📌 Deskripsi
test membuat documentation payment gateway beserta fiturnya deposit dan withdraw menggunakan test akun
menggunakan clean architecture

## ✨ Fitur Utama
- **Deposit:** Halaman untuk melakukan deposit.
- **Withdraw:** Halaman untuk melakukan withdraw.
- **Login Admin Dashboard:** Halaman untuk login sebagai admin.
- **Transaction History:** Halaman untuk melihat semua transaksi.

## 📂 Struktur Halaman
| Path           | Deskripsi                     |
| -------------- | ----------------------------- |
| `/`     | Halaman deposit               |
| `/withdraw`    | Halaman withdraw              |
| `/login`       | Halaman login admin dashboard |
| `/transaction` | Halaman daftar transaksi      |
| `/test-deposit` | Halaman Test Deposit   
| `/test-withdraw` | Halaman Test Withdraw      |
| `/payment-deposit/:order_id` | Halaman Test Simulate Payment|


## 🛠️ Teknologi yang Digunakan
- Vue.js
- Vue Router
- Tailwind CSS (Opsional)
- WebSocket

## 🚀 Instalasi & Menjalankan Proyek
### 1. Clone Repository
```sh
git clone https://github.com/YourMasterIsFool/test-vue-payment-gateway.git
cd repository
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Jalankan Proyek
```sh
npm run dev
```
Aplikasi akan berjalan di `http://localhost:5173` (default Vite).

## 📜 Konfigurasi Environment
Buat file `.env` di root proyek dan tambahkan konfigurasi berikut (jika diperlukan):
```env
VITE_API_BASE_URL=http://localhost:8000/api
```

## 📌 Penggunaan
1. Buka aplikasi di browser.
2. Login ke dashboard melalui `/login`.
3. Lakukan deposit melalui `/deposit`.
4. Lakukan withdraw melalui `/withdraw`.
5. Pantau transaksi di `/transaction`.



