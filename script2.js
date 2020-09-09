/* alert('Hello World'); *
var nama = prompt('Masukkan nama anda :');
alert('Halo' + ' ' + nama);

var tes = confirm('Apakah kamu yakin ?');
if (tes == true) {
    alert('user menekan OK');
} else {
    alert('user menekan CANCEL');
} */

alert('Selamat datang');
var lagi = true;

while (lagi === true) {
    var nama = prompt('Masukkan Nama :');
    alert('Halo ' + nama);
    lagi = confirm('coba lagi ?');
}

alert('Terima Kasih');