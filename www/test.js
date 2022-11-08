// Łatwiejszcze czyszczenie konsoli
document.querySelector(".top-bar").addEventListener("click", ()=> {console.clear()});

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
// Przypisanie wydarzeń dla konkretnych działań
autoCorrectButton.addEventListener("click", autoCorrectFn);
plusMinusButton.addEventListener("click", plusMinusFn);
percentageButton.addEventListener("click", percentageFn);
divisionButton.addEventListener("click", divisionFn);
multiplicationButton.addEventListener("click", multiplicationFn);
subtractionButton.addEventListener("click", subtractionFn);
additionButton.addEventListener("click", additionFn);
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

let currentNumber = null;
let currentNumberArray = [];
let shadowNumber = null;
let currentNumberShadowArray = [];
let currentNumberShadowArray2 = [];
let firstNumber = null;
let secondNumber = null;

// FUNKCJE
// Funkcja zmieniająca currentNumberArray na currentNumber

// Funkcje 1 stopnia
function calcOptionsFn(){
    console.log("funkcja przycisków opcji kalkulatora");
}
function operatorsFn(){
    console.log("funckja przycisków operacji");
}
function numbersFn() {
    // STWORZENIE AKTUALNIE WYŚWIETLANEJ LICZBY
    // Resetowanie, by każdorazowo na koniec wyświetlić właściwą liczbę
    shadowNumber = 0;
    currentNumberShadowArray = [];
    // Wrzucenie do currentNumberArray liczby z przycisku
    currentNumberArray.unshift(Number(this.textContent));
    console.log("currentNumberArray");
    console.log(currentNumberArray);
    // Przy każdym kliknięciu liczby: przemiana currentNumberArray na shadowArray, która posiada wartości właściwe liczbom dla currentNumber
    currentNumberArray.forEach(function(value, index){
        currentNumberShadowArray.unshift(value*(10**index));
    });
    // console.log("currentNumberShadowArray");
    // console.log(currentNumberShadowArray);
    // Dodanie liczb z tabeli currentNumberShadowArray jako aktualny currentNumber
    currentNumberShadowArray.forEach(function(value){
        shadowNumber = shadowNumber + value;
    });
    currentNumber = shadowNumber;
    console.log("currentNumber");
    console.log(currentNumber);
    
    
}

//Funkcje 2 stopnia
// Opcje kalkulatora
function autoCorrectFn(){
    console.log("Funkcja autokorekty");
    currentNumberArray = [];
    currentNumber = null;
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
function divisionFn(){
    console.log("Funkcja dzielenia");
}
function multiplicationFn(){
    console.log("Funkcja mnozenia");
}
function subtractionFn(){
    console.log("Funkcja odejmowania");
}
function additionFn(){
    console.log("Funkcja dodawania");
}
function equationFn(){
    console.log("Funkcja równości");
}

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

//Funkcje obliczeniowe

//Funkcje wyświetlania
//displayerMath i displayerResult