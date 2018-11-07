/**
 * setComma
 * @description 세자리 이상일 경우 콤마 표시
 */
function setComma(num) {
    var num = num + '';

    if (num.length > 3) {
        return num.replace(/(\d{3})$/, ',$1');
    } else {
        return num;
    }
}

