let saldo = 0
let updateTerakhir = null

function updateSaldo(){
    const input = prompt("Masukkan saldo: ")
    if (input === null){
    alert("Input dibatalkan 👀")
    return
    }

    const angka = parseFloat(input)


    if(isNaN(angka)){
    alert("Format angka salah 😅, coba lagi!")
    }

    saldo = angka
    updateTerakhir = new Date().toLocaleString()

    alert(`Saldo telah diperbaharui! 🤑
    Saldo baru: Rp ${saldo}
    Update terakhir: ${updateTerakhir}`)
}

updateSaldo()
