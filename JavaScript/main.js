let x=+prompt("Please Enter The first Number ....")
let y=+prompt("Please Enter The second Number ....")
let calc=prompt("Please Select One of Operands (+ - * / %)")
switch (calc){
    case "+":{
        document.querySelector("h1").innerHTML=`Your Answer is ${x + y}`
        break;
    }
    case "-":{
        document.querySelector("h1").innerHTML=`Your Answer is ${x - y}`
        break;
    }
    case "*":{
        document.querySelector("h1").innerHTML=`Your Answer is ${x * y}`
        break;
    }
    case "/":{
        document.querySelector("h1").innerHTML=`Your Answer is ${x / y}`
        break;
    }
    case "/":{
        document.querySelector("h1").innerHTML=`Your Answer is ${x % y}`
        break;
    }
    default:{
        document.querySelector("h1").innerHTML="!Please Select the right Command!"
    }
}