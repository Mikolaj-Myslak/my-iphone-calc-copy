// Łatwiejszcze czyszczenie konsoli
document.querySelector(".top-bar").addEventListener("click", ()=> {console.clear()});
// dodanie konsoli do wszystkich przycisków


// DODANIE ELEMENTów DOM DO JS
// Dodanie przycisków jako stałych
const allButtons = document.querySelectorAll(".keyboard__button");
const autoCorrectButton = allButtons[0];
const plusMinusButton = allButtons[1];
const percentageButton = allButtons[2];
const divisionButton = allButtons[3];
const sevenButton = allButtons[4];
const eightButton = allButtons[5];
const nineButton = allButtons[6];
const multiplicationButton = allButtons[7];
const fourButton = allButtons[8];
const fiveButton = allButtons[9];
const sixButton = allButtons[10];
const subtractionButton = allButtons[11];
const oneButton = allButtons[12];
const twoButton = allButtons[13];
const threeButton = allButtons[14];
const additionButton = allButtons[15];
const zeroButton = allButtons[16];
const dotButton = allButtons[17];
const equationButton = allButtons[18];
// Dodanie części wyświetlacza jako stałych
const displayerMath = document.querySelector(".displayer__math");
const displayerResult = document.querySelector(".displayer__result");

// PRZYPISANIE WYDARZEŃ PRZYCISKOM
// Przypisanie wydarzeń związanych z kategorią przycisku
// calcOptionFn
autoCorrectButton.addEventListener("click", calcOptionsFn);
plusMinusButton.addEventListener("click", calcOptionsFn);
percentageButton.addEventListener("click", calcOptionsFn);
// operatorsFn
multiplicationButton.addEventListener("click", operatorsFn);
subtractionButton.addEventListener("click", operatorsFn);
divisionButton.addEventListener("click", operatorsFn);
additionButton.addEventListener("click", operatorsFn);
equationButton.addEventListener("click", operatorsFn);
// numbersFn
sevenButton.addEventListener("click", numbersFn);
eightButton.addEventListener("click", numbersFn);
nineButton.addEventListener("click", numbersFn);
fourButton.addEventListener("click", numbersFn);
fiveButton.addEventListener("click", numbersFn);
sixButton.addEventListener("click", numbersFn);
oneButton.addEventListener("click", numbersFn);
twoButton.addEventListener("click", numbersFn);
threeButton.addEventListener("click", numbersFn);
zeroButton.addEventListener("click", numbersFn);
dotButton.addEventListener("click", numbersFn);

sevenButton.addEventListener("click", numbersFn);
eightButton.addEventListener("click", numbersFn);
nineButton.addEventListener("click", numbersFn);
fourButton.addEventListener("click", numbersFn);
fiveButton.addEventListener("click", numbersFn);
sixButton.addEventListener("click", numbersFn);
oneButton.addEventListener("click", numbersFn);
twoButton.addEventListener("click", numbersFn);
threeButton.addEventListener("click", numbersFn);
zeroButton.addEventListener("click", numbersFn);
dotButton.addEventListener("click", numbersFn);
// Przypisanie wydarzeń dla konkretnych działań
autoCorrectButton.addEventListener("click", autoCorrectFn);
plusMinusButton.addEventListener("click", plusMinusFn);
percentageButton.addEventListener("click", percentageFn);
// divisionButton.addEventListener("click", divisionFn);
// multiplicationButton.addEventListener("click", multiplicationFn);
// subtractionButton.addEventListener("click", subtractionFn);
// additionButton.addEventListener("click", additionFn);
equationButton.addEventListener("click", equationFn);
// nineButton.addEventListener("click", nineFn);
// eightButton.addEventListener("click", eightFn);
// sevenButton.addEventListener("click", sevenFn);
// sixButton.addEventListener("click", sixFn);
// fiveButton.addEventListener("click", fiveFn);
// fourButton.addEventListener("click", fourFn);
// threeButton.addEventListener("click", threeFn)
// twoButton.addEventListener("click", twoFn);
// oneButton.addEventListener("click", oneFn);
// zeroButton.addEventListener("click", zeroFn);
// dotButton.addEventListener("click", dotFn);


//TESTY



let currentNumberShadowArray = [];
let currentNumberArray = [];

let currentNumber = 0;
let operator = null;
let firstNumber = null;
let secondNumber = null;

let result = null;

// FUNKCJE
// Funkcja zmieniająca currentNumberArray na currentNumber

// Funkcje 1 stopnia
function calcOptionsFn(){
    console.log("funkcja przycisków opcji kalkulatora");
}
// Przypisanie pierwszej liczby, poznanie operatora, przypisanie drugiej liczby, dokonanie równania
function operatorsFn(){
    // Oznaczenie liczb odnośnie aktualnie wpisanej liczby w kalkulatorze
    operator = this.textContent;
    if (firstNumber===null){
        firstNumber = currentNumber;
    } 
    //Poznanie operatora
    
    
    currentNumberArray = [];

    console.clear();
    console.log(currentNumber + " currentNumber");
    console.log(firstNumber + " firstnumber");
    console.log(secondNumber + " secondNumber");
    console.log(result + " result");
}
function equationFn(){
        if (firstNumber === null){
            return;
        } else if (firstNumber != null){
            secondNumber = currentNumber;
        }

        switch (operator){
            case "/":
                result = firstNumber/secondNumber;
                break;
            case "x":
                result = firstNumber*secondNumber;
                break;
            case "-":
                result = firstNumber-secondNumber;
                break;
            case "+":
                result = firstNumber+secondNumber;
                break;
        }
    // firstNumber = null;
    // secondNumber = null;
}

// STWORZENIE AKTUALNIE WYŚWIETLANEJ LICZBY
function numbersFn() {
    // Resetowanie, by każdorazowo na koniec wyświetlić właściwą liczbę
    let shadowNumber = 0;
    let shadowArrayLessThanZero = [];
    let shadowArrayMoreThanZero = [];
    let shadowArrayLessThanZeroReverse = [];
    // Wrzucenie do tablicy currentNumberArray liczb i kropki z przycisków
    currentNumberArray.unshift(this.textContent);

    if (currentNumberArray.includes(".")) {

        shadowArrayLessThanZero = currentNumberArray.slice(0,currentNumberArray.indexOf("."));
        shadowArrayMoreThanZero = currentNumberArray.slice(currentNumberArray.indexOf(".")+1, currentNumberArray.length);
        dotButton.removeEventListener("click", numbersFn);
    } else {
        shadowArrayMoreThanZero = currentNumberArray.slice(0, currentNumberArray.length);
    }
    // Konwertowanie tablicy z liczbami i kropką na właściwą liczbę odpowiadającom chęci użytkownika na bieżąco
    shadowArrayLessThanZero.forEach(function(value, index){
        shadowArrayLessThanZeroReverse.unshift(value);
    });
    shadowArrayLessThanZeroReverse.forEach(function(value, index){
        shadowArrayLessThanZeroReverse[index] = Number(value) / 10**(index+1);
    });
    shadowArrayMoreThanZero.forEach(function(value, index){
        shadowArrayMoreThanZero[index] = Number(value) * 10**index;
    });
    shadowArrayMoreThanZero.forEach(function(value){
        shadowNumber += value;
    });
    shadowArrayLessThanZeroReverse.forEach(function(value){
        shadowNumber += value;
    });
    shadowNumber =shadowNumber.toFixed(shadowArrayLessThanZero.length);
    currentNumber = Number(shadowNumber);
}
//Funkcje 2 stopnia
// Opcje kalkulatora
function autoCorrectFn(){
    console.log("Funkcja autokorekty");
    currentNumberArray = [];
    currentNumber = 0;
    firstNumber = null;
    secondNumber = null;

    displayerMath.textContent = "";
    displayerResult.textContent = 0;
}
function plusMinusFn(){
    console.log("Funkcja plusaminusa");
}
function percentageFn(){
    console.log("Funkcja procenta");
}

// Operacje
// function divisionFn(){
//     console.log("Funkcja dzielenia");
// }
// function multiplicationFn(){
//     console.log("Funkcja mnozenia");
// }
// function subtractionFn(){
//     console.log("Funkcja odejmowania");
// }
// function additionFn(){
//     console.log("Funkcja dodawania");
// }


// Liczby
// function sevenFn(){
//     console.log("Funkcja 7");
//     currentNumber = 7;
// }
// function eightFn(){
//     console.log("Funkcja 8");
//     currentNumber = 8;
// }
// function nineFn(){
//     console.log("Funkcja 9");
//     currentNumber = 9;
// }
// function fourFn(){
//     console.log("Funkcja 4");
//     currentNumber = 4;
// }
// function fiveFn(){
//     console.log("Funkcja 5");
//     currentNumber = 5;
// }
// function sixFn(){
//     console.log("Funkcja 6");
//     currentNumber = 6;
// }
// function oneFn(){
//     console.log("Funkcja 1");
//     currentNumber = 1;
// }
// function twoFn(){
//     console.log("Funkcja 2");
//     currentNumber = 2;
// }
// function threeFn(){
//     console.log("Funkcja 3");
//     currentNumber = 3;
// }
// function zeroFn(){
//     console.log("Funkcja 0");
//     currentNumber = 0;
// }
// function dotFn(){
//     console.log("Funkcja kropki");
// }
for (button of allButtons){
    button.addEventListener("click", ()=>{
        console.clear();
        console.log(currentNumber + " currentNumber");
        console.log(firstNumber + " firstnumber");
        console.log(operator + " operator");
        console.log(secondNumber + " secondNumber");
        console.log(result + " result");
    });
}