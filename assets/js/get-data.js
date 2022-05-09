// On récupère le contenu du localStorage pour disposer des données sana voir à utiliser à nouveau un fetch.
const datas = JSON.parse(localStorage.getItem("datas")); 
let allUtilisateurs;
for (const data in datas) {
    allEleves = datas[data].eleves
}
allEleves.forEach(eleve => {
    console.log(eleve);
    let divEleve = document.createElement("div");
    divEleve.innerText = "\n" + eleve.prenom + " " + eleve.nom + ", né(e) le " + eleve.dateNaissance;
    document.querySelector(".maDiv").appendChild(divEleve);
});