const etudiant = {
    id:2026,
    nom: "Ndiaye",
    prenom: "Moussa",
    filiere : "IAGE",
    niveau :"L2",
    ville : "Dakar"
};
const resultats = [15, 11, 17, 13, 16];

const {nom , prenom , filiere } = etudiant;
console.log(nom,prenom,filiere);
const {niveau : classe} = etudiant;
console.log(classe);

const {0: premiernote, 1: deuxiemenote, [resultats.length - 1]: dernier} = resultats;
console.log(premiernote,deuxiemenote,dernier);
console.log(resultats);

const [premier, , troisieme] = resultats;
console.log(premier,troisieme);

const {email = "etudiant@gmail.com"} = etudiant;
console.log(email);

console.log(`le prénom de l\'étudiant est : ${prenom} et son nom est : ${nom} il est en ${classe} et sa filière est : ${filiere}`);