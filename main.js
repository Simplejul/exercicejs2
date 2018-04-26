
// Choix d un nombre par l'ordi 
var nbChoisi = Math.floor(Math.random() * 10);
console.log(nbChoisi);

// Demarrage de la boucle qui permet d avoir 3 essais
for (var essai = 1; essai < 4; essai++) {
    
    console.log("Essai " + essai);
    


// Choix d un nombre par le user
var nbUser = prompt("Entrez un chiffre entre 0 et 9");

// Definition "plus petit ou plus grand"
if (nbChoisi < nbUser) {
    console.log("Vous etes au dessus du nombre choisi!");
    if(essai === 3){
        console.log("Dommage, c est fini!");        
    }
} else if (nbChoisi > nbUser){
    console.log("Vous etes en dessous du nombre choisi!");
    if(essai === 3){
        console.log("Dommage, c est fini!");        
    }    
}else{
    console.log("Bravo!");  
    break;  
};
}