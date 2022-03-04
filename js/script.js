// Consegna
// L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata, in cui ogni cella contiene un numero tra quelli compresi in un range:
// con difficoltà 1 => tra 1 e 100
// con difficoltà 2 => tra 1 e 81
// con difficoltà 3 => tra 1 e 49
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.


// saved in the variables the DOM elements that i need
const gridElement = document.getElementById("grid");



const buttonPlay = document.getElementById("btn-play");

// when the user presses the button I perform certain operations
buttonPlay.addEventListener("click", function(){

const userSelection = document.querySelector("select").value;
    
    // check the selection that the user has chosen and perform certain operations based on it
switch (userSelection) {

    case 'opt-easy':
        
        for( let i = 1; i <= 100; i++ ){

            createNewDiv(gridElement, i);
        }
        
        break;

    case 'opt-midd':

        for( let i = 1; i <= 81; i++ ){

            createNewDiv(gridElement, i);
        }
        
        break;

    case 'opt-hard':

        for( let i = 1; i <= 49; i++ ){

            createNewDiv(gridElement, i);
        }
        
        break;
}

});


function createNewDiv(domElement, innerElement){

    const newElement = document.createElement("div");
    newElement.classList.add("box", "p-3", "border", "text-center");
    newElement.innerHTML = innerElement;

    domElement.appendChild(newElement);


}