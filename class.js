// const productObj = {
//     add : function(){
//         console.log(this);
//     }
// }

// productObj.add();


class Personel {

    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    add() {
       console.log(`Personal added : ${this.name} ${this.surname}`)
    }
}

const personel = new Personel("Lionel", "Messi")

personel.add();

personel.name = "oranldo"
console.log(personel.name);