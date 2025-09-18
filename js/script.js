'use strict'

// let fname = 'nino'; //string
// let age = 25; //number
// let userStatus = true; //boolean
// let x = null; //null
// let y; //  undefined


// console.log(age);

// console.log(typeof fname);

// let item1 = 10;
// let item2 = 5;
// let sum = item1 + item2;
// console.log(sum);


// let str = "good";
// let str2 = "morning";
// let strResult = str + " " + str2;
// console.log(strResult);


// let item3 = 10;
// item3 = item3 * 20;
// item3 *= 20
// console.log(item3)



// console.log(5 == '5');  //true ადარებს მხოლოდ ცვლადის მნიშვნელობებს 
// console.log(5 === '5'); //false

// != არ უდრის
// !=== მკაცრად არ უდრის - არც მნიშნელობები და არც ტიპები


// console.log(true && false);
// console.log(false && true);
// console.log();

//type coersion - როდესაც გვინდა გადავაკეთოთ ერთი ტიპის ცვლადი მეორე ტიპად
//explicit
//string ფუნქცია
// let element1 = string(14);
// console.log(typeof element1);

// let element2 = Number('15')
// console.log(typeof element2);


//number ფუნქცია
// let element3 = Number(false);
// console.log(element3); //0
// let  element4 = Number(undefined);
// console.log(element4); //NaN
// let element5 = Number(null);
// console.log(element5); //0
// let element6 = Number(true);
// console.log(element6); //1
// let element7 = Number('morning');
// console.log(element7); //NaN



//explicit
// let element1 = String(14);
// console.log(typeof element1);
// let element2 = 'girl'
// console.log(element2);
// let element3 = Number('15');
// console.log(typeof element3);

// let element4 =Number(false)
// console.log(element4);

let x = 21;

if (x > 20) {
    console.log("hello")
} else if (x > 13 && x < 14) {
    console.log('hello');
} else if (x > 10 || x < 12) {
    console.log('good evening');
} else if (x > 20) {
    console.log("good evening2");
}
else {
    console.log("error");
}

//ternery operator
let conditionResult2 = x > 30 ? "hello" : x >= 13 && x < 14 ? 'hi' : x > 10 && x < 12 ? "good evening" : x > 20 ? "good" : 'error'
console.log(conditionResult2);


let newNumber = 30;
if (newNumber > 15) {
    console.log('hello 1');
} else {
    console.log('error');
}

let conditionResult = newNumber > 15 ? "hello1" : "error";
console.log(conditionResult);



//prompt function
let promptResult =Number(prompt("enter your age")) ;
console.log(promptResult);

// if (promptResult % 2 === 0){
//     console.log('luwi');
    
// }else{
//     console.log('kenti');
    
// }
 


if (promptResult % 2 === 1){
    console.log('kenti');
    
}else{
    console.log('luwi');
    
}

let promptCondition = promptResult % 2 === 0 ? "luwi" : "kenti"
console.log(promptCondition);

