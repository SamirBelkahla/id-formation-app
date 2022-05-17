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
function lien() {
  window.location.href = "gestion-parents.html";
}

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
  table.rows[i].cells[4].addEventListener("click", e => lien());
  table.rows[i].cells[4].style.cursor = "pointer";
  table.rows[i].cells[4].style.color = "green";
  let btn = document.createElement("BUTTON");
        let t = document.createTextNode("Voir le profil");
        btn.appendChild(t);
        table.rows[i].cells[4].appendChild(btn);
          btn.style.cursor = "pointer";
          btn.style.backgroundColor = "transparent";
          btn.style.border = "1px solid #D4D4D4";
          btn.style.borderRadius = "12px";
          btn.style.padding = "0px 5px";
          btn.style.color = "#195A5B";
          btn.style.margin = "0px 1px";        
}



// permet d'ajouter du style en mode css
let style = document.createElement("style");
style.innerHTML = `

`;
document.head.append(style);
