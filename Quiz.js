var Question_Afficher = 0;
var score = 0;
var i = 0;
var NbClick = 0;

/*
var arrQuestion = [
    {"Q1" : "Que veut dire IP ?",
        "proposition_A": "A - Identifiant personnel",
        "proposition_B": "B - Internet protocol",
        "proposition_C": "C - Internaute privé"
    },

    {"Q2" : "Que veut dire LOL ?",
        "proposition_A": "A - League of legends",
        "proposition_B": "B - Laughing out live",
        "proposition_C": "C - Laughing of loud"
    },
*/

var Questions = [
    // Question N°1
    {
        Question: "Combien d'années dura la Guerre de Troie ?",
        Reponse: ["100 ans","50 ans","10 ans"],
        BonneRep: 2
    },
    // Question N°2
    {
        Question: "Combien y a t'il d'octets dans un kilo-octet ?",
        Reponse: ["256","1000","1024"],
        BonneRep: 2
    },
    // Question N°3
    {
        Question: "En informatique, la mémoire vive est appelée :",
        Reponse: ["ROM","RIM","RAM"],
        BonneRep: 2
    },
    // Question N°4
    {
        Question: "4 + 1 + 5 X 3 =",
        Reponse: ["20","30","10"],
        BonneRep: 0
    },
    // Question N°5
    {
        Question: "En quelle année à ouvert l'école du numérique à Fourmies ?",
        Reponse: ["2014","2016","2018"],
        BonneRep: 2
    },
    // Question N°6
    {
        Question: "Quelle est la couleur préférée du créateur de ce quiz ?",
        Reponse: ["Bleu","Rouge","Vert"],
        BonneRep: 0
    },
    // Question N°7
    {
        Question: "Combien d'apprenant sont entré en formation à UpTo Fourmies en 2018 ?",
        Reponse: ["35","24","18"],
        BonneRep: 1
    },
    // Question N°8
    {
        Question: "Prénom du formateur de la 1ere session à Upto Fourmies ?",
        Reponse: ["Symon","Simon","Cimon"],
        BonneRep: 1
    },
    // Question N°9
    {
        Question: "En Décembre 2018, combien restait il d'apprenant ?",
        Reponse: ["24","13","20"],
        BonneRep: 2
    },
    // Question N°10
    {
        Question: "Quel est le lien du site web de l'école du numérique de Fourmies ?",
        Reponse: ["uptofourmies.eu","uptofourmies.fr","uptofourmies.com"],
        BonneRep: 1
    }
];

// Affichage de la question et des Proposition des propositions de réponse :
$("#Question").text(Questions[0].Question);
$("#Reponse_0").text(Questions[0].Reponse[0]);
$("#Reponse_1").text(Questions[0].Reponse[1]);
$("#Reponse_2").text(Questions[0].Reponse[2]);

// boucle pour afficher et clic pour choisir la réponse
for (let J = 0;J<=2;J++)
    {
        $("#Reponse_"+J).click(function () {

            console.log("Résultat : "+Questions[i].BonneRep);
            console.log("Choix du joueur : "+J);


            if (Questions[i].BonneRep==J)
                {
                    score++;
                    console.log("score : "+score);
                }
            else
                {
                    console.log("score : "+score);

                }

            NbClick++;

            if (NbClick>9)
            {
                $("#Quiz").hide();
                $("#Affscores").show();

                $("#Affscores").html("Score : "+score);
            }
        console.log(NbClick);

            i++;

            $("#Question").text(Questions[i].Question);
            $("#Reponse_0").text(Questions[i].Reponse[0]);
            $("#Reponse_1").text(Questions[i].Reponse[1]);
            $("#Reponse_2").text(Questions[i].Reponse[2]);
            //console.log(i);
        });


    }



//if (Questions < Question_Afficher.length-1) //peu importe la longueur du tableau




/*
// Affichage de la question et des Proposition des propositions de réponse :
$("#Question").text(arrQuestion[0].Q1);
$("#Reponse_A").text(arrQuestion[0].proposition_A);
$("#Reponse_B").text(arrQuestion[0].proposition_B);
$("#Reponse_C").text(arrQuestion[0].proposition_C);
*/

/*
// click pour Question Quivante :
$("#suivant").click(function(){

    if (Question_Afficher < arrQuestion.length-1) //peu importe la longueur du tableau
    //ou => if (Question_Afficher < 2)
    {
        $("#Nom_Age").text(arrQuestion[Question_Afficher+1]);
        Question_Afficher++;
    }
});
*/













// Faire bouger le texte du title :
var txt=" * * * Quiz En Ligne By Tidadou ";
var espera=110;
var refresco=null;
function rotulo_title() {
    document.title=txt;
    txt=txt.substring(1,txt.length)+txt.charAt(0);
    refresco=setTimeout("rotulo_title()",espera);}
rotulo_title();

//Bouton Pour Actualiser la page :
function refresh()
    {
        window.location.reload(false);
    }