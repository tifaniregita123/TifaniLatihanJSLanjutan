//for ... of

const siswa = ['Tifani', 'Wendi', 'Zainy'];
for (const s of siswa ) {
    console.log(s);
} 

const pelanggan = ['Putri', 'Dinar', 'Dimas'];
for (const [i, p] of pelanggan.entries() ) {
    console.log(`${p} adalah pelanggan dengan id ke-${i + 1}`);
}

//NodeList
const liNama = document.querySelectorAll('.nama');
for (n of liNama) {
    console.log(n.innerHTML);
}

function jumlahAngka() {
    let jumlah = 0;
    for (a of arguments) {
        jumlah += a;
    }
    return jumlah;
}
console.log(jumlahAngka(1, 2, 3, 4, 5));

//for ...in
const murid = {
    nama: 'Putri',
    umur: `20 tahun`,
    email: 'putri@gmail.com'
}

for (m in murid) {
    console.log(murid[m]);
}