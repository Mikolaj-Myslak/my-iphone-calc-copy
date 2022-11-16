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
// calcOptionFn - raczej do usunięcia funkcja
autoCorrectButton.addEventListener("click", calcOptionsFn);
plusMinusButton.addEventListener("click", calcOptionsFn);
percentageButton.addEventListener("click", calcOptionsFn);
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

// Funkcje przycisków opcji kalkulatora
function calcOptionsFn(){
}
// Funkcja przycisku równości
function equationFn(){
    // Stan kalkulatora
    if (firstNumber && operator && secondNumber && result && currentNumber!=0){
        resetCurrentNumber();
    } else if (firstNumber && operator && secondNumber && result){
        firstNumber = result;
    } else if (firstNumber && operator && secondNumber){

    } else if (firstNumber && operator){
        secondNumber = currentNumber;
        resetCurrentNumber();
    } else if (firstNumber){
        operator = "=";
    } else if (!firstNumber){
        firstNumber = currentNumber;
        resetCurrentNumber();
        operator = "=";
    }
    makeResult();
}
// Funkcja przycisków +, - , x, /
function operatorsFn(){
    // Stan kalkulatora
    if (firstNumber && operator && secondNumber && result){
        firstNumber = result;
        resetResult();
        secondNumber = null;
    } else if (firstNumber && operator && currentNumber === 0){
        
    } else if (firstNumber && operator){
        secondNumber = currentNumber;
        resetCurrentNumber();
        makeResult();
        firstNumber = result;
        resetResult();
        resetSecondNumber();
    } else if (firstNumber){
            currentNumber = firstNumber;
            resetCurrentNumber();
    } else if (!firstNumber){
            firstNumber = currentNumber;
            resetCurrentNumber();
    }
    operator = this.textContent;
}

// STWORZENIE AKTUALNIE WYŚWIETLANEJ LICZBY
function numbersFn() {
    
    //TWORZENIE currentNumber
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
    // plusMinusState
    doNegativeCurrentNumberArray();
    // Stan kalkulatora
    if (firstNumber && secondNumber && operator && result){
        firstNumber = currentNumber;
    }
}
// Funkcja przycisku AC
function autoCorrectFn(){
    resetCurrentNumber();
    firstNumber = null;
    operator = null;
    secondNumber = null;
    result = null;
}
// TO DO
function plusMinusFn(){
    if (firstNumber && operator && secondNumber && result){
        result *= -1;
    } else if (firstNumber && operator && currentNumber != 0){
        plusMinusState *=-1;
        doNegativeCurrentNumberArray();
    } else if (firstNumber && operator){
        firstNumber *= -1;
    } else if (firstNumber){
        plusMinusState *=-1;
        doNegativeCurrentNumberArray();
    } else if (!firstNumber){
        plusMinusState *=-1;
        doNegativeCurrentNumberArray();
    }
}
// TO DO
function percentageFn(){
    if (firstNumber && operator && secondNumber && result){
        
    } else if (firstNumber && operator && currentNumber != 0){
        secondNumber = currentNumber/100 * firstNumber;
        makeResult();
    } else if (firstNumber && operator){
        secondNumber = firstNumber/100 * firstNumber;
        makeResult();
    } else if (firstNumber){
        
    } else if (!firstNumber){
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

// Funkcje wyświetlania
function displayerMathFn(){
    if (firstNumber && operator && secondNumber && result){
        displayerMath.textContent = `${firstNumber} ${operator} ${secondNumber} =`;
    } else if (firstNumber && operator && currentNumber != 0){
        displayerMath.textContent = `${firstNumber} ${operator} `;
    } else if (firstNumber && operator){
        displayerMath.textContent = `${firstNumber} ${operator} `;
    } else if (firstNumber){
        
    } else if (!firstNumber){
        displayerMath.textContent = ` `;
    } 
}

function displayerResultFn(){
    if (firstNumber && operator && secondNumber && result){
        displayerResult.textContent = `${result}`;
    } else if (firstNumber && operator && currentNumber != 0){
        displayerResult.textContent = `${currentNumber}`;
    } else if (firstNumber && operator){
        displayerResult.textContent = `0`;
    } else if (firstNumber){
        
    } else if (!firstNumber){
        displayerResult.textContent = `${currentNumber}`;
    } 
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
        console.log(currentNumberArray);
        console.log(`plusMinus state to    ${plusMinusState}`);
        // console.log("");
        // console.log("");
        // console.log (`firstNumber operator secondNumber =`);
        // console.log(`result`);

        displayerMathFn();
        displayerResultFn();
    });
}