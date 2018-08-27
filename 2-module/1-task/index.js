/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
function clone (obj) {

    let newObj = {};
    for (let key in obj) {
        if (typeof(obj[key]) !== 'object') {
            newObj[key] = obj[key];
        }

        if (typeof(obj[key]) === 'object') {
            newObj[key] = clone(obj[key]);
        }
        if (obj[key] === null) {
            newObj[key] = null;
        }
    }
    return newObj;
}




