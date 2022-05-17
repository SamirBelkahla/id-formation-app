// On récupère le contenu du localStorage pour disposer des données sans à voir à utiliser à nouveau un fetch.
const datas = JSON.parse(localStorage.getItem("db"));
/*console.log("ContenuStorage : ", contenuStorage);*/

// Pour implémenter le template header
const header = document.querySelector(".header"); // On sélectionne l'élément header de notre page index.html
fetch("header-admin.html") // On fait une requète pour récupérer le contenu text du fichier header.html
.then(res=>res.text())
.then(data=>{
  header.innerHTML = data; // On charge le contenu de la balise header avec le text renvoyé par le fetch
});


// ici on récupère que le tableau utilisateurs du localStorage
let nombreAdmin = 0;
let allUtilisateurs;
let allRole;
let tableauParents = [];
for (const utilisateurs in datas) {
    allUtilisateurs = datas[utilisateurs].utilisateurs;
    // ici on récupère que la valeur de l'objet rôle
    for (const lesRoles in allUtilisateurs) {
        allRole = allUtilisateurs[lesRoles].role;
        // ici on récupère que le nombre d'utilisateurs qui ont le rôle admin
        if (allRole === "admin"){
          nombreAdmin++;
        }
        // ici on récupère que les utilisateurs qui n'on pas le rôle admin
        else {
          tableauParents.push(allUtilisateurs[lesRoles]);
        }
    }
}


// déclare mes variable pour crée le tableau
let body = document.body;
let table = document.createElement("table");
let tbody = document.createElement("tbody");
const nombreLignes = (allUtilisateurs.length+1)-nombreAdmin;
const nombreColonnes = 5;

for (let ligne = 0; ligne < nombreLignes; ligne++) {
			let tr = document.createElement("tr");
      	for (let colonne = 0; colonne < nombreColonnes; colonne++) {
          if (colonne === 0 && ligne === 0) {
          	let th = document.createElement("th");
            tr.append(th);
            th.setAttribute('class', "enfants"+[0]);
            th.style.visibility="hidden";
          }
          else if (ligne === 0) {
          	let th = document.createElement("th");
            tr.append(th);
            th.setAttribute('class', "propriete"+[colonne]);
          }
          else if (colonne === 0) {
          	let th = document.createElement("th");
            tr.append(th);
            th.setAttribute('class', "enfants"+[ligne]);
            th.style.visibility="hidden";
          }
          else if (colonne >= 1 && ligne >= 1) {
            let td = document.createElement("td");
            tr.append(td);
            td.setAttribute('class', "case"+[colonne]+[ligne]);
          }
      	}
      tbody.append(tr);
}
table.append(tbody);
body.append(table);


// permet de créer un lien
let a = document.createElement('a');  
let lien = document.createTextNode("Voici un lien"); 
a.appendChild(lien);  
a.title = "Comment faire un lien en JavaScript";  
a.href = "gestion-parents.html";
document.body.appendChild(a);
// idem
/*let myURL = "gestion-parents.html"
let myLink = '<a href="' + myURL +'">' + myURL + '</a>';
document.getElementById("output_link").appendChild(myLink);*/

// permet de sélectionner n'importe quelle case du tableau
console.log(table.rows);
table.rows[0].cells[1].textContent = "Nom";
table.rows[0].cells[2].textContent = "ID";
table.rows[0].cells[3].textContent = "Prénom du (des) enfant(s)";
table.rows[0].cells[4].textContent = "Détails";


// ici on récupère que le tableau eleves du localStorage
let allEleves;
for (const eleve in datas) {
  allEleves = datas[eleve].eleves;
}

// permet de remplir les colonnes du tableau
let lesEleves;
let i = 0;
for (parent of tableauParents) {
  i++;
  table.rows[i].cells[1].textContent = parent.nom;
  table.rows[i].cells[2].textContent = parent.id;
  for (lesEleves of allEleves) {
    if (lesEleves.idParent === parent.id && table.rows[i].cells[3].textContent === "") {
      table.rows[i].cells[3].textContent = lesEleves.prenom;
    }
    else if (lesEleves.idParent === parent.id && table.rows[i].cells[3].textContent != "") {
      table.rows[i].cells[3].textContent = table.rows[i].cells[3].textContent.concat(", " + lesEleves.prenom);
    }
  }
  let maChaîne = "Table des matières";
  table.rows[i].cells[4].textContent = maChaîne;
}



// permet d'ajouter du style en mode css
let style = document.createElement("style");
style.innerHTML = `
table {
  width: 95%;
  margin: auto;
  margin-top: 2rem;
  text-align: center;
}
th {
  border: 1px solid black;
  height: 2rem;
  font-size: 2rem;
  font-weight: bold;
}
td {
  border: 1px solid black;
  height: 4rem;
  font-size: 1.5rem;
}
`;
document.head.append(style);
