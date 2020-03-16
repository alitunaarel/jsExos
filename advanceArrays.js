const dizi = [1,2,3,4,10,15]
const sayilarim = [];
const teams = ["Turkiye Superligi","Galatasaray 73","Fenerbahce: 52","Besiktas","Trabzonspor","Bursaspor"]


dizi.forEach(number => {
sayilarim.push(number*2);    
   
});

console.log(sayilarim); 

teams.forEach(FootballTeams => {
    console.log(FootballTeams)
})


//MAP

const mapDizi = dizi.map(sayi => {
    return {
        a: sayi*2,
        b: sayi*3
    }
})
console.log(mapDizi)

const mapTeam = teams.map(teamss => teamss);
console.log(mapTeam);


//Filter


const num =[1,2,3,4,5,6,7,8,9];

const numArrays = num.filter(nums => nums%2==1)
console.log(numArrays);


//reduce

const sum = num.reduce((acc, num)=>{
    return acc + num;
})

console.log(sum)





