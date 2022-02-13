// - Je vous invite à chercher pourquoi placer nos balise à cette endroit et pas à un autre endroit.
// - Faites un fichier js que vous incluez dans le fichier html que je vais vous donner.
// - Créez et console.logguez les variables qui vont afficher : le h2, tout les « a », la div avec la
// class « text ».
// - Si vous utilisez querySelector et querySelectorAll constatez vous une différence ?

let h2 = document.querySelector("h2");
let allA = document.querySelectorAll("a");
let text = document.querySelector(".text");
console.dir(h2);
console.log(allA);
console.log(text);

//Ajouter un h1
let nav = document.querySelector("#burger");
let header = document.querySelector("header");
let newDiv = document.createElement("div");
let newTitle = document.createElement("h1");

header.prepend(newDiv);

newDiv = document.querySelector("div");
newDiv.append(newTitle);

//supprimer l'image

let backgroundImg = document.querySelector("img");

backgroundImg.remove();

// Ajouter du texte dans le h1
newTitle.textContent = "nouveau titre";

let liNav = document.querySelector("ul");

// - Ajouter un h1 avant la nav dans une div
// - Supprimer l’image
// **************************************

document.body.append("coucou");

let coucou = document.createElement("div"); //crée un élément et l'attribu à coucou
coucou.innerText = "coucou"; // ajoute du texte dans l'élément
document.body.append(coucou); // Ajoute l'élément après le dernier enfant de l'élément selectionné la body
document.querySelector("h2").prepend(coucou); // prepedn ajoute un élément avant le premier enfant de celui ci
coucou.remove(); // Supprime l'élément selectionné

let h1 = document.createElement("h1");
h1.innerText = "super titre js";

let div = document.createElement("div");
div.classList.add("newDiv");

div.append(h1);

let header = document.querySelector("header");

header.prepend(div);



let img = document.querySelector("img");

img.remove();


// - Enlevez tout les scripts ajouté plus tôt.
// - Modifiez le style du body en js pour mettre un background gradient plutôt que le bleu de base.



document.body.style.backgroundColor = "unset";
document.body.style.color = "red";

document.body.style.background = "linear-gradient(#f69d3c, #3f87a6))";

//correction

document.querySelector("body").className = "gradientBody";
document.querySelector("h1").style.color = "#111d5e"; //il n'existe plus

