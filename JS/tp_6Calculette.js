// Pour voir si tout vas bien jusque ici nous allons créer un calculateur en boite de dialogue
// (une sorte de calculatrice simplifiée).
// Objectif :
// - Demandez de faire un choix entre addition – soustraction – multiplication – division
// - Indice : pour un retour à la ligne « \n » tant que l’utilisateur ne choisis pas une des quatre
// proposition il serait bien de répéter la question.
// - Demandez de rentrer un nombre, puis un deuxieme
// - Indice : Répéter la demande si un nombre n’est pas rentré, je vous laisse chercher la
// fonction qui permet de checker cela.
// - Crée 4 fonctions correspond aux 4 méthodes de calculs
// - Selon le choix de l’utilisateur appelé la fonction correspondante
// - Affichez le résultat isNaN
// - Proposez à l’utilisateur de recommencer \n\n

(() => {
    //Fonction anonyme immédiate


    // SOLUTION EXO AVEC MEDHI********************

    

alert("Bienvenu dans la fonction calculatrice?");
  
var ready = confirm("Voulez vous faire un calcul ?"); 

function choice() {
  var choice = prompt(
    "1- addition \n 2- soustraction \n 3- multiplication \n 4- division"
  );

  console.log(choice);
  console.log(typeof choice);
  choice = +choice;
}
  if (ready === true) {
    function nombre_one() {
        var choice_nombre = prompt("choisis un nombre");
    }
    
    function nombre_deuz() {
            var choice_nombre2 = prompt("choisis un second nombre" );
    }


        console.log(nombre);
        console.log(typeof nombre);
        nombre_one = a;
        nombre_deuz = b;
        } 


  function addition(a,b){
      result=a+b
      
  }

  function soustraction(a,b){
    result=a-b
    
}

function multiplication(a,b){
    result=a*b
   
}

function division(a,b){
    result=a/b
 
}

    alert("Quelle opération souhaites-tu effectuer?");
    var calcul = choice();
  
    switch (calcul) {
      case 1:
        alert(
          "addition " + addition
        );
        break;
      case 2:
        alert(
          "soustraction" + soustraction 
        );
        break;
      case 3:
        alert(
          "mutliplication " + multiplication 
        );
        break;
    case 4:
        alert(
          "division " + division 
        );

    }


/********************/
  /********************/
  /**VERSION BENJAMIN**/
  /********************/
  /********************/
  
  // Fonction pour additionner
  function addition(nombreA, nombreB) {
    return nombreA + nombreB;
  }
  
  // Fonction pour multiplier
  function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
  }
  
  // Fonction pour soustraire
  function soustraction(nombreA, nombreB) {
    return nombreA - nombreB;
  }
  
  // Fonction pour diviser
  function division(nombreA, nombreB) {
    if (nombreB == 0) {
      throw new Error("Impossible de diviser par 0.");
    }
    return nombreA / nombreB;
  }
  
  // On rentre dans la boucle principale
  let restart = false; // Cette variable vaut false ce qui veut dire que par défaut, nous ne reproposons par un calcul.
  do {
    // Demande un choix
    do {
      var choix = Number(
        prompt(
          "Que souhaitez-vous faire ?\n 1 - Addition\n 2 - Multiplication\n 3 - Soustraction\n 4 - Division\n"
        )
      );
    } while (choix != 1 && choix != 2 && choix != 3 && choix != 4);
  
    // Demande deux nombres
    do {
      var premierNombre = Number(prompt("Entrez un premier nombre :"));
      var deuxiemeNombre = Number(prompt("Entrez un deuxième nombre : "));
    } while (isNaN(premierNombre) || isNaN(deuxiemeNombre));
  
    // Appelle la fonction choisie
    try {
      switch (choix) {
        case 1:
          var resultat = addition(premierNombre, deuxiemeNombre);
          break;
  
        case 2:
          var resultat = multiplication(premierNombre, deuxiemeNombre);
          break;
  
        case 3:
          var resultat = soustraction(premierNombre, deuxiemeNombre);
          break;
  
        case 4:
          var resultat = division(premierNombre, deuxiemeNombre);
          break;
  
        default:
          throw new Error("Une erreur est survenue.");
      }
  
      // Affiche le résultat
      alert("Voici le résultat : " + resultat);
    } catch (error) {
      alert(error); // Si une erreur est survenue, on affiche l'erreur
    }
  
    restart = confirm("Souhaitez-vous recommencer un calcul ?"); // On demande grâce à la boîte de dialogue confirm() si l'utilisateur veut recommencer
  } while (restart);
  
//  *****************VERSION RUBEN *******************


    alert("simple calculatrice codé par Ruben");
    while (true) {
      let choice = prompt("voulez vous faire un calcul ? y/n");
      if (choice == "y") {
        main();
      } else {
        alert("le programme va s'arreter !");
        return false;
      }
    }
  
    function main() {
      switch (calculChoice()) {
        case 1:
          console.log(add(chooseNumber(), chooseNumber()));
          break;
        case 2:
          console.log(sub(chooseNumber(), chooseNumber()));
          break;
        case 3:
          console.log(divide(chooseNumber(), chooseNumber()));
          break;
        case 4:
          console.log(multiplication(chooseNumber(), chooseNumber()));
          break;
      }
    }
    function calculChoice() {
      while (true) {
        try {
          let calcul = prompt(
            "Faite un choix! \n 1 - Addition \n 2 - Soustraction \n 3 - Multiplication \n 4 - Division"
          );
          if (calcul == 1 || calcul == 2 || calcul == 3 || calcul == 4) {
            false;
            return +calcul;
          } else {
            throw new Error("Veuillez faire un choix parmit les proposition");
          }
        } catch (error) {
          alert(error);
        }
      }
    }
  
    function chooseNumber() {
      while (true) {
        try {
          let calcul = Number(prompt("Choissisez un chiffre ou un nombre "));
          if (isNaN(calcul)) {
            throw new Error(
              "Vous ne pouvez pas entrée autre choses qu'un chiffre ou nombre !"
            );
          } else {
            false;
            return Number(calcul);
          }
        } catch (error) {
          alert(error);
        }
      }
    }
  
    function add(firstNumber, secondNumber) {
      return firstNumber + secondNumber;
    }
  
    function sub(firstNumber, secondNumber) {
      return firstNumber - secondNumber;
    }
  
    function multiplication(firstNumber, secondNumber) {
      return firstNumber * secondNumber;
    }
  
    function divide(firstNumber, secondNumber) {
      return firstNumber / secondNumber;
    }
  })();
  
  