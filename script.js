// Envoie une requête GET à l'URL de l'api pour récupérer des données
fetch("chocolatier.json")
    // Une fois que la réponse est reçue
    .then(rep => {
        // transforme la reponse obtenu en JSON 
        return rep.json();
    })
    // Une fois que les données JSON sont extraites avec succès, jeles transmet à une fonction pour l'utiliser plus tard
    .then(data => {
        // Appelle la fonction addProducts() avec les données JSON en entrée
        addgateaux(data.realisations);
    });

// Cette fonction prend les données JSON en entrée et effectue une action sur celles-ci
function addgateaux(tableauRealisations) {
    
    // Affiche les données dans la console du navigateur
    
    tableauRealisations.forEach(realisations => {
       
    

        document.querySelector("#content").innerHTML+=
        `
        <div class="carte">
        <h2>${realisations.nom} </h2>
        <p>${realisations.description}</p>
        <img src="${realisations.image}">
       </div>
        `
    })}