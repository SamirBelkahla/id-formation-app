// Pour implémenter le template header
const header = document.querySelector(".header"); // On sélectionne l'élément header de notre page index.html
fetch("header-admin.html") // On fait une requète pour récupérer le contenu text du fichier header.html
.then(res=>res.text())
.then(data=>{
  header.innerHTML = data; // On charge le contenu de la balise header avec le text renvoyé par le fetch
});

// On récupère le contenu du localStorage pour disposer des données sans à voir à utiliser à nouveau un fetch.
const datas = JSON.parse(localStorage.getItem("db")); 

// ici on ne récupère que le tableau demandes du localStorage

for (const demandes in datas) {
  allDemandes = datas[demandes].demandes
  // console.log("Demandes : ", allDemandes);
}
let tabHead = ["Nom", "Prénom", "Adresse mail", "Téléphone"]
// Je déclare mes variable pour créer le tableau
let section = document.getElementById("section");
let table = document.createElement("table");
section.appendChild(table);
let tbody = document.createElement("tbody");
table.appendChild(tbody);
let trHead = document.createElement("tr");
tbody.appendChild(trHead);
for (let nbColonnes = 1; nbColonnes <= 4; nbColonnes++) {
  let thHead = document.createElement("th");
  thHead.textContent = tabHead[nbColonnes-1]
  trHead.appendChild(thHead);
}
for (let i = 0; i < allDemandes.length; i++) {
    let monTr = document.createElement("tr");
    tbody.appendChild(monTr);
    for (let j = 1; j <= 4; j++) {
    let monTd = document.createElement("td")
    console.log(allDemandes[i].nom);
    switch (j) {
      case 1:
        monTd.textContent = allDemandes[i].nom;
        break;
      case 2:
        monTd.textContent = allDemandes[i].enfant;
        break;
      case 3:
        monTd.textContent = allDemandes[i].mail;
        break;
      case 4:
        monTd.textContent = allDemandes[i].telephone;
        break;
        default:
    }
    monTr.appendChild(monTd);
    }
}


//passer de demande d'inscription à utilisateur, push
//renvoie dans local storage la personne validée dans utilisateur
//supprimer l'info après le push (addeventlistener click = suppression dans demande pour aller dans utilisateur)






