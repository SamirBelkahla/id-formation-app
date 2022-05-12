const header = document.querySelector(".header"); // On sélectionne l'élément header de notre page index.html
fetch("header-parents.html") // On fait une requète pour récupérer le contenu text du fichier header.html (qui ici contient juste une div)
.then(res=>res.text())
.then(data=>{
  header.innerHTML = data; // On charge le contenu de la balise header avec le text renvoyé par le fetch
});
