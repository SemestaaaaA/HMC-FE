function hitungDiskon(harga, diskonPersen) {
    let potongan = harga * (diskonPersen / 100);
    let hargaSetelahDiskon = harga - potongan;
    return hargaSetelahDiskon;
}

let hargaAwal = 900000;
let diskon = 25;  //ini persen ini(%)
let hargaAkhir = hitungDiskon(hargaAwal, diskon);
console.log(`Harga setelah diskon: Rp${hargaAkhir}`); 