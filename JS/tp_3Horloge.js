// Créez une fonction qui affiche « c’est le matin » si l’heure est inférieur à midi,
// « c’est l’après midi » si l’heure est entre 12h et 18h et « c’est le soir » si l’heure
// est au dessus.

const dayToday = new Date();

alert("Nous sommes le" + " " + dayToday);

function noonOrNot() {
  let hour = dayToday.getHours();
  alerte("")
  console.log(typeof hour + hour);



  if (hour < 12 && hour > 7) {
    alert("C'est le matin");
  } else if (hour >= 12 && hour < 20) {
    alert("C'est l'après-midi");
  } else {
    alert("Arte c'est la nouit !");
  }
}

noonOrNot();

//Correction

function timeOfDay(heure) {
  if (heure >= 0 && heure < 24) {
    if (heure < 12) {
      console.log("c'est le matin");
    } else if (heure < 18) {
      console.log("c'est l'après-midi");
    } else {
      console.log("c'est la soirée");
    }
  } else {
    console.log("rentrez une heure valable !");
  }
}

timeOfDay(12.22);