// let arr = ["C", 9, 8, "/", 7, 6, "*", 5, 4, "-", 3, 2, "+", 1, 0, "="];

const allValeur = [ {
        valeur: "AC",
        class: '2case Couleur-C' //pour cree un css pour le boutton 'C'
    },
    {
        valeur: "C",
        class: '2case Couleur-C' //pour cree un css pour le boutton 'C'
    },
   
    {
        valeur: "0",
        class: '2case Couleur' //pour cree un css pour le boutton 'C'
    },

    {
        valeur: ".",
    },
    {
        valeur: "/",
        affiche: "÷", // alt (M) + 0247 => ÷
    },
    {
        valeur: "1",
        class: '2case Couleur' //pour cree un css pour le boutton 'C'
    },

    {
        valeur: "2",
        class: '2case Couleur' //pour cree un css pour le boutton 'C'
    },

    {
        valeur: "3",
        class: '2case Couleur' //pour cree un css pour le boutton 'C'
    },
    {
        valeur: "-",
    },
    {
        valeur: "4",
        class: '2case Couleur' //pour cree un css pour le boutton 'C'
    },

    {
        valeur: "5",
        class: '2case Couleur' //pour cree un css pour le boutton 'C'
    },

    {
        valeur: "6",
        class: '2case Couleur' //pour cree un css pour le boutton 'C'
    },
    {
        valeur: "+",
    },
    {
        valeur: "7",
        class: '2case Couleur' //pour cree un css pour le boutton 'C'
    },

    {
        valeur: "8",
        class: '2case Couleur' //pour cree un css pour le boutton 'C'

    },
    {
        valeur: "9",
        class: '2case Couleur' //pour cree un css pour le boutton 'C'

    },
    {
        valeur: "*",
        affiche: "x",
    },
    {
        valeur: "(",
    },
    {
        valeur: "=",
        class: '2case large' //pour cree un css pour augmenter la largeur de la case
    },
    {
        valeur: ")",
    },
];

/*-------------------------------------------------------( calculette )---------------------------- */
/* Debut du DOM HTML */

const mainContainer = document.querySelector("main")
mainContainer.innerHTML = "";

const allCalculette = document.createElement('div');
allCalculette.className = 'calculatrice';
mainContainer.appendChild(allCalculette);
//OK

const allAffichage = document.createElement('div');
allAffichage.className = 'affichage';
allCalculette.appendChild(allAffichage);


const allEcranGauche = document.createElement('div');
allEcranGauche.className = 'ecranGauche';
allAffichage.appendChild(allEcranGauche);

const allEcranDroite = document.createElement('div');
allEcranDroite.className = 'ecranDroite';
allAffichage.appendChild(allEcranDroite);

const allEcranHautMemoir = document.createElement('div');
allEcranHautMemoir.className = 'ecranHautMemoir';
allEcranDroite.appendChild(allEcranHautMemoir);

const allEcranBas = document.createElement('div');
allEcranBas.className = 'ecranBas';
allEcranDroite.appendChild(allEcranBas);

//ok
const allTouche = document.createElement('div');
allTouche.className = 'touches';
allCalculette.appendChild(allTouche);

/* Fin du DOM */
/*-------------------------------------------------------( function qui calcule 1+1=2 etc ... ligne(167) )----------------------- */

function safeEval(str) {
    return Function('return ' + str)()
}

/*-------------------------------------------------------( function de l'historique ligne(170) )----------------------- */

function historique (){

    let histori = allEcranHautMemoir.textContent + "= " + allEcranBas.textContent ;
    arr.push(histori);
    allEcranGauche.textContent = arr ;
}

/*-------------------------------------------------------( boucle )------------------------------- */
/* Debut de tout les boutons de l'HTML */


let arr = [] ; //besoin pour l'historique


for (let element of allValeur) {

    const bt = document.createElement('button');
    bt.className = element.class;
    allTouche.appendChild(bt);

    if (element.affiche) { // si dans 'allValeur'ligne(3) il trouve element.afficheligne(exemple:22) il fait le if
        bt.textContent = element.affiche;
    } else { // si dans 'allValeur'ligne(3) il trouve PAS element.afficheligne(exemple:42) il fait le else 
        bt.textContent = element.valeur;
    }

    bt.addEventListener( // 'addEventListener' rajouter un evenement

        'click',
        function () {
            if (element.valeur == 'C') {
                allEcranBas.textContent = '';
                allEcranHautMemoir.textContent = '';
            } else if (element.valeur == '=') {
                allEcranHautMemoir.textContent = allEcranBas.textContent;
                let reponse = safeEval(allEcranBas.textContent);
                allEcranBas.textContent = reponse;
                
                historique(allEcranBas.textContent , allEcranHautMemoir.textContent) 
                

            } 
            else if (element.valeur == 'AC'){
                allEcranBas.textContent = '';
                allEcranHautMemoir.textContent = '';
                allEcranGauche.textContent = '' ;
                arr = [];
            }
            
            else {
                allEcranBas.textContent += element.valeur; 
                
            }
        }
    )


}