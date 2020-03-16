// function selam(){
//     console.log("merhaba");
// }

// selam();

const selamFonksiyonu = function selam(){
   console.log("Hosgeldin arifcigim") 
}

selamFonksiyonu();

const selamFonksiyonu2 = () =>  {
    console.log("yeni nesil fonksiyon")
}

selamFonksiyonu2();

const selam3 = (mesaj) => {
    console.log(mesaj)
}

selam3("buda parametreli olan");

var topla = (sayi1,sayi2)=>{
    return sayi1 +sayi2;
}

let toplam = topla(3,4);

console.log(toplam);