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
let tabHead = ["Nom", "Prénom", "Adresse mail", "Téléphone", ""]
// Je déclare mes variable pour créer le tableau
let section = document.getElementById("section");
let table = document.createElement("table");
section.appendChild(table);
let tbody = document.createElement("tbody");
table.appendChild(tbody);
let trHead = document.createElement("tr");
tbody.appendChild(trHead);
for (let nbColonnes = 1; nbColonnes <= 5; nbColonnes++) {
  let thHead = document.createElement("th");
  thHead.textContent = tabHead[nbColonnes-1]
  trHead.appendChild(thHead);
}
for (let i = 0; i < allDemandes.length; i++) {
    let monTr = document.createElement("tr");
    tbody.appendChild(monTr);
    for (let j = 1; j <= 5; j++) {
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
      case 5: 
        let btn = document.createElement("BUTTON");
        let t = document.createTextNode("Valider");
        btn.appendChild(t);
        monTd.appendChild(btn);
          btn.style.cursor = "pointer";
          btn.style.backgroundColor = "transparent";
          btn.style.border = "1px solid #D4D4D4";
          btn.style.borderRadius = "12px";
          btn.style.padding = "0px 10px";
          btn.style.color = "green";
          btn.style.margin = "0px 5px";        
        let btn2 = document.createElement("BUTTON");
        let t2 = document.createTextNode("Refuser");
          btn2.appendChild(t2);
          monTd.appendChild(btn2);
          btn2.style.cursor = "pointer";
          btn2.style.backgroundColor = "transparent";
          btn2.style.border = "1px solid #D4D4D4";
          btn2.style.borderRadius = "12px";
          btn2.style.padding = "0px 10px";
          btn2.style.color = "red";
      default:
        function valider() {
        // location.href = "../../index.html";
        
        }
    btn.addEventListener("click", e => valider());
    }
    monTr.appendChild(monTd);
    }
} 




//passer de demande d'inscription à utilisateur, push
//renvoie dans local storage la personne validée dans utilisateur
//supprimer l'info après le push (addeventlistener click = suppression dans demande pour aller dans utilisateur)






