const luasLingkaran = new Function('r','console.log("Luas lingkaran: ", 3.14*r**2)')
function luasSegitiga(a,t){
    console.log("Luas segitiga: ", 1/2*a*t)
}
const luasPersegiPanjang = (p,l) =>{
    console.log("Luas persegi panjang: ", p*l)
}
function luasJajargenjang(a,t){
    console.log("Luas jajargenjang: ", a*t)
}
luasLingkaran(7)
luasSegitiga(2,4)
luasPersegiPanjang(4,3)
luasJajargenjang(5,4)

let nama = prompt("Masukkan nama karyawan: ")
let gajiBulanan = parseFloat(prompt("Masukkan gaji per bulan: "))
let hariMasuk = parseInt(prompt("Masukkan jumlah hari masuk kerja: "))

let gajiHarian = gajiBulanan / 30
let totalGaji = gajiHarian * hariMasuk

alert(
    "Nama: " + nama +
    "\nGaji Bulanan: Rp." +gajiBulanan.toLocaleString() +
    "\nHari Masuk: " + hariMasuk +
    "\nTotal Gaji: Rp." + totalGaji.toLocaleString()
)
