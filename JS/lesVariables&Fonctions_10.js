// Les différents types
//     Number
//     String
//     Booléen
    // */  
    //Conversion
    // let variableStringAConvertir = "12";
    // Number(variableStringAConvertir)
    // parseInt();
    // variableStringAConvertir = +variableStringAConvertir;
/*
    Déclaration de variable

    */
    var maVariableUn = 0;
    let maVariableDeux = 0;
    const maConst = 0;

    maVariableUn = 10;

/*
    Afficher une variable 

    */
    console.log();
    //alert();

/*
    Déclaration de fonction
    avec ou sans return
    avec ou sans parametre, avec un defaut si parametre 
    */
    function somme(a,b) {
        var resultat = a + b;
        console.log("le resultat est" , resultat);
        //Gabarit literal 
        console.log(`le resultat est ${resultat}`);
    }
    sommeArrow = (a, b) => {
        return a + b;
    }
/* 
    Appel de fonction 

    */

    somme(5, 6);

 /* opérateur de comparaison
    */
   if( 10 == 10){
    'true'
   }else if (10 < 10) {
        'false'
   }else if (10 > 10){
    'false'
   }else if (10 < 10 && 10 < 11){

   }else if (10 < 10 || 10 < 11){

   }else{

   }

   /* Boucle */

   let resultat = 0;

   while(resultat < 10){
    resultat++;
    console.log(resultat);
   }
   
   for(var i = 0; i < 10; i++){
       console.log(i);
   }