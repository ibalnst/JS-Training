var jmlAngkot = 10;
var angkotBeroperasi = 8;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
    console.log('Angkot No ' + noAngkot + ' beroperasi dengan baik');
    noAngkot++;
}

for (var angkotBeroperasi = angkotBeroperasi + 1; angkotBeroperasi <= jmlAngkot; angkotBeroperasi++) {
    console.log('Angkot No ' + angkotBeroperasi + ' sedang tidak beroperasi.');
}