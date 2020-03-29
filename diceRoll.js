// let randomNumbers = [];
// let x = null;
// for (let i = 0; i < 600; i++) {
//     const randomNumber = () => Math.floor(Math.random() * 6 + 1);
//     randomNumbers.push(randomNumber());
// }
// const sameNumber = (number) => x = randomNumbers.filter(item => item === number).length;
// console.log(`1 = ${sameNumber(1)} 
// // 2 = ${sameNumber(2)} 
// // 3 = ${sameNumber(3)} 
// // 4 = ${sameNumber(4)} 
// // 5 = ${sameNumber(5)} 
// // 6 = ${sameNumber(6)}`);



// Alternative Second


// randomNumbers = [];
// const dice = [1, 2, 3, 4, 5, 6];
// for (let i = 0; i < 600; i++) {
//     const randomNumber = () => Math.floor(Math.random() * dice.length + 1);
//     randomNumbers.push(randomNumber());
// }
// const sameNumber = (number) => x = randomNumbers.filter(item => item === number).length;
// const result = dice.map(x => `${dice.indexOf(x) + 1} :  ${sameNumber(x)}`);
// result.forEach(x => console.log(x));





// Alternative third//

const time1 = performance.now();

const rolldice = (count) => {
    let dice = {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0
    };
    // verdiğin sayıya göre zar atıp gelenleri hesaplar ve sonuç objesini yazdırır.
    for (i = 0; i < count; i++) {
        let diceface = Math.ceil(Math.random() * 6);
        dice[diceface] = dice[diceface] + 1;
    }
    console.log(dice);
    return {
        ...dice
    };
};

const printRolls = (rolls) => {
    // bu da kendisine verdiğin zar atma sonucunu ekrana yazdırır.
    for (let [key, value] of Object.entries(rolls)) {
        console.log(`Zar ${rolls[key]} kez ${key} geldi`);
    };
};

let rol = rolldice(600);
printRolls(rol);


const time2 = performance.now();
console.log(`${time2-time1}.toFixed(2)`);
/////