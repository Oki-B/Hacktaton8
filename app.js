const express = require('express');
const app = express();
const path = require('path');
const session = require('express-session');


// Menyajikan file statis

// Set view engine untuk EJS
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Rute untuk menampilkan halaman login
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/styles', express.static(path.join(__dirname, 'styles')));
app.use('/scripts', express.static(path.join(__dirname, 'scripts')));



app.use(session({
  secret: 'mySecretKey', // Kunci untuk mengenkripsi session
  resave: false,         // Jangan menyimpan ulang session jika tidak ada perubahan
  saveUninitialized: false, // Simpan session meskipun belum ada data
  cookie: { 
      secure: false,
      samesite: true //untuk secutiry attack
      
   } // Untuk HTTPS, ubah menjadi true
}));

app.use("/", require("./Routers"))

// Mulai server
app.listen(3000, () => {
  console.log('Server berjalan di http://localhost:3000');
});
