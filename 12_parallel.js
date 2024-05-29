/**
 * Utilisez la fonction Promise.all pour exécuter 3 appels API en parallèle
 * 
 * urls:
 * - https://jsonplaceholder.typicode.com/todos/1
 * - https://jsonplaceholder.typicode.com/todos/2
 * - https://jsonplaceholder.typicode.com/todos/3
 * 
 * Retournez un tableau contenant les 3 résultats
 * 
 * Vous pouvez utiliser votre fonction apiResponse créé précedement: const {apiResponse} = require("./11_async");
 * 
 * documentation: https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
*/

const {apiResponse} = require("./11_async");

let promise1 = apiResponse("https://jsonplaceholder.typicode.com/todos/1");
let promise2 = apiResponse("https://jsonplaceholder.typicode.com/todos/2");
let promise3 = apiResponse("https://jsonplaceholder.typicode.com/todos/3");

const parallel = () => {
    Promise.all([promise1, promise2, promise3]).then((values) => {
        console.log(values);
      });
}

module.exports = {parallel};
