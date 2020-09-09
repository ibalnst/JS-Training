// manipulasi array

// 1. Menambah array

// var arr = [];
// arr[0] = "Muhammad";
// arr[1] = "Iqbal";
// arr[3] = "Nasution";
// console.log(arr);

// Menghapus isi array
// var arr = ["Muhammad", "Iqbal", "Nasution"];
// console.log(arr);

// Menampilkan isi array
// var arr = ["Muhammad", "Iqbal", "Nasution", "Andre"];
// for (var i = 0; i < arr.length; i++) {
//     console.log('Mahasiswa ke-' + (i + 1) + ':' + arr[i]);
// }

// Method Pada Array
// 1. Join

// console.log(arr.join('-'));

// 2.Push
// arr.push("Dinda");
// 3.Pop
// arr.pop();

// 4.Shift dan Unshift;
// arr.unshift("Bayu");
// arr.shift();
// console.log(arr.join());

// 5. Splice untuk menyisipkan array ditengah element
// splice(indexAwal,mauDihapusBerapa,elemenBaru1,elemenbaru2,dst...);
// arr.splice(1, 2, "Andrea", "Bimo");
// console.log(arr.join('-'));

// 6. Slice
// slice(awal,akhir);

// var arr2 = arr.slice(1, 4);
// console.log(arr2.join('-'));
// console.log(arr.join('-'));

// 7. foreach
// var arr = ["Andre", "Yudha", "Lesmana", "Dinda", "Andreas"];

// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }
// var cetak = function(y) {
//     console.log(y)
// }
// angka.forEach(cetak);

var nama = ["Andre", "Yudha", "Lesmana", "Dinda", "Andreas"];

// angka.forEach(function(e) {
//     console.log(e);
// });

// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke-' + i + ' adalah ' + e);
// });

// 7. Map

// var angka = [1, 2, 3, 4, 5, 6, 7, 8, ];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });
// console.log(angka2.join('-'));

// 8. Sort
// var angka = [1, 3, 4, 10, 20, 5, 8, 9, 2];
// angka.sort(function(a, b) {
//     return a - b;
// });
// console.log(angka.join('-'));

// 9. Filter
var angka = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var angka = angka.find(function(x) {
    return x > 5;
});
console.log(angka);