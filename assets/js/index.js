const db = localStorage.getItem("data");
if (!db) {
    fetch("../../bdd.json", {
    method: 'GET',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
    }
}).then(async function (response) {
    const data = await response.json();
    localStorage.setItem("data", JSON.stringify(data));
});
}

function inscription() {
    window.location.href = "inscription.html";
    }

function validInscription() {
    window.location.href = "validation-inscription.html";
    }

function google() {
    window.open("https://accounts.google.com","_blank", "width=600, height=600") ;
    }

function facebook() {
    window.open("https://www.facebook.com","_blank", "width=600, height=600") ;
    };
    
function mdp() {
    let mdpOublie = prompt("Veuillez renseigner votre adresse e-mail afin de recevoir votre nouveau mot de passe.", "E-Mail");
}


connexion.addEventListener("click", event => {
    function connexion (){
        const data = localStorage.getItem("data");
        const usersData = JSON.parse(data);
        let userData = .categories.utilisateurs;
        let identifiant = document.getElementById("user-identifiant").value;
        let motDePasse = document.getElementById("user-mdp").value;
        userData.forEach(element => {
            event.preventDefault();
            if ((identifiant === element.pseudo) && (motDePasse === element.motdepasse)) {
                result = true;
                if (element.pseudo === "admin") {
                    location.href = "../..gestion-inscrits.html";
                } else if (element.pseudo === "dujardin") {
                    location.href = "gestion-parents.html";
                } else {usersData
                    alert("Nom d'utilisateur ou mot de passe incorrecte. Veuillez réessayer.");
                }
            }
        });
    }
});





