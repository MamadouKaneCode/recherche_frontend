const etudiantL2 = {
  id: 104,
  prenom: "Aminata",
  nom: "Fall",
  notes: [13, 16, 12],
  filiere: "IAGE"
};

function extraireIdentite(etudiant){
    const {prenom, nom, filiere} = etudiant;
    return {prenom, nom, filiere};
}
console.log(extraireIdentite(etudiantL2));

function calculerMoyenneNote(etudiant){
    const {notes} = etudiant;
    const somme = notes.reduce((s, m) => s + m, 0);
    return somme / notes.length;
}
console.log(calculerMoyenneNote(etudiantL2));

function ajouterNote(etudiant , nouvelleNote){
    const {notes} = etudiant;
    const nouvellesNotes = [...notes, nouvelleNote];
    return {...etudiant, notes: nouvellesNotes};
}
console.log(ajouterNote(etudiantL2, 18));

function creerResume(etudiant, ...options){
    const {prenom, nom, filiere} = etudiant;
    const moyenne = calculerMoyenneNote(etudiant);
    return {
        identite: {prenom, nom, filiere},
        moyenne: moyenne,
        ...options
    };
}
console.log(creerResume(etudiantL2, {age: 22}, {ville: "Dakar"}));