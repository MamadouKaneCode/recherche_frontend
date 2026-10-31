const groupeA = ["Awa", "Moussa", "Fatou"];
const groupeB = ["Ibra", "Mariama"];
const etudiantBase = { nom: "Diop", filiere: "IAGE", niveau: "L2" };

const groupeUnion = [...groupeA,...groupeB];
console.log(groupeUnion);

const copie = [...groupeA, "Cheikh"];
console.log(copie);
console.log(groupeA);

const etudiantComplet = {...etudiantBase, age: "22", ville: "Dakar"};
console.log(etudiantComplet);

const etudiantCopie = {...etudiantBase, niveau: "L3"};
console.log(etudiantCopie);

const coordonnees = { ville: "Dakar" , telephone: "77 123 45 67" , email: "etudiant@dakar.sn" };
const contact = { email: "etudiant@gmail.com" ,telephone: "77 987 65 43" , adresse: "Dakar, Senegal" };
const profil = {...coordonnees, ...contact};
console.log(profil);