// Pour implémenter le template header
const header = document.querySelector(".header"); // On sélectionne l'élément header de notre page index.html
fetch("header-parents.html") // On fait une requète pour récupérer le contenu text du fichier header.html
.then(res=>res.text())
.then(data=>{
  header.innerHTML = data; // On charge le contenu de la balise header avec le text renvoyé par le fetch
});

// On récupère le contenu du localStorage pour disposer des données sans à voir à utiliser à nouveau un fetch.
const datas = JSON.parse(localStorage.getItem("db")); 


// ici on récupère que le tableau retards du localStorage
for (const retards in datas) {
    allRetards = datas[retards].retards
    console.log(allRetards);
  }
  allRetards.forEach(retard => {
    console.log(retard);
    let divRetard = document.createElement("div");
    divRetard.innerText = " Le parent portant l'id : " + retard.idParent + " est redevable de " + retard.montant + "€";
    document.querySelector(".retard").appendChild(divRetard);
  });


