// let arr = ["C", 9, 8, "/", 7, 6, "*", 5, 4, "-", 3, 2, "+", 1, 0, "="];

const allValeur = [{
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
        valeur: "=",
        class: '2case large' //pour cree un css pour augmenter la largeur de la case
    },
    {
        valeur: "(",
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

const allEcranHautmemoir = document.createElement('div');
allEcranHautmemoir.className = 'ecranHaut';
allCalculette.appendChild(allEcranHautmemoir);

const allEcranBas = document.createElement('div');
allEcranBas.className = 'ecranBas';
allCalculette.appendChild(allEcranBas);

const allTouche = document.createElement('div');
allTouche.className = 'touches';
allCalculette.appendChild(allTouche);

/* Fin du DOM */
/*-------------------------------------------------------( function qui calcule 1+1=2 etc ... ligne(121) )----------------------- */

function safeEval(str) {
    return Function('return ' + str)()
}

/*-------------------------------------------------------( boucle )------------------------------- */
/* Debut de tout les boutons de l'HTML */

for (let element of allValeur) {

    const bt = document.createElement('button');
    bt.className = element.class;
    allTouche.appendChild(bt);

    if (element.affiche) { // si dans allValeur il trouve element.affiche il fait la ligne(99)
        bt.textContent = element.affiche;
    } else { // si dans allValeur il trouve element.affiche il fait la ligne(99)
        bt.textContent = element.valeur;
    }

    bt.addEventListener( // 'addEventListener' rajouter un evenement

        'click',
        function () {
            if (element.valeur == 'C') {
                allEcranBas.textContent = '';
                allEcranHautmemoir.textContent = '';
            } else if (element.valeur == '=') {
                allEcranHautmemoir.textContent = allEcranBas.textContent;
                let reponse = safeEval(allEcranBas.textContent);
                allEcranBas.textContent = reponse;
            } else {
                allEcranBas.textContent += element.valeur;
            }
        }
    )


}