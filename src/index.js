module.exports = function reverse(n) {
    if (n < 0) {
        n = n * -1;
    };
    let str = String(n);
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    };
    return Number(result);
}
