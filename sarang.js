var s = '';
for (var i = 10; i > 0; i--) {
    for (var c = 0; c < i; c++) {
        s += '*';
    }
    s += '\n';
}
console.log(s);