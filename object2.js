// Membuat Object
// Object Literal

var mhs1 = {
    nama: "Muhammad Iqbal",
    nrp: '04910001',
    email: 'ibaldoci@gmail.com',
    jurusan: 'Teknik Informatika'
};

var mhs2 = {
    nama: "Liza Pratiwi",
    nrp: '04910002',
    email: 'pratiwi492@gmail.com',
    jurusan: 'Manajemen Ekonomi'
};

// Menggunakan function declaration
function buatObjectMahasiswa(nama, nrp, jurusan) {
    // Untuk menggunakan objeknya jangan lupa deklarisakn terlebih dahulu argumentnya
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Muhammad Iqbal', '09241111', 'ibaldoci@gmail.com', 'Teknik Informatika');

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

mhs4 = new Mahasiswa('dina', '011121', 'dina@ymail.com', 'manajemen ekonomi');