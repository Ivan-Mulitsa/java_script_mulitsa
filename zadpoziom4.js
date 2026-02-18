const uczniowie = [
{ imie: "Ola", punkty: 78 },
{ imie: "Jan", punkty: 45 },
{ imie: "Ania", punkty: 92 }
];
for(let i=0;i<uczniowie.length;i++){
    if(uczniowie.punkty>50){
        console.log(uczniowie.imie[i]);
    }
}
let srednia;
let suma=0;
for(let i=0;i<uczniowie.length;i++){
    suma=suma+uczniowie.punkty;
}
srednia=suma/uczniowie.length;


let liczby=[1, 2, 2, 3, 4, 4, 5];

function usuwaDuplikaty(tablica){
let wynik=[];
for(let i=0;i<liczby.length;i++){
    if(!wynik.includes(tablica[i])){
      wynik.push(tablica[i]);
    }
}
return wynik;
}

liczby.usuwaDuplikaty;

const zakupy=["chleb", "mleko", "ser", "chleb", "masło"];
let licznik={};
for(const produkt of zakupy){
    licznik[produkt]=(licznik[produkt]||0)+1;
}

console.log(licznik);