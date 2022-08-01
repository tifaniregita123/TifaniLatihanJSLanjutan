//contoh spread operator '...'
const barang = ['Sabun', 'Odol', 'Pewangi'];
console.log(...barang[0]);

//bisa untuk menghubungkan dua array
const liFurniture = document.querySelectorAll('li')
const furniture = [...liFurniture].map(m => m.textContent);
console.log(liFurniture);

//spreadlist untuk hover nama
const nama = document.querySelector('.nama');
const huruf = [...nama.textContent].map(h => `<span> ${h} </span>`).join('');
nama.innerHTML = huruf;