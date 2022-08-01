const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// filter angka >= 3

/* dengan looping
const newAngka = [];
 for (let i = 0; i < angka.length; i++) {
    if(angka[i] >= 3) {
        newAngka.push(angka[i]);
    }
}
console.log(newAngka); */

/* menggunakan filter
const newAngka = angka.filter(a => a >= 3);
console.log(newAngka);
 */

//MAP -> kali semua angka dengan 2

/* const newAngka = angka.map(a => a * 2);
console.log(newAngka); */

//REDUCE -> Jumlah semua angka
/* 
const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(newAngka); */

//CHAINING -> Cari angka yang > 5 * 3 jumlahkan
const hasil = angka.filter(a => a> 5)
    .map(a => a * 3)
    .reduce((acc, cur) => acc + cur);
console.log(hasil);