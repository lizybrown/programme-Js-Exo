// - Créez une fonction permettant de demander l’âge de l’utilisateur.
// - Créez une alerte dans la fonction affichant le message disant que l’utilisateur aura bientôt
// son âge + 1 an (en faisant le calcul dans la fonction alert().



function newAge() {
  let age = prompt("quel age a tu");

  age = +age; // transforme en Number
  parseInt(age); //transforme en Number
  age = Number(age); // transforme en Number

  // console.log(typeof age);
  alert("vous avez " + (age + 1));
}

newAge();