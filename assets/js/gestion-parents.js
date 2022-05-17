// On récupère le contenu du localStorage pour disposer des données sans à voir à utiliser à nouveau un fetch.
const datas = JSON.parse(localStorage.getItem("db"));
const connect = JSON.parse(localStorage.getItem("currentUser"));
console.log(connect);
// Pour implémenter le template header
const header = document.querySelector(".header"); // On sélectionne l'élément header de notre page index.html
fetch("header-parents.html") // On fait une requète pour récupérer le contenu text du fichier header.html
.then(res=>res.text())
.then(data=>{
  header.innerHTML = data; // On charge le contenu de la balise header avec le text renvoyé par le fetch
});


// ici on récupère que le tableau currentUser du localStorage
for (const [key, value] of Object.entries(connect)) {
  let divConnect = document.createElement("div");
  divConnect.innerText = `${key}: ${value}`;
  document.querySelector(".parent").appendChild(divConnect);
}

// ici on récupère que le tableau eleves du localStorage
let allEleves;
for (const eleve in datas) {
  allEleves = datas[eleve].eleves;
}


let lesEleves;
for (lesEleves of allEleves) {
  if (lesEleves.idParent === connect.id) {
      for (const [key, value] of Object.entries(lesEleves)) {
        if (document.querySelector(".enfant") != null) {
          let divConnect = document.createElement("div");
          divConnect.innerText = `${key}: ${value}`;
          document.querySelector(".enfant").appendChild(divConnect);
        }
        else if (document.querySelector(".enfant") === null) {
          let divConnect = document.createElement("div");
          divConnect.innerText = `hghgf`;
          document.querySelector(".enfant").appendChild(divConnect);
        }
      }
  }
}

