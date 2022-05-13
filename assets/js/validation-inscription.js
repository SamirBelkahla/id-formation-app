// Pour implémenter le template header
const header = document.querySelector(".header"); // On sélectionne l'élément header de notre page index.html
fetch("header-admin.html") // On fait une requète pour récupérer le contenu text du fichier header.html
.then(res=>res.text())
.then(data=>{
  header.innerHTML = data; // On charge le contenu de la balise header avec le text renvoyé par le fetch
});

// On récupère le contenu du localStorage pour disposer des données sans à voir à utiliser à nouveau un fetch.
const datas = JSON.parse(localStorage.getItem("datas")); 

// ici on récupère que le tableau demandes du localStorage

for (const demandes in datas) {
  allDemandes = datas[demandes].demandes
  console.log(allDemandes);
}
allDemandes.forEach(demande => {
  console.log(demande);
  let divDemandes = document.createElement("div");
  divDemandes.innerText = demande.nom + demande.enfant;
  document.querySelector(".demande").appendChild(divDemandes);
});




