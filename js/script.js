// Consegna
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// saved in the variables the DOM elements that i need
const gridElement = document.getElementById("grid");

const gridElementWrapper = document.getElementById("grid-bg");

const buttonPlay = document.getElementById("btn-play");

const buttonReset = document.getElementById("btn-reset");

const preGameElement =document.getElementById("game-instructions");

const resetGameElement =document.getElementById("game-reset");


// when the user clicks the button the program performs certain operations
buttonPlay.addEventListener("click", function(){

// hides or displays the game layout
preGameElement.classList.toggle("d-none");
resetGameElement.classList.toggle("d-none");
gridElementWrapper.classList.toggle("d-none");

//declare a new grid cell
let newGridElement;

const userSelection = document.querySelector("select").value;
    
// check the selection that the user has chosen and the program performs certain operations based on it
switch (userSelection) {

    case 'opt-easy':
        
        // cycle that creates a new cell of the grid for "i" times
        for( let i = 1; i <= 100; i++ ){

            newGridElement = createNewDiv(gridElement, i);

            newGridElement.classList.add("easy-width");

            clicked(newGridElement);
        }
        
        break;

    case 'opt-midd':

        // cycle that creates a new cell of the grid for "i" times
        for( let i = 1; i <= 81; i++ ){

            newGridElement = createNewDiv(gridElement, i);

            newGridElement.classList.add("midd-width");

            clicked(newGridElement);
        }
        
        break;

    case 'opt-hard':

        // cycle that creates a new cell of the grid for "i" times
        for( let i = 1; i <= 49; i++ ){

            newGridElement = createNewDiv(gridElement, i);

            newGridElement.classList.add("hard-width");

            clicked(newGridElement);
        }
        
        break;
}

});

buttonReset.addEventListener("click", function(){

    resetGameElement.classList.toggle("d-none");
    preGameElement.classList.toggle("d-none");
    gridElementWrapper.classList.toggle("d-none");


    gridElement.innerHTML = "";

});





/***********************FUNCTIONS**********************************/

/**
 * function that creates a DOM element of type div given as input the DOM element in which we want to insert it and the value to add to the div we are creating
 * 
 * @param {*} domElement 
 * @param {*} innerElement 
 */
function createNewDiv(domElement, innerElement){

    const newElement = document.createElement("div");
    newElement.classList.add("box", "border", "text-center");
    newElement.innerHTML = innerElement;

    domElement.appendChild(newElement);

    return newElement;


}

/**
 * function that given in input an element of the DOM if it is clicked adds the attached class
 * 
 * @param {*} element 
 */

function clicked(domElement){

    domElement.addEventListener( "click", function() {

        this.classList.add("clicked");

    });

}