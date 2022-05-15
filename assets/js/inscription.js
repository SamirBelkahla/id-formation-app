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
    }

    const data = localStorage.getItem("data");
    const jsonData = JSON.parse(data);
    const ids = jsonData.categories.demandes.map(object => object.id);
    const max = Math.max.apply(null, ids);
    newUser.id = max + 1;
    jsonData.categories.demandes.push(newUser);
    localStorage.setItem("data", JSON.stringify(jsonData));
    e.preventDefault();
}

document.getElementById("form-inscription").addEventListener("submit", e => sendForm(e));