var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang) {
    // Untuk menngecek nama penumpang dalam array
    if (penumpang.length == 0) {
        penumpang.push(namaPenumpang);
        return penumpang;
    } else {
        // untuk menambahkan nama penumpang.
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == undefined) {
                penumpang[i] = namaPenumpang;
                return penumpang;
            }
            // Untuk mengecek nama penumpang yang sama didalam angkot.
            else if (penumpang[i] == namaPenumpang) {
                console.log(namaPenumpang + "Penumpang sudah ada didalam angkot.");
            }
            // Untuk menambahkan penumpang.
            else if (i == penumpang.length - 1) {
                penumpang.push(namaPenumpang);
                return penumpang;
            }
        }
    }
};

var hapusPenumpang = function(namaPenumpang, penumpang) {
    // Cek penumpang angkot masih kosong
    if (penumpang.length == 0) {
        console.log('Angkot masih kosong');
        return penumpang;
    } else {
        // untuk menghapus penumpang dan memeriksa penumpang.
        for (var i = 0; i < penumpang.length; i++) {
            if (penumpang[i] == namaPenumpang) {
                penumpang[i] = undefined;
                return penumpang;
            } else if (i == penumpang.length - 1) {
                console.log(namaPenumpang + ' tidak ada didalam angkpt');
                return penumpang;
            }
        }
    }
};