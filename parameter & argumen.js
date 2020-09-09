function tambah(a, b) {
    return a + b;
}

function kali(a, b) {
    return a * b;
}

// var a = parseInt(prompt('Nilai 1 :'));
// var b = parseInt(prompt('Nilai 2 :'));
// var hasil = tambah(a * 3, b * 6);

var hasil = kali(tambah(1, 2), tambah(3, 4));
console.log(hasil);