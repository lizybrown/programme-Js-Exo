// ********************************EXO1*********************


// - Je vous invite à chercher pourquoi placer nos balise à cette endroit et pas à un autre endroit.
// - Faites un fichier js que vous incluez dans le fichier html que je vais vous donner.
// - Créez et console.logguez les variables qui vont afficher : le h2, tout les « a », la div avec la class « text ».
// - Si vous utilisez querySelector et querySelectorAll constatez vous une différence ?



// let header
// = document.getElementsByTagName('header'); // selection d'une ou plusieurs balises
// let logo
// = document.getElementById('logo'); // selection d'un id
// let container = document.getElementsByClassName('container'); // selection d'une ou plusiuers classes
// let h1
// let h1
// let h1 = document.querySelector('h1'); // super selector qui va selectionner le premier élement h1
// = document.querySelector('.toto'); // super selector qui va selectionner le premier classe toto
// = document.querySelector('#toto'); // super selector qui va selectionner le premier id toto
// let p
// let p
// let p = document.querySelectorAll('p');// super selector qui va selectionner tout les éléments p
// = document.querySelectorAll('.toto');// super selector qui va selectionner toute les classes toto
// = document.querySelectorAll('#toto'); // super selector qui va selectionner tout les id toto

// *******SELECTION TITLE***************


let titleSelector = document.querySelector('h2');

// console.log(titleSelector);

// console.dir(titleSelector);

// console.dir permet d'avoir toutes les infos du noeud sur un querySelector********

// *******SELECTION ALL LINK***************

let linkSelectorAll = document.querySelectorAll('a');

// ex : selection le 1er élément des link  :
linkSelectorAll[0]
console.log(linkSelectorAll[0]);

// ************************SELECTION UNE DIV CLASS TEXT *******************


let text = document.querySelector('.text');
console.log(text);



//MODIFIER LE TITRE H2 ******************************

titleSelector.textContent="Voilà le titre modifié!!"

titleSelector.style.color="#3399ff";



// MODIFIER LE TEXTE DU 2EME LIEN ******************

// linkSelectorAll[1].textContent="Réservations";


// // ****************AJOUTER UN ELEMENT A LA FIN DE BODY
// // POUR CREER UN NOUVEL ELEMENT DANS LA PAGE AVAN DE LE STYLISER 

// // document.body.append("Coucou");

// let coucou = document.createElement("div");
// coucou.innerText = "coucou";
// document.body.append(coucou); 

// a la place de div, on peut mettre Selection, article, paragraphe etc ...

// .prepend pour ajouter un Element avant le 1er enfant de celui-ci
// .remove pour supprimer un Element



// *************- Ajouter un h1 avant la nav dans une div*****************

// let titrePremier = document.createElement("h1");
// titrePremier.innerText="Bienvenu à Montpellier";

// let div = document.createElement("div");
// div.classList.add("newDiv");

// div.append(h1);
// // (je veux inserer ma variable div dans mon h1)

// // exo Farid 
// let coucou=document.createElement("h1");
// coucou.innerText="coucou";
// document.querySelector("nav").prepend(coucou)

// // *****************CORRECTION EXO ***********************

// // VERSION BENJAMIN

// let h1 = document.createElement("h1");
// h1.innerText = "super titre js";

// let div = document.createElement("div");
// div.classList.add("newDiv");

// div.append(h1);

// let header = document.querySelector("header");

// header.prepend(div);
// // (je veux inserer ma variable div avant la partie "header")


// let img = document.querySelector("img");

// img.remove();


// // VERSION RUBEN**********************


// //Ajouter un h1
// let nav = document.querySelector("#burger");
// let header = document.querySelector("header");
// let newDiv = document.createElement("div");
// let newTitle = document.createElement("h1");

// header.prepend(newDiv);

// newDiv = document.querySelector("div");
// newDiv.append(newTitle);

// //supprimer l'image

// let backgroundImg = document.querySelector("img");

// backgroundImg.remove();

// // Ajouter du texte dans le h1
// newTitle.textContent = "nouveau titre";

// let liNav = document.querySelector("ul");


// - Enlevez tout les scripts ajouté plus tôt.
// - Modifiez le style du body en js pour mettre un background gradient plutôt que le bleu de base.



let bodySelector = document.querySelector('body');
console.log(bodySelector);

bodySelector.style.backgroundColor="#c3d7d5";

// ATTENTION CE TYPE DE CODE PREND LA PRIORITE SUR TOUT LE CODE CSS !!!!!!!
// IL FAUT PLUTOT CREER DES CLASS + NE PAS BOSSER INLINE!!!!!


// **********************CORRECTION *****************

document.body.style.backgroundColor = "unset";
document.body.style.color = "red";

document.body.style.background = "linear-gradient(#f69d3c, #3f87a6))";

//correction BIS***************************************

document.querySelector("body").className = "gradientBody";
document.querySelector("h1").style.color = "#111d5e"; //il n'existe plus


// ************************FICHE TECH*******************