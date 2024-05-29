
/**
 * utilisez l'opérateur de chaine ?. pour accéder au nom du groupe auquel appartient l'utilisateur
 * Attention, l'utilisateur peut ne pas avoir de groupe (null)
 * renvoi undefined si l'utilisateur n'a pas de groupe
 * 
 * exemple : 
 * {
 *  name: "John",
 *    group: {
 *      name: "admin"
 *    }
 *  }
 * 
 * doit renvoyer "admin"
 * 
 */

let obj = {
           name: "John",
            group: {
           name: "admin"
       }
    }
let objnull = {
        name: "John"
 }
const getGroupName = (obj) =>  obj.group?.name;
console.log("getGroupName : ", getGroupName(obj));
console.log("getGroupNameNull : ", getGroupName(objnull));

module.exports = {getGroupName};