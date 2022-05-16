function accueil() {
    window.location.href = "index.html";
    }

function google() {
    window.open("https://accounts.google.com","_blank", "width=600, height=600") ;
    }

function facebook() {
    window.open("https://www.facebook.com","_blank", "width=600, height=600") ;
    };

function sendForm(e) {
    const formData = new FormData(document.getElementById("form-inscription"));
    let newUser = {}
    for (let data of formData.entries()) {
        newUser[data[0]] = data[1];
        if (data[0] === "allergies") {
            const allergies = data[1].split(",");
            newUser.allergies = allergies;
        }
    }

    const data = localStorage.getItem("db");
    const jsonData = JSON.parse(data);
    const ids = jsonData.categories.demandes.map(object => object.id);
    const max = Math.max.apply(null, ids);
    newUser.id = max + 1;
    jsonData.categories.demandes.push(newUser);
    localStorage.setItem("db", JSON.stringify(jsonData));
    alert("Merci, votre demande a bien été prise en compte");
    e.preventDefault();
}

document.getElementById("logo").addEventListener("click", e => accueil())
document.getElementById("btn_compte_google").addEventListener("click", e => google())
document.getElementById("btn_compte_fb").addEventListener("click", e => facebook());
document.getElementById("form-inscription").addEventListener("submit", e => sendForm(e));