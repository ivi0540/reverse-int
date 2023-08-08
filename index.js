function reverse(num) {
    let str = String(num);
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result = result + str[i];
    };
    return Number(result);
};
console.log(reverse(123));