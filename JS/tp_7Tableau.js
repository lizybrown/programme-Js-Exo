// Je vous invite à récupérer le tableau ci-dessous et à y rajouter un 3eme tableau à l’aide de la
// *********
// fonction splice().

let tab2 = [
[
'titi',
'toto',
'tata'
],
[
'truc',
'muche',
'bidule'
]
];

// *****************************************

let array = [
    ["titi", "tata", "toto"],
    ["jiji", "jaja", "jojo"],
  ];
  
  console.log(array);
  
  
  array.splice(2, 0, ["jobi", "joba", "gipsyking"]);
  
  console.log(array);
  
  let tableauChiffre = [1, 4, 2, 5];
  
  for (let i = 0; i < tableauChiffre.length; i++){
    console.log(`Affichage du tableau : ${tableauChiffre[i]}`)
  }
  
  for (let i = 0; i < array.length; i++){
    console.log(`Affichage du tableau : ${array[i]}`);
    for (let j = 0; j < array[i].length; j++){
      console.log(`Affichage du tableau : ${array[i][j]}`);
    }
  }


//   *****************************
//Parcourir des tableau



let classe = ["jean", "michel", "bertrand", "bill"];

for (const student of classe) {
  console.log(student);
}

for (const student in classe) {
  console.log(student);
}

classe.forEach((studentName) => console.log(studentName));

// *******************************************************
//objet ou tableau associatif


let classe = {
    'prenom':'jean',
    'nom':'michel',
    bouleDeFeu : () => console.log("boule de feu")
    };
    
    //for each
    Object.values(classe).forEach(value=>{
    console.log(value)
    })
    Object.keys(classe).forEach(key=>{
    console.log(value)
    })
    //for in
    for (const index in classe){
    console.log(classe[index]
    );
    }

    // **************************TIPS*********************

// fruits = ['pomme', 'banane', 'poire', 'fraise'];

// // •fruits.length : ("retourne le nombre d'éléments dans le tableau (ici retourne 4")

// •fruits[0] : sélectionne le premier élément

// •fruits[length - 1] : sélectionne le dernier élément

// •fruits.push('pamplemousse') : ajoute un élément à la fin du tableau

// •fruits.unshift('pamplemousse') : ajoute un élément au début du tableau

// •fruits.pop() : supprime le dernier élément

// •fruits.shift() : supprime le premier élément

// •fruits.indexOf('banane') : retourne l'index d'un élément

// •fruits.join() : concatène les éléments dans une chaîne de caractères avec virgules, mais il est possible de spécifier un autre séparateur dans les paranthèses

// •fruits.slice() : crée une copie du tableau (à associer à une autre variable donc)

// •fruits.splice([début], [nbASupprimer], [élément(s)]) : retire, remplace ou ajoute des éléments.

// Début : l'index à partir duquel commencer le changement, si négatif, part de la fin du tableau

// nbASupprimer : un entier indiquant le nombre d'éléments à retirer ou remplacer

// Element(s) : les éléments à ajouter à partir du début précisé. Si aucun élément n'est spécifié, alors n'en ajoutera pas.