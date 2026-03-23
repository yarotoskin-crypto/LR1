// BEGIN
export default addPrefix = (names, prefix) => {
    let res = [];
    for(let i = 0; i < names.length; i++) {
        res[res.length] = (prefix + ' ' + names[i]);
    }
    return res;
}
// END