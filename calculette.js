// let arr = ["C", 9, 8, "/", 7, 6, "*", 5, 4, "-", 3, 2, "+", 1, 0, "="];

const allValeur = [{
        valeur: "C",
        class: '2case Couleur-C' //pour cree un css pour le boutton 'C'
    },

    {
        valeur: "0",
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
    },

    {
        valeur: "2",
    },

    {
        valeur: "3",
    },
    {
        valeur: "-",
    },
    {
        valeur: "4",
    },

    {
        valeur: "5",
    },

    {
        valeur: "6",
    },
    {
        valeur: "+",
    },
    {
        valeur: "7",
    },

    {
        valeur: "8",

    },
    {
        valeur: "9",

    },
    {
        valeur: "*",
        affiche: "x",
    },
    {
        valeur: "=",
        class: '2case large' //pour cree un css pour augmenter la largeur de la case
    },
];

/*-------------------------------------------------------( calculette )---------------------------- */
/* Debut du DOM HTML */

const mainContainer = document.querySelector("main")
mainContainer.innerHTML = "";

const allCalculette = document.createElement('div');
allCalculette.className = 'calculatrice';
mainContainer.appendChild(allCalculette);

const memoir = document.createElement('div');
memoir.className = 'ecranHaut';
allCalculette.appendChild(memoir);

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

    bt.addEventListener(

        'click',
        function () {
            if (element.valeur == 'C') {
                allEcranBas.textContent = '';
                memoir.textContent = '';
            } else if (element.valeur == '=') {
                memoir.textContent = allEcranBas.textContent;
                let reponse = safeEval(allEcranBas.textContent);
                allEcranBas.textContent = reponse;
            } else {
                allEcranBas.textContent += element.valeur;
            }
        }
    )


}