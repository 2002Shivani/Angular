let array = [90,12,44,6,4];
let index = 0;
let sum =0;
while(index<array.length){
    sum+=array[index];
    index++;
}
document.write("Sum of Array:"+sum);

index =1;
let item = array[0];
while(index<array.length){
    if(array[index]>item){
        item = array[index];
    }
    index++;
}
document.writeln("<br>Largest Element of Array:"+item);


let rev = [];
for(let i = 0 ;i< array.length;i++){
   rev[array.length-i]=array[i];
}
document.write("<br> Reverse Array is: ["+rev+"]");

let duplicateElement = [1,1,4,3,2,2];
let newArray =[];

// let s = new Set(duplicateElement);

duplicateElement.forEach(element => {
    if(!newArray.includes(element)){
        newArray.push(element);
    }
});
document.write("<br>Array Contains Duplicates:"+duplicateElement);
document.write("<br>Array doesn't contains Duplicates:"+newArray);