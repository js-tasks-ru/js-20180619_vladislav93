/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */
function find (obj, value) {
    for (value in obj) {
        console.log(obj[value])
    }
}


let obj = {
    options: {
        color: 'red'
    }
};
find(obj, 'red');