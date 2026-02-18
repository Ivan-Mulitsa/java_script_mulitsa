const imiona=["Ivan","Tomek","Robert","Milosz","Kiril"];
console.log(imiona.length);
console.log(imiona[0]);
console.log(imiona[imiona.length-1]);


function suma(tablica){
    let wynik=0;
    for(let i=0;i<tablica.length;i++){

wynik+=tablica[i];

    }
return wynik;
}

let liczby=[3,7,1,9,4];
let max=liczby[0];
for(let i=0;i<liczby.length;i++){
    if(liczby[i]>max)
    {
        max=liczby[i];
    }
}
console.log(max);

let liczby2=[3,6,9,4,5];
liczby2.unshift(5);
liczby2.push(17);