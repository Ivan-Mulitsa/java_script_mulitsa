let liczby=[1,2,3,4,5];
liczbyDoKwadratu=[];
for(let i=0;i<liczby.lenght;i++){
liczbyDoKwadratu.push(liczby[i]*liczby[i])
}

for(let i=0;i<liczbyDoKwadratu.lenght;i++){
console.log(liczbyDoKwadratu[i]+', ');
}

const imiona=["Anna", "Jan", "Krzysztof", "Ola"];
const imionaWiekszeOd3=imiona.filter(imie=>imie.length>3);
for(let i=0;i<imionaWiekszeOd3.lenght;i++){
console.log(imionaWiekszeOd3[i]+', ');
}

let licz=[5, 10, 15];
const wynik =licz.join(" - ");
console.log(wynik);