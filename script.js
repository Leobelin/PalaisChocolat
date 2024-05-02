// Envoie une requête GET à l'URL de  pour récupérer des données
fetch("chocolatier.json")
    // Une fois que la réponse est reçue
    .then(rep => {
        // transforme la reponse obtenu en JSON 
        return rep.json();
    })
    // Une fois que les données JSON sont extraites avec succès, je les transmet à une fonction pour l'utiliser plus tard
    .then(data => {
        // Appelle la fonction addgateaux() avec les données JSON en entrée
        addgateaux(data.realisations);
        addavis(data.temoignages);
        addbene(data.listeBenefficesClients);
    });

// Cette fonction prend les données JSON en entrée et effectue une action sur celles-ci
function addgateaux(tableauRealisations) {

    // Affiche les données dans la console du navigateur

    tableauRealisations.forEach(realisations => {



        document.querySelector("#content").innerHTML +=
            `
        <div class="carte">
        <h2>${realisations.nom} </h2>
        <p>${realisations.description}</p>
        <img src="${realisations.image}">
        <a href="" class="bouton">Acheté</a>
        </div>
        `
    })
}

// Cette fonction prend les données JSON en entrée et effectue une action sur celles-ci
function addavis(tableauTemoignages) {

    // Affiche les données dans la console du navigateur

    tableauTemoignages.forEach(temoignages => {



        document.querySelector("#temoignages").innerHTML +=
            `
    <div class="avis">
    <h3>${temoignages.prenom} </h3>
    <p>${temoignages.typePrestation}</p>
    <p>${temoignages.commentaire}</p>
    <p> note: ${avis(temoignages.note)}</p>
    </div>
    `})
}
// Cette fonction prend les données JSON en entrée et effectue une action sur celles-ci
function addbene(tableauListeBenefficesClients) {

    // Affiche les données dans la console du navigateur

    tableauListeBenefficesClients.forEach(listeBenefficesClients => {



        document.querySelector("#listeBenefficesClients").innerHTML +=
            `
        <div class="bene">
        <h3>${listeBenefficesClients} </h3>
        </div>
        `})
}


var map = L.map('map').setView([47.22575885581474, -1.5517634805755953], 13);

L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
}).addTo(map);

L.marker([47.22575885581474, -1.5517634805755953]).addTo(map)
    .bindPopup("<h1>Le Palais Du Chocolat</h1><p>35 Rue des Gobelets Nantes 44200</p>")
    .openPopup();5

    function avis(note){
        let chaine=""
        for (let i=1; i<=note; i++){
        chaine+="★"
        }
        for(let j=0; j<5-note;j++){
          chaine+="☆"
        }
        return chaine
      }