function additionner(...nombres) {
    return nombres.reduce((s, m) => s + m, 0);
}
console.log(additionner(2, 3)); 
console.log(additionner(1, 2, 3, 4, 5));

function afficherPremierEtAutres(premier, ...autres) {
    console.log("Premier:", premier);
    console.log("Autres:", autres);
}
afficherPremierEtAutres("Moussa", "Demba", "Khadim", "Mamadou");

function creerFiche(nom, filiere, ...competences) {
    return{
        nom : nom,
        competences : competences,
        filiere : filiere
    }
}
console.log(creerFiche("Awa", "IAGE", "JavaScript", "SQL"));

// RÈPONSE QUESTION 4: Le rest doit être placé en dernier dans la liste des paramètres d'une fonction car son role est de prendre tous ce qui reste.