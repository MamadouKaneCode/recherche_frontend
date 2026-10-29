// EXO1 
function calculermoyenne(note1, note2, note3){
    return(note1 + note2 + note3) / 3
}
console.log(calculermoyenne(12, 14, 16))

function estAdmis(moyenne){
    return moyenne >= 10;
}
console.log(estAdmis(calculermoyenne(9.5)))

function calculerprixTTC(prixHT ,tauxTVA=0.18){
    return prixTTC=prixHT + (prixHT * tauxTVA)
}
console.log(calculerprixTTC(10000))

const convertiEnMinutes = (heures) => heures * 60;
console.log(convertiEnMinutes(2))