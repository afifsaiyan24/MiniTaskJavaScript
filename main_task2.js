const angka = [4,2,8,32,16]

console.log("Loop FOR:")
let totalFor = 0

for (let f = 0; f < angka.length; f++){
    console.log(angka[f])
    totalFor+= angka[f]
}

console.log("Jumlah isi array:", angka.length)
console.log("Total nilai array(FOR):", totalFor)

console.log("\nLoop WHILE:")
let w = 0
let totalWhile = 0

while (w < angka.length){
    console.log(angka[w])
    totalWhile += angka[w]
    w++
}

console.log("Jumlah isi array:", angka.length)
console.log("Total nilai array(WHILE):", totalWhile)

console.log("\nLoop DO...WHILE:")
let d = 0
let totalDo = 0

do{
    console.log(angka[d])
    totalDo += angka[d]
    d++
} while (d < angka.length)

console.log("Jumlah isi array:", angka.length)
console.log("Total nilai array (DO...WHILE):", totalDo)