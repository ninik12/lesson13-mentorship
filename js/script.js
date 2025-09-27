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
// let promptResult =Number(prompt("enter your age")) ;
// console.log(promptResult);

// if (promptResult % 2 === 0){
//     console.log('luwi');
    
// }else{
//     console.log('kenti');
    
// }
 


// if (promptResult % 2 === 1){
//     console.log('kenti');
    
// }else{
//     console.log('luwi');
    
// }

// let promptCondition = promptResult % 2 === 0 ? "luwi" : "kenti"
// console.log(promptCondition);



var income = 500
if (income < 200){
    console.log('below average salary');
} else if (income >= 200 && income <= 400){
    console.log('average salary');
} else {
    console.log("pretty good salary");
}

var income = 300;
switch (income) {
    case 100 : console.log('income is 100$');
    break;
    case 200 : console.log('income is 200$');
    break;
    case 300 : console.log('income is 300$');
    break;
}

//ternery operator
// var a = 1
// let b = 2

// if (a < b){
//     console.log(a + b);
// }else {
//     a - b
// }

// let result = a < b ? a + b : a - b;
// console.log(result);

// let num = 1;
// do{
//     console.log(num * num);
//     num++;
// }while (num < 10) 


//     function display(){
//         document.write("this is our first function")
//     }
//     // display()

//     let number1Function = function(){
//         document.write("js function")
//     }
//     number1Function()

//     function goodMorning(){
//         document.write("good morning")
//     }
//     function goodEvening(){
//         document.write("good evening")
//     }

//     let message1 = goodMorning
//     message1()
//     let message2 = goodEvening
//     message2()


// function display(x){
//     let z = x * x;
//     document.write(x + " " + "square equals" + " " + z)
// } 
// display(5)

// let numArray = [1, 2, 3, 4, 5, 6, 7]
// function calculate(x){
//     let result =x * x;
//     console.log(result);
// }
// numArray.forEach((element)=> calculate(element))
// for (let el of numArray){
//     calculate(el)
// }

// let y = 5;
// let z = square(y)

// document.write(y + "square" + z)
// function square(x){
//     return x * x
// }


function displayMessage (x, func){
    let message = func(x)
    document.write(message)
}
function welcomeMessage(time){
    if(time < 12){
        return "good morning"
    } else {
        return "good evening"
    }
}

displayMessage(13, welcomeMessage)


function getComputerChose(){
    const choices =["rock", "paper", "scissors"]
    const randomIndex = Math.floor(Math.random() * choices.length)
    return choices[randomIndex]
}

function calculateWinner(playerChose, ComputersChoice){
    alert("final choices " + playerChose + " " + ComputersChoice )

}

function startGame(){
    const playerChose = prompt("choose rock, paper, scissors")
    const ComputersChoice = getComputerChose()
    alert("Computer chose:" + ComputersChoice)
    calculateWinner(playerChose, ComputersChoice)
    alert(playerChose + ComputersChoice)
}

startGame()