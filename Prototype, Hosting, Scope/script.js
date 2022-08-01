// ====== LATIHAN PROTOTYPE, HOISTING, SCOPE ======

/* function init() {
    let nama = 'Tifani';
    let umur = '20';
    return function(nama) {

        console.log(nama);
    }

    tampilNama();
}
 
let panggilNama = init();
panggilNama('Tifani');
panggilNama('Tifani');  */
 
/* function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

let selamatPagi = ucapkanSalam('Pagi');
let selamatSiang = ucapkanSalam('Siang');
let selamatMalam = ucapkanSalam('Malam');

console.dir(selamatMalam('Tifani'));
 */

/* // ====== PRAKTEK CLOSURE ======

let add = (function() {
    let counter = 0;
    return function() {
        return++ counter;  
    } 
})();

console.log(add());
console.log(add());
console.log(add()); */

// THIS PADA ARROW FUNCTION - CONSTRUCTION

/* const Siswa = function() {
    this.nama = 'Tifani';
    this.umur = '20';
    this.sayHello = () => {
        console.log(`Halo ${this.nama}, umur kamu ${this.umur}`);
    }

    setInterval(() => {
        console.log(this.umur++);
    }, 100);
}
const tifani = new Siswa(); */

// MEMBUAT BOX DINAMIS DENGAN JS CSS

const box = document.querySelector('.box');
box.addEventListener('click', function () {
    let satu = 'size';
    let dua = 'caption';

    if (this.classList.contains(satu)) {
        [satu,dua] = [dua, satu];
    }
    this.classList.toggle(satu);
    setTimeout( () => {
        this.classList.toggle(dua);
    }, 600);
});

