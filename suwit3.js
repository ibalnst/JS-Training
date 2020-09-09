// menangkap angka dari pemain 
var player = parseInt(prompt('Tebak angka 1 - 10 dengan 3 kali kesempatan saja'));

// untuk generate angka
var x = true;
var kesempatan = 3;
var comp = Math.floor(Math.random() * 10);
while (x) {
    for (kesempatan = 3; kesempatan >= 1; kesempatan--) {
        if (player == comp) {
            alert('tebakan anda benar');
        } else if (player <= comp) {
            prompt('tebakan anda salah, Silahkan masukkan angka lagi' + '\nSisa Kesempatan ' + kesempatan);
        } else if (player >= comp) {
            prompt('tebakan anda salah, Silahkan Masukkan angka lagi' + '\n Sisa Kesempatan ' + kesempatan);
        } else {
            alert('Kesempatan sudah habis, Terima kasih telah bermain.');
        }
    }
    // menampilkan hasil dan looping
    alert('GAME OVER !\nterima kasih sudah bermain');
    x = confirm('anda ingin bermain lagi ?');
}