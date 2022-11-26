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
// operatorsFn
multiplicationButton.addEventListener("click", operatorsFn);
subtractionButton.addEventListener("click", operatorsFn);
divisionButton.addEventListener("click", operatorsFn);
additionButton.addEventListener("click", operatorsFn);
// equationFn
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

let plusMinusState = 1;
//---------------------------------------------------------------------------------------------


// Funkcja przycisku równości
function equationFn(){
    // Funkcja ma się nie wykonywać, gdy w kalkulatorze wypływa error
    if (displayerResult.textContent === "error"){
        return;
    }
    // Stan kalkulatora
    if (firstNumber !==null && operator !==null && secondNumber !==null && result !==null && currentNumber!=0){
        resetCurrentNumber();
    } else if (firstNumber !==null && operator !==null && secondNumber !==null && result !==null){
        firstNumber = result;
    } else if (firstNumber !==null && operator !==null && secondNumber !==null){

    } else if (firstNumber !==null && operator !==null){
        secondNumber = currentNumber;
        resetCurrentNumber();
    } else if (firstNumber !==null){
        operator = "=";
    } else if (firstNumber ===null){
        firstNumber = currentNumber;
        resetCurrentNumber();
        operator = "=";
    }
    makeResult();
}
// Funkcja przycisków +, - , x, /
function operatorsFn(){
    // Funkcja ma się nie wykonywać, gdy w kalkulatorze wypływa error
    if (displayerResult.textContent === "error"){
        return;
    }
    // Stan kalkulatora
    if (firstNumber !==null && operator !==null && secondNumber !==null && result !==null){
        firstNumber = result;
        resetResult();
        secondNumber = null;
    } else if (firstNumber !==null && operator !==null && currentNumber === 0){
        
    } else if (firstNumber !==null && operator !==null){
        secondNumber = currentNumber;
        resetCurrentNumber();
        makeResult();
        firstNumber = result;
        resetResult();
        resetSecondNumber();
    } else if (firstNumber !==null){
            currentNumber = firstNumber;
            resetCurrentNumber();
    } else if (firstNumber ===null){
            firstNumber = currentNumber;
            resetCurrentNumber();
    }
    operator = this.textContent;
}

// STWORZENIE AKTUALNIE WYŚWIETLANEJ LICZBY
function numbersFn() {
    // Funkcja ma się nie wykonywać, gdy w kalkulatorze wypływa error
    if (displayerResult.textContent === "error"){
        return;
    }
    //Tworzenie currentNumber
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
    currentNumber = Number(shadowNumber.toFixed(shadowArrayLessThanZero.length));

    // Obsługa 
    // plusMinusState, czyli czy w danej chwili jest minus przy liczbie
    doNegativeCurrentNumberArray();
    // Stan kalkulatora
    if (firstNumber !==null && secondNumber !==null && operator !==null && result !==null){
        firstNumber = currentNumber;
    }
}
// Funkcja przycisku AC
function autoCorrectFn(){
    resetCurrentNumber();
    addingAllButtonsEventsWithoutAC();
    resetNumbersAndOperator();
}
// Funkcja przycisku plusminus
function plusMinusFn(){
    // Funkcja ma się nie wykonywać, gdy w kalkulatorze wypływa error
    if (displayerResult.textContent === "error"){
        return;
    }
    if (firstNumber !==null && operator !==null && secondNumber !==null && result !==null){
        result *= -1;
    } else if (firstNumber !==null && operator !==null && currentNumber != 0){
        plusMinusState *=-1;
        doNegativeCurrentNumberArray();
    } else if (firstNumber !==null && operator !==null){
        firstNumber *= -1;
    } else if (firstNumber !==null){
        plusMinusState *=-1;
        doNegativeCurrentNumberArray();
    } else if (firstNumber ===null){
        plusMinusState *=-1;
        doNegativeCurrentNumberArray();
    }
}
// TO DO
function percentageFn(){
    // Funkcja ma się nie wykonywać, gdy w kalkulatorze wypływa error
    if (displayerResult.textContent === "error"){
        return;
    }
    if (firstNumber !==null && operator !==null && secondNumber !==null && result !==null){
        
    } else if (firstNumber !==null && operator !==null && currentNumber != 0){
        makeResultWithPercent();
    } else if (firstNumber !==null && operator !==null){
        makeResultWithPercent();
    } else if (firstNumber !==null){
        
    } else if (firstNumber ===null){
        resetCurrentNumber();
    }
}

// Funkcje pomocnicze
function resetCurrentNumber(){
    currentNumber = 0;
    currentNumberArray = [];
    dotButton.addEventListener("click", numbersFn);
    plusMinusState = 1;
}
function resetNumbersAndOperator(){
    firstNumber = null;
    operator = null;
    secondNumber = null;
    result = null;
}
function resetSecondNumber(){
    secondNumber = null;
}
function resetResult(){
    result = null;
}
function makeResult(){
    switch (operator){
        case "/":
            if(secondNumber===0){
                result = "error";
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
        case "=":
            result = firstNumber;
            break;
        }
}
function makeResultWithPercent(){
    switch (operator){
        case "/":
            secondNumber = currentNumber/100;
            resetCurrentNumber();
            if(secondNumber===0){
                result = "error";
                break;
            }
            result = firstNumber/secondNumber;
            break;
        case "x":
            secondNumber = currentNumber/100;
            resetCurrentNumber();
            result = firstNumber*secondNumber;
            break;
        case "-":
            secondNumber = currentNumber/100*firstNumber;
            resetCurrentNumber();
            result = firstNumber-secondNumber;
            break;
        case "+":
            secondNumber = currentNumber/100*firstNumber;
            resetCurrentNumber();
            result = firstNumber+secondNumber;
            break;
        case "=":
            result = firstNumber;
            break;
        }
}
function doNegativeCurrentNumberArray(){
    if (plusMinusState === -1){
        currentNumber = Math.abs(0-currentNumber)*-1;
     } else if (plusMinusState === 1){
        currentNumber = Math.abs(0-currentNumber);
     }
}
function addingAllButtonsEventsWithoutAC(){
    // operatorsFn
    multiplicationButton.addEventListener("click", operatorsFn);
    subtractionButton.addEventListener("click", operatorsFn);
    divisionButton.addEventListener("click", operatorsFn);
    additionButton.addEventListener("click", operatorsFn);
    // equationFn
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
    // plusMinusFn i percentage Fn
    plusMinusButton.addEventListener("click", plusMinusFn);
    percentageButton.addEventListener("click", percentageFn);
}
function isFloatingPointNumber(numb){
    if (numb%1 !== 0 ){
        console.log("liczba nie jest całkowita")
    }
}
// Funkcje wyświetlania
function displayerMathFn(){
    if (firstNumber !==null && operator !==null && secondNumber !==null && result !==null){
        displayerMath.textContent = `${firstNumber} ${operator} ${secondNumber} =`;
    } else if (firstNumber !==null && operator !==null && currentNumber != 0){
        displayerMath.textContent = `${firstNumber} ${operator} `;
    } else if (firstNumber !==null && operator !==null){
        displayerMath.textContent = `${firstNumber} ${operator} `;
    } else if (firstNumber !==null){
        
    } else if (firstNumber ===null){
        displayerMath.textContent = ` `;
    } 
}

function displayerResultFn(){
    if (firstNumber !==null && operator !==null && secondNumber !==null && result !==null){
        displayerResult.textContent = `${result}`;
    } else if (firstNumber !==null && operator !==null && currentNumber != 0){
        displayerResult.textContent = `${currentNumber}`;
    } else if (firstNumber !==null && operator !==null){
        displayerResult.textContent = `0`;
    } else if (firstNumber !==null){
        
    } else if (firstNumber ===null){
        displayerResult.textContent = `${currentNumber}`;
    } 
}

// DO NAPRAWY
//1 Błąd gdzie liczba po przecinku np. 0.501 wyświetla się jako 0.5099999999999999. ???
//2 Dodać aktualny czas w kalkulatorze
//3 Poprawić CSS, żeby wyświetlał się prawidłowo przy zmianie rozdzielczości ekranu i na moblinych
// ----------------------------------------------------------------------

for (button of allButtons){
    button.addEventListener("click", ()=>{
        console.clear();
        console.log("");
        console.log(currentNumberArray);
        console.log(currentNumber + " = currentNumber");
        console.log("");
        console.log (`${firstNumber} ${operator} ${secondNumber} =`);
        console.log(`${result}`);
        console.log("");
        console.log(`plusMinus state to    ${plusMinusState}`);
        
        displayerMathFn();
        displayerResultFn();
    });
}

const now = new Date();
let currentTime = `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;