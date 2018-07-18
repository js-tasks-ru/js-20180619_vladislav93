'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
    function isNumber (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function foo(a,b) {
        return a - b;
    }

    function string (str) {
        return +str;
    }

    function getMinMax(str) {
    let arr = str.split(/[, ]/);
    let arrNum = arr.map(string).filter(isNumber).sort(foo);

    let max = arrNum[arrNum.length - 1];
    let min = arrNum[0];

    let obj = {
        'min':min,
        'max':max
    };

        return  obj;
    }

    let inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';
