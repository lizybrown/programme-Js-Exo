// Consigne :
// - Créez une fonction qui permet de lire parcourir et de console.log les deux tableaux ci-
// dessous.
// - Le résultat attendu est celui-ci :


let formateur = ['Ophelie', 'Benjamin','Mathieu','Leo']
let benjamin = {
'nom': 'bailly',
'prenom':'benjamin',
'force': 'extreme',
'ego': 'surdimensionné'
}

// *************************

function readTab(tab) {
    let data = "";
    for (let index in tab) {
      data += index + " : " + tab[index] + "\n";
    }
  
    console.log(data);
  }
  
  readTab(formateur);
  readTab(benjamin);