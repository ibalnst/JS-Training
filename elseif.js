var jmlAngkot = 10;
var angkotBeroperasi = 6;
var angkot = 1;

for (var angkot = 1; angkot <= jmlAngkot; angkot++) {
    if (angkot <= angkotBeroperasi && angkot !== 5) {
        console.log('Angkot ' + angkot + ' Baik');
    } else if (angkot === 8 || angkot === 10 || angkot === 5) {
        console.log('Angkot ' + angkot + ' lembur');
    } else {
        console.log('Angkot ' + angkot + ' tidak Baik');
    }
}