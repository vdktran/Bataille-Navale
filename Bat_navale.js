// Instructions

// • Deux joueurs (vous et la machine)

// • Chaque joueur possède un plateau de 10 colonnes (0 à 9) et 10 lignes (A à J).
// Chaque joueur possède un porte-avion (5 cases), un cuirassier (4 cases), un
// destroyer et un sous-marin (3 cases), un patrouilleur (2 cases).

// • Le programme place aléatoirement la flotte sur chaque plateau (pas de
// diagonale)

// • Le programme désigne aléatoirement qui démarre le jeu

// • Pour désigner un emplacement, on commence toujours par désigner la référence
// de la ligne. Ex: « A4 », « J0 », …

// • Si un emplacement a déjà été désigné, le programme l’indique et on rejoue.

// • Si à la place de désigner une case, on tape le mot « triche », le programme
// montre le plateau de l’ordinateur.

var arrj1 = [];
var arrj2 = [];

function createarr(tab) {

    // i = lignes  ;   j = colonnes
    for (let i = 0 ; i<10 ; i++) {
        
        tab[i] = [];

        for (let j = 0 ; j<10 ; j++) {

            tab[i][j] = 0;

        }

    }
}

createarr(arrj1);
createarr(arrj2);

function placeBoat(tab,w,x,y) {
// tab = tableau du Joueur 1 ou tableau du Joueur 2
// si porte avion w=5 ; cuirassier w=4 ; destroyer,sous-marin w=3 ; patrouilleur w=2 ;
// x = ligne ; y = colonne 

    var z = Math.floor(Math.random());

    if(z === 1) {
        // placement horizontal
        for (let i = 0 ; i < w ; i++) {
            tab[x][y+i]=1;
        }
    }
    else {
        // placement vertical
        for (let i = 0 ; i < w ; i++) {
            tab[x+i][y]=1;
        }
    }
}


// placement de la flotte (1 porte avion, 1 cuirassier, 1 destroyer, 1 patrouilleur)
function placeWholeFleet () {

    for (let w = 2; w<6; w++) {
        // reprendre ici
        let x = Math.floor(Math.random()*10)-(w-1);
        let y = Math.floor(Math.random());

        placeBoat(arrj1,w,x,y);
        placeBoat(arrj2,w,x,y);
    }

    // placement des sous-marins
    let x = Math.floor(Math.random());
    let y = Math.floor(Math.random());

    placeBoat(arrj1,3,x,y);
    placeBoat(arrj2,3,x,y);
}
