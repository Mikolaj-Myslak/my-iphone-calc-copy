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
equationButton.addEventListener("click", equationFn);
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
// Przypisanie specjalnych wydarzeń dla przycisków
autoCorrectButton.addEventListener("click", autoCorrectFn);
plusMinusButton.addEventListener("click", plusMinusFn);
percentageButton.addEventListener("click", percentageFn);

// Ustawienie początkowe zmiennych kalkulatora
let currentNumberArray = [];
let currentNumber = 0;
let operator = null;
let firstNumber = null;
let secondNumber = null;
let result = null;

// Funkcje przycisków opcji kalkulatora
function calcOptionsFn(){
}
// Funkcja przycisków +, - , x, /
function operatorsFn(){
    // Obsługa kalkulatora
    if (firstNumber === null){
        firstNumber = currentNumber;
        currentNumberArray = [];
        currentNumber = 0;
    } else if (firstNumber!= null && secondNumber != null && result != null){
        firstNumber = result;
        secondNumber = null;
    }
    // Ustawia aktualny operator
    operator = this.textContent;
}
// Funkcja przycisku =
function equationFn(){
        // Obsługa kalkulatora
        if(firstNumber===null && secondNumber != null){
            firstNumber = currentNumber;
            currentNumberArray = [];
            currentNumber = 0;
        } else if (firstNumber === null && secondNumber === null){
            return;
        } else if (secondNumber === null){
            secondNumber = currentNumber;
            currentNumberArray = [];
            currentNumber = 0;
        } else if (firstNumber!= null && secondNumber != null && result != null){
            firstNumber = result;
        }
       
        //  Wylicza aktualny wynik
        switch (operator){
            case "/":
                if(secondNumber===0){
                    displayerMath.textContent = "";
                    displayerResult.textContent = "error";
                    break;
                }
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
}

// STWORZENIE AKTUALNIE WYŚWIETLANEJ LICZBY
function numbersFn() {
    // Obsługa kalkulatora 
    if (firstNumber!= null && secondNumber != null && result != null){
        firstNumber = null;
    }
    // Resetowanie zmiennych pomocniczych funkcji, by każdorazowo na koniec wyświetlić właściwą liczbę
    let shadowNumber = 0;
    let shadowArrayLessThanZero = [];
    let shadowArrayMoreThanZero = [];
    let shadowArrayLessThanZeroReverse = [];
    // Wrzucenie do tablicy currentNumberArray liczb i kropki z przycisków
    currentNumberArray.unshift(this.textContent);
    // Uwzględnienie przypadku kliknięcia kropki i podział głównej tabeli pomocniczej na tę dla części currentNumber poniżej 0 i powyżej 0
    if (currentNumberArray.includes(".")) {
        shadowArrayLessThanZero = currentNumberArray.slice(0,currentNumberArray.indexOf("."));
        shadowArrayMoreThanZero = currentNumberArray.slice(currentNumberArray.indexOf(".")+1, currentNumberArray.length);
        dotButton.removeEventListener("click", numbersFn);
    } else {
        shadowArrayMoreThanZero = currentNumberArray.slice(0, currentNumberArray.length);
    }
    // Konwertowanie tablic poniżej 0 i powyżej 0 na właściwą liczbę odpowiadającom chęci użytkownika na bieżąco
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
    shadowNumber = shadowNumber.toFixed(shadowArrayLessThanZero.length);
    currentNumber = Number(shadowNumber);
}
// Funkcja przycisku AC
function autoCorrectFn(){
    currentNumberArray = [];
    currentNumber = 0;
    firstNumber = null;
    operator = null;
    secondNumber = null;
    result = null;
}
// TO DO
function plusMinusFn(){
    console.log("Funkcja plusaminusa");
}
// TO DO
function percentageFn(){
    console.log("Funkcja procenta");
}
// TO DO
function displayer(){

}

// ----------------------------------------------------------------------

for (button of allButtons){
    button.addEventListener("click", ()=>{
        console.clear();
        console.log("");
        console.log(currentNumber + " = currentNumber");
        console.log("");
        // console.log(firstNumber + " firstnumber");
        // console.log(operator + " operator");
        // console.log(secondNumber + " secondNumber");
        // console.log(result + " result");

        console.log (`${firstNumber} ${operator} ${secondNumber} =`);
        console.log(`${result}`);
        console.log("");
        console.log("");
        console.log("");
        console.log (`firstNumber operator secondNumber =`);
        console.log(`result`);
    });
}
