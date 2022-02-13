// // Créez une fonction permettant d’afficher l’IMC d’une personne, en rentrant comme paramètre
// // son poids et sa taille.
// // Pour info : La formule de l’IMC est poids(en kg) / taille²(en mètre).
// // L’utilisateur devra rentré son poids en kg, donc à vous de faire la conversion cm->mètre, de
// // faire le calcul nécessaire pour l’IMC et d’afficher le résultat arrondi à 1 chiffre après la virgule.

let poids = prompt("quel est votre poids?");
let taille = prompt("quelle est votre taille en cm?");

function imc(taille, poids){

    taille = taille/100;
    taille = math.pow(taille,2);
    let result = poids/taille;
    result = result.toFixed(1);
    return result;
}

alert(imc(poids, taille));

// let poids = prompt("Quels est votre poid actuel ? en kg");
// let taille = prompt("Quel est votre taille ? en cm");

// function imc(poids, taille) {
//   poids = +poids;
//   taille = +taille;

//   taille = taille / 100;
//   return Math.floor(poids / (taille * taille));
// }

// alert("votre imc est actuellement à" + " " + imc(poids, taille));

// //correction

// function imcBen(poidsb, tailleb) {
//   tailleb = tailleb / 100;
//   tailleb = Math.pow(tailleb, 2); //Methode permettan de faire une puissance
//   console.log(typeof poidsb);
//   let result = poidsb / tailleb; //Conversion faite à ce moment la
//   console.log(typeof result);
//   result = result.toFixed(1); //Méthode permettan de formater un nombre en point-fixe
//   return result;
// }

// let poidsb = prompt("Quel est votre poidsb en kg ?");
// let tailleb = prompt("Quel est votre tailleb en cm ?");

// alert(imcBen(poidsb, tailleb));