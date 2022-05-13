// Pour implémenter le template header
const header = document.querySelector(".header"); // On sélectionne l'élément header de notre page index.html
fetch("header-admin.html") // On fait une requète pour récupérer le contenu text du fichier header.html
.then(res=>res.text())
.then(data=>{
  header.innerHTML = data; // On charge le contenu de la balise header avec le text renvoyé par le fetch
});

// On récupère le contenu du localStorage pour disposer des données sans à voir à utiliser à nouveau un fetch.
const datas = JSON.parse(localStorage.getItem("datas")); 

// ici on récupère que le tableau eleves du localStorage
for (const eleves in datas) {
  allEleves = datas[eleves].eleves
}

// ici on récupère que le tableau utilisateurs du localStorage
for (const utilisateurs in datas) {
  allUtilisateurs = datas[utilisateurs].utilisateurs
}


// ici on récupère que le tableau utilisateurs du localStorage
for (const utilisateurs in datas) {
    allUtilisateurs = datas[utilisateurs].utilisateurs
    /*console.log(allUtilisateurs)*/
    for (const lesRoles in allUtilisateurs) {
      allRole = allUtilisateurs[lesRoles].role
      /*console.log(allRole)*/
        let nombreAdmin = 0;
        if (allRole === "admin"){
        nombreAdmin++;
        console.log(nombreAdmin);
        }
    }
}

let body = document.body;
let table = document.createElement("table");
let tbody = document.createElement("tbody");


const nombreLignes = allEleves.length+1;
const nombreColonnes = 5;

for (let ligne = 0; ligne < nombreLignes; ligne++) {
			let tr = document.createElement("tr");
      	for (let colonne = 0; colonne < nombreColonnes; colonne++) {
          if (colonne === 0 && ligne === 0) {
          	let th = document.createElement("th");
            let thText = document.createTextNode("");
            tr.append(th);
            th.append(thText);
          }
          else if (ligne === 0) {
          	let th = document.createElement("th");
            tr.append(th);
            let thText = document.createTextNode("Col "+colonne);
            th.append(thText);
            th.setAttribute('class', "propriete"+[colonne]);
          }
          else if (colonne === 0) {
          	let th = document.createElement("th");
            tr.append(th);
            let thText = document.createTextNode("Line "+ligne);
            th.append(thText);
            th.setAttribute('class', "enfants"+[ligne]);
          }
          else if (colonne >= 1 && ligne >= 1) {
                let td = document.createElement("td");
                let tdText = document.createTextNode("Line "+ligne+" Col "+colonne);
                tr.append(td);
                td.append(tdText);
                td.setAttribute('class', "case"+[colonne]+[ligne]);
              }
      		}
      tbody.append(tr);
}
table.append(tbody);
body.append(table);
