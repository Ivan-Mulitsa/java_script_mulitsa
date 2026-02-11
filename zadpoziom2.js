let oceny=[2,3,5,4,1,5];
let suma=0;
let srednia;
for(let i=0;i<liczby.length;i++){
  suma+=liczby[i];
}
srednia=suma/oceny.length;


for(let i=0;i<liczby.length;i++){
  if(oceny[i]>3){
    console.log(ocena[i]+',')
  }
}

function parzyste(tablica){
    let wynik=[];
    for(let i=0;i<tablica.length;i++){
        if(tablica[i]%2==0){
            wynik.push(tablica[i])
        }
    }
return wynik;
}

jezyki=["HTML","CSS","JS"];
reverse=[];
for(let i=jezyki.length-1;i>=0;i--){
    reverse.puch(jezyki[1])
}
console.log(reverse)

function czyJest(tablica,element){
    for(let i=0;i<tablica.length;i++){
  if(tablica[i]==element){
    return true;
  }
}
return false;
}