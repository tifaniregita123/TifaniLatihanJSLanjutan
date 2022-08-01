//Promise
//contoh 1
let ditepati = true;
const janji1 = new Promise((selesai, tolak) => {
    if(ditepati) {
        selesai(`Janji telah ditepati...`);
    }else {
        tolak(`Ingkar Janji...`)
    }
});

janji1
    .then(response => console.log(`OK! : ` + response))
    .catch(response => console.log(`NOT OK! : ` + response));

//contoh 2
let sudahDitepati = false;
const  janji2 = new Promise((resolve, reject) => {
    if(sudahDitepati){
        setTimeout(() => {
            resolve(`Ditepati setelah beberapa waktu!`)
        }, 2000);
    } else {
        setTimeout(() => {
            reject(`Tidak ditepati setalah beberapa waktu!`);
        }, 2000);
    }
});

console.log(`mulai`);
janji2
    .finally(() => console.log(`selesai menunggu!`))
    .then(response => console.log(`OK! : ` + response))
    .catch(response => console.log(`NOT OK! : ` + response));
console.log(`selesai`);

//Async Await
function cobaPromise() {
    return new Promise(resolve => { 
        setTimeout(() => {
            resolve(`beres`);
        }, 2000);
    });
}

async function cobaAsync() {
    const test = await cobaPromise();
    console.log(test);
}

cobaAsync();