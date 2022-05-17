const db = localStorage.getItem("db");
if (!db) {
    fetch("../../bdd.json", {
    method: 'GET',
    headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-type': 'application/json'
    }
}).then(async function (response) {
    const data = await response.json();
    localStorage.setItem("db", JSON.stringify(data));
});
}

function inscription() {
    window.location.href = "../../inscription.html";
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

function connexion(e) {
    e.preventDefault();
    const data = localStorage.getItem("db");
    const usersData = JSON.parse(data);
    const users = usersData.categories.utilisateurs;
    const identifiant = document.getElementById("user-identifiant").value;
    const motDePasse = document.getElementById("user-mdp").value;
    const currentUser = users.find(user => identifiant === user.pseudo && motDePasse === user.motdepasse);
    if (!currentUser) {
        return alert("Nom d'utilisateur ou mot de passe incorrecte. Veuillez réessayer.");
    } 
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    location.href = currentUser.role === "admin" ? "../../gestion-inscrits.html" : "../../gestion-parents.html";
}

document.getElementById("btn_mdp_oublie").addEventListener("click", e => mdp());
document.getElementById("direct-inscription").addEventListener("click", e => inscription());
document.getElementById("btn_compte_google").addEventListener("click", e => google());
document.getElementById("btn_compte_fb").addEventListener("click", e => facebook());
document.getElementById("connexions").addEventListener("click", e => connexion(e));    






