'use strict';


    function isNumber (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function string (str) {
        return +str;
    }

    /**
     * Найти min/max в произвольной строке
     * @param   {string} str -  входные данные
     * @returns {{min:number, max:number}}  объект
     */
    function getMinMax(str) {
        let arr = str.split(/[, ]/);
        let arrNum = arr.filter(isNumber).map(string).sort((function (a , b){return a-b;}));

        return {
            'min': arrNum[0],
            'max': arrNum[arrNum.length - 1]
        };

    }

    let inputData = '1, -5.8 или 10, хотя 34 + -5.3 и 73';