// - Créez une page html avec un lien et un bouton
// - A l’aide de addEventListener créez un évènement pour supprimer le lien en cliquant dessus.
// - Changez le background color du body en survolant le bouton et faites qu’il redevienne blanc quand la
// souris quitte le bouton.
// - Créez une section avec un h1 dedans et un texte dans la section mais en dehors du h1.
// - Créez un évènement au clique du h1 qui crée une alert disant que vous cliquez sur le h1 et de même
// pour la section. Que constatez vous ?

// ********************************************

let buttonSelector = document.querySelector("#removerJS");
let link = document.querySelector("a");

link.addEventListener("click", function (){
    link.remove();
})
//- A l'aide de addEventListener créz un évènement 
//pour supprimer le lien en cliquant dessus.
//fonction qui agit au clique
buttonSelector.addEventListener("click", function (e) {
  document.querySelector("a").remove();
  e.preventDefault();
});

/* Changez le bakground color du body en survolant le bouton et faites
  qu'il redevienne blanc quand la souris quitte le bouton */
let bodySelector = document.querySelector("body");

//fonction qui agit quand je survol l'élément
buttonSelector.addEventListener("mouseenter", function () {
  bodySelector.style.backgroundColor = "red";
});
//fonction qui agit quand je sort de l'élément
buttonSelector.addEventListener("mouseleave", function () {
  bodySelector.style.backgroundColor = "white";
});

/*créez un évènement au clique du h1 qui crée une alert disant que vous
cliquez sur le h1 et de même por la section. Que constatez vous ? */

let titleSelector = document.querySelector("h1");
let paragraphSelector = document.querySelector("p");
let sectionSelector = document.querySelector("section");

titleSelector.addEventListener("click", (e) => {
  alert("vous venez de cliquez sur le titre");
  e.stopPropagation();
});
paragraphSelector.addEventListener("click", (e) => {
  alert("vous venez de cliquez sur le paragraphe");
  e.stopPropagation();

});
sectionSelector.addEventListener("click", (e) => {
  alert("vous venez de cliquez sur la section");
  e.stopPropagation();

});

// *************************************

let a = document.querySelectorAll("a");
let bouton = document.querySelector("button");
let body = document.querySelector('body');
let h1 = document.querySelector("h1");
let section = document.querySelector("section");
let isStop = null
a[0].addEventListener("click", () => {
    a[0].remove();
});
a[1].addEventListener("click", () => {
    clearInterval(interval);
    isStop = true;
});
a[2].addEventListener("click", () => {
    if (isStop) {
        interval = setInterval(changeButton, 2000);
        isStop = false
    }
    else return
});
bouton.addEventListener("mouseover", () => {
    body.style.backgroundColor = "blue";
});
bouton.addEventListener("mouseout", () => {
    body.style.backgroundColor = "unset";
});
section.addEventListener("click", (e) => {
    alert("vous avez cliqué sur la section");
});

h1.addEventListener("click", (e) => {
    alert("vous avez cliqué sur le h1");
    e.stopPropagation();
});

// ***************************************
// Il est possible de planifier l’execution des scripts en JS :


setInterval 
// permet d’executer une fonctions à intervalles correspondantes à un temps donné

setTimeout 
// permet d’executer une fonction après un certain temps.

// - Créez une fonctions permettant de générer une couleurs aléatoirement.

// - Essayez de faire changer la couleur d’un bouton toutes les 2 secondes à l’aide de setInterval et de votre fonction.

// - Créez un lien permettant d’arrêter ce changement de couleur.

let randomColorGenerator = () => {
  let randomNumber = Math.floor(Math.random() * 255);
  return randomNumber;
};

document.querySelector("#testingMath").addEventListener("click", () => {
  randomColorGenerator();
});

let colorChanger = () => {
  let buttonSelectorColorChanger = document.querySelector("#testingMath");
  let colorPicked = `rgb(${randomColorGenerator()},${randomColorGenerator()},${randomColorGenerator()})`; //gabarit litéral
  buttonSelectorColorChanger.style.backgroundColor = colorPicked;
};

const colorChangerInterval = setInterval(colorChanger, 2000);

let colorChangerStopButton = document.querySelector("#colorChangerStopButton");

colorChangerStopButton.addEventListener("click", () => {
  clearInterval(colorChangerInterval);
});

let changeButton = () => {
    let randomRgba = () => {
        let round = Math.round, random = Math.random, color = 255;
        console.log(round);
        let result = 'rgba(' + round(random() * color) + ',' + round(random() * color) + ',' + round(random() * color) + ',' + random().toFixed(1) + ')';
        return result;
    }
    bouton.style.backgroundColor = randomRgba();
  }
  let interval = setInterval(changeButton, 2000);