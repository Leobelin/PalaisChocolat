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
addavis(data.temoignages);

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
    <p>${temoignages.note}</p>
    </div>
    `})
}