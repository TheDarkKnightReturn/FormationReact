const {sleep} = require("./10_promise");

/**
 * Créez une fonction synchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser .then
 * 
 * contrainte:
 *    - votre fonction doit être synchrone et ne pas retourner de Promise
 *    - ne pas utiliser async await
 * 
 */

const usingThen = (cb) => {
    sleep(2000).then(e => cb(e));
};

// Exemple d'utilisation :
usingThen((r) => {
<<<<<<< HEAD
=======
    console.log("coucou", r);
>>>>>>> d17f033d4f93d65ee4982ac6fd79f0f86314d13d
});
/**
 * Créez une fonction asynchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser await
 * 
 * contrainte:
 *   - votre fonction doit être asynchrone et retourner une Promise
 *   - ne pas utiliser .then
 */

const usingAwait = async (cb) => {
    const result = await sleep(2000);
    cb(result);
};

// Exemple d'utilisation :
 usingAwait((r) => {
<<<<<<< HEAD
=======
        console.log("coucou", r);
>>>>>>> d17f033d4f93d65ee4982ac6fd79f0f86314d13d
    });
/**
 * Créez une fonction asynchrone qui effectue un appel api vers l'url passé en paramètre
 * retourne le résultat de la requête (body)
 * 
 * Vous pouveznpm utiliser axios, mais n'oubliez pas d'installer le package et de l'importer
 * npm install axios
 * 
 * votre réponse doit être un objet json
 * 
 * url de test: https://jsonplaceholder.typicode.com/todos/1
 */

//décommentez la ligne suivante une fois le package installé
const axios = require("axios");

const apiResponse = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data; // Retourne les données de la réponse
    } catch (error) {
<<<<<<< HEAD
=======
        console.log(error);
>>>>>>> d17f033d4f93d65ee4982ac6fd79f0f86314d13d
        throw error; // Lance à nouveau l'erreur pour que le gestionnaire d'erreurs extérieur puisse le gérer
    }
};

(async () => {
    try {
        const result = await apiResponse("https://jsonplaceholder.typicode.com/todos/1");
<<<<<<< HEAD
=======
        console.log("coucou", result);
>>>>>>> d17f033d4f93d65ee4982ac6fd79f0f86314d13d
    } catch (error) {
        console.log("Une erreur s'est produite:", error);
    }
})();

module.exports = {usingThen, usingAwait, apiResponse};