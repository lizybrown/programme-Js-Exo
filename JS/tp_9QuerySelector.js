let header
= document.getElementsByTagName('header'); // selection d'une ou plusieurs balises

let logo
= document.getElementById('logo'); // selection d'un id

let container = document.getElementsByClassName('container'); // selection d'une ou plusiuers classes


let h1 = document.querySelector('h1'); // super selector qui va selectionner le premier élement h1
// = 

document.querySelector('.toto'); // super selector qui va selectionner le premier classe toto
// = 

document.querySelector('#toto'); // super selector qui va selectionner le premier id toto


let p = document.querySelectorAll('p');// super selector qui va selectionner tout les éléments p

// = 
document.querySelectorAll('.toto');// super selector qui va selectionner toute les classes toto

// = 
document.querySelectorAll('#toto'); // super selector qui va selectionner tout les id toto