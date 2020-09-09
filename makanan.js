var item = prompt('Masukkan nama makanan / minuman : \n (cth: nasi,daging,susu,hamburger,softdrink)');

switch (item) {
    case 'nasi':
    case 'daging':
    case 'susu':
        alert('makanan / minuman sehat !');
        break;
    case 'hamburger':
    case 'softdrink':
        alert('makanan / minuman tidak sehat !');
        break;
    default:
        alert('Anda memilih makanan yang salah !');
}