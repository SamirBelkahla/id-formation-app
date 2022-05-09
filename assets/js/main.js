/* 
Ceci est le code d'une fonction asynchrone getData() qui renvoie le 
résultat de la fonction asynchrone fetch() 
dont la promesse a été résolue via la fonction json() qui renvoie elle aussi une promesse.
*/
let datas;
await getData();
console.log("Voici les données : ", datas);
/* 
On peut stocker ces données dans le localStorage du navigateur pour les récupérer depuis une autre page éventuellement
https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage
*/
localStorage.setItem("datas", JSON.stringify(datas));
// On implémente une redirection vers une autre page
document.getElementById("myButton").onclick = function () {
  location.href = "localStorage.html";
};

async function getData() {
    const result = await fetch("bdd.json", {
        method: 'GET',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type': 'application/json'
        }
    });
    if (!result.ok) {
        throw new Error(`Code de l'erreur HTTP : ${result.status}`);
      }
    datas = await result.json();
}

/* 
Voici un exemple d'une autre utilisation de fetch() en utilisant la méthode .then() au lieu de await
Si la ressource n'est pas disponible (code erreur 4xx) ou 
que l'hôte ne répond pas (mauvaise adresse, en .fr au lieu de .com par exemple)
, vous pouvez effectuer un traitement particulier.
Ici on remplace l'image distante par une image locale
*/
const myImage = document.querySelector('img');
fetch('https://lh3.googleusercontent.com/IALtFQ0mxPXXtDAQikFdyFpAfq_u5oexn26Gk45uXKOg5z7bQMoqGTixvCemM_MwcqyqH65LjqL-psYXbokxYjTKKSUEGOk')
.then(function(response) {
    if(response.ok) {
        console.log(response);
          myImage.src = response.url;
          myImage.alt = "Ressource http";
        // });
      } else {
        console.log('Mauvaise réponse du réseau, on prend une image locale', response.status);
        myImage.src = "./assets/img/logo.png";
        myImage.alt = "Ressource locale suite ressource distante introuvable";
      }
})
.catch(function(error) {
    console.log('Il y a eu un problème avec l\'opération fetch: ' + error.message);
    myImage.src = "./assets/img/logo.png";
    myImage.alt = "Ressource locale suite défaut hôte";
  });
