/* chercher dans la base de donnée */
let datas;
await getData();
console.log("Voici les données : ", datas);
localStorage.clear();
localStorage.setItem("datas", JSON.stringify(datas));

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
export {datas as contenuStorage};