
/**
 * Créez une fonction asynchrone qui attend 2 seconde
 * 
 * utilisez new Promise
 */

let time = 2000;

const sleep = () => (
    new Promise(resolve => setTimeout(() => resolve(42), time))
);

sleep();


module.exports = {sleep};