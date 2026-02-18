

function drugaNajwieksza(arr){
let max=arr[0];
let maxDwa=arr[0];

for(let i=0;i<arr.length;i++){
    if(arr[i]>max){
        maxDwa=max;
        max=arr[i];
    }
    else if(arr[i]>maxDwa && arr[i]<max){
    maxDwa=arr[i];
    }
}
return maxDwa;
}
console.log(drugaNajwieksza([6,7,4,8]))

let liczby=[1, -3, 4, 0, -2, 7];
let mniejzera=[];
let wiecejzera=[];
for(let i=0;i<liczby.length;i++){
    if(liczby[i]>0){
        wiecejzera.push(liczby[i]);
    }
    else if(liczby[]){
        mniejzera.push(liczby[i]);
    }
}

for(let i=0;i<wiecejzera.length;i++){
    console.log(wiecejzera+", ")
}
for(let i=0;i<wiecejzera.length;i++){
    console.log(mniejzera+", ")
}