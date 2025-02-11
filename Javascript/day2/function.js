function f1(num1,num2){
    return num1+num2;
}

let sum = f1(10,30);
console.log("Sum is :"+sum);

function f2(num1,num2){
    console.log("Substraction:"+ num1+num2);
    console.log("Substraction:"+(num1+num2));
    console.log(`Substraction: ${num1+num2}`);
}

f2(50,30);


function switchFun(choice){
    switch(choice){
        case 1:
            alert("In 1 Selected");
            break;
        case 2:
            alert("In 2 Selected");
            break;
        case 3:
            alert("In 3 Selected");
            break;
        default:
            alert("Not Selected");

    }
}

let num = Number(prompt("Enter Number 1-3"))
switchFun(num);
