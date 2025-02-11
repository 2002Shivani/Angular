
console.log('Hellooo');
console.log("--------------Variable----------");
let namen ='shivani';
let number=43;
let inValid = true;
let nothing =null;
let empty;
console.log(namen+":"+typeof(namen));
console.log(number+":"+typeof(number));
console.log(inValid+":"+typeof(inValid));
console.log(nothing+":"+typeof(nothing));
console.log(empty+":"+typeof(empty));

console.log("--------------Object----------");
let Student={
    id:1001,
    name:"Johan",
    age:23
};
console.log(Student);

console.log("--------------List----------");

let numbers = [12,3,43,23];
console.log(numbers);

console.log("ID : "+Student.id);

let array =[
    { id:1003, name:"AbbA", ages:22},
    { id:1002, name:"BaaB", ages:12},
    { id:1004, name:"CddC", ages:27},
    { id:1006, name:"DccD", ages:4},
    { id:1005, name:"EffE", ages:20},
    { id:1009, name:"FeeF", ages:18}
]

for(let k =0;k<array.length-1;k++){

    if(array[k].ages >18){

        console.log(array[k]);
    }
}

let dic = [[1,3,2,3],[56,34,54]]
console.log(dic)
console.log(array)
console.log(array[0])
console.log(array[1].name)


let age = prompt("Enter Your age");

if(age>=18){
    
   alert("Go and Vote");
}
else{
    alert("Your are not eligible");
}


let tabel = prompt("Enter Number for tabel");
let i =1;
while(i<=10){
    console.log(tabel*i);
    i++;
}

let even =[];
let odd =[];

for(let j=0;j<=30;j++){
    if(j%2==0){
      even.push(j);
    }
    else{
        odd.push(j);
    }

}
console.log(even);
console.log(odd);



