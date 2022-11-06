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
const additionsButton = allButtons[15];
const zeroButton = allButtons[16];
const dotButton = allButtons[17];
const equationButton = allButtons[18];


// Dodanie części wyświetlacza jako stałych
const displayerMath = document.querySelector(".displayer__math");
const displayerResult = document.querySelector(".displayer__result");




// DRZEWKO KLIKNIĘĆ W PRZYCISKI
for (button of allButtons){
    // 1 stopień | Przyciski opcji kalkulatora
    if(button.classList.contains("keyboard__button--calc-options")){
        button.addEventListener("click", calcOptionsFn);
        // 2 stopień | Podział na AC, +/-, %
        if(button.classList.contains("auto-correct-btn")){
            button.addEventListener("click", autoCorrectFn);
        }
        else if(button.classList.contains("plus-minus-btn")){
            button.addEventListener("click", plusMinusFn);
        }
        else if(button.classList.contains("percentage-btn")){
            button.addEventListener("click", percentageFn);
        }
    }
    // 1 stopień | Przyciski operacji liczbowych
    else if(button.classList.contains("keyboard__button--operators")){
        button.addEventListener("click", operatorsFn);
        // 2 stopień | Podział na konkretne operacje
        if(button.classList.contains("division-btn")){
            button.addEventListener("click", divisionFn);
        }
        else if(button.classList.contains("multiplication-btn")){
            button.addEventListener("click", multiplicationFn);
        }
        else if(button.classList.contains("subtraction-btn")){
            button.addEventListener("click", subtractionFn);
        }
        else if(button.classList.contains("addition-btn")){
            button.addEventListener("click", additionFn);
        }
        else if(button.classList.contains("equation-btn")){
            button.addEventListener("click", equationFn);
        }
    }
    // 1 stopień |Przyciski liczb
    else if(button.classList.contains("keyboard__button--numbers")){
        button.addEventListener("click", numbersFn);
        // 2 stopień | Podział na konkretne liczby
        if(button.classList.contains("seven-btn")){
            button.addEventListener("click", sevenFn);
        }
        else if(button.classList.contains("eight-btn")){
            button.addEventListener("click", eightFn);
        }
        else if(button.classList.contains("nine-btn")){
            button.addEventListener("click", nineFn);
        }
        else if(button.classList.contains("four-btn")){
            button.addEventListener("click", fourFn);
        }
        else if(button.classList.contains("five-btn")){
            button.addEventListener("click", fiveFn);
        }
        else if(button.classList.contains("six-btn")){
            button.addEventListener("click", sixFn);
        }
        else if(button.classList.contains("one-btn")){
            button.addEventListener("click", oneFn);
        }
        else if(button.classList.contains("two-btn")){
            button.addEventListener("click", twoFn);
        }
        else if(button.classList.contains("three-btn")){
            button.addEventListener("click", threeFn);
        }
        else if(button.classList.contains("zero-btn")){
            button.addEventListener("click", zeroFn);
        }
        else if(button.classList.contains("dot-btn")){
            button.addEventListener("click", dotFn);
        }
    }
    //Błędy
    else {
        console.log("NIE ZNALAZŁO PRZYCISKU!");
    }
}




// FUNKCJE
// Funkcje 1 stopnia
function calcOptionsFn(){
    console.log("funkcja przycisków opcji kalkulatora")
}
function operatorsFn() {
    console.log("funckja przycisków operacji");
}
function numbersFn() {
    console.log("funckja przycisków liczb");
}

//Funkcje 2 stopnia
// Opcje kalkulatora
function autoCorrectFn(){
    console.log("Funkcja autokorekty");
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
function sevenFn(){
    console.log("Funkcja 7");
}
function eightFn(){
    console.log("Funkcja 8");
}
function nineFn(){
    console.log("Funkcja 9");
}
function fourFn(){
    console.log("Funkcja 4");
}
function fiveFn(){
    console.log("Funkcja 5");
}
function sixFn(){
    console.log("Funkcja 6");
}
function oneFn(){
    console.log("Funkcja 1");
}
function twoFn(){
    console.log("Funkcja 2");
}
function threeFn(){
    console.log("Funkcja 3");
}
function zeroFn(){
    console.log("Funkcja 0");
}
function dotFn(){
    console.log("Funkcja kropki");
}

//Funkcje obliczeniowe

//Funkcje wyświetlania