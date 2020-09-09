// menangkap pilihan player
var tanya = true;
while (tanya) {
    var p = prompt('silahkan pilih : gajah, semut, orang');




    // menangkap pilihan dari komputer
    var comp = Math.random();
    console.log(comp);
    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp > 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }


    // generate bilangan random
    var hasil = '';
    // menentukan rules
    if (p == comp) {
        hasil = 'Seri !';
    } else if (p == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'Menang !';
        //} else {
        //    hasil = 'Kalah !';
        //}
        hasil = (comp == 'orang') ? 'Menang !' : 'Kalah !';
    } else if (p == 'orang') {
        hasil = (comp == 'gajah') ? 'Kalah' : 'Menang !';
    } else if (p == 'semut') {
        hasil = (comp == 'orang') ? 'Kalah' : 'Menang !';
    }


    // tampilkan hasil
    alert('Kamu memilih ' + p + ' dan komputer memilih :' + comp + '\nMaka hasilnya kamu ' + hasil);
    tanya = confirm('lagi ?');
}

alert('Terima kasih sudah bermain');