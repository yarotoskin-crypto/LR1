// BEGIN
export const calculateSum = (arr) => {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += arr[i]*!(arr[i]%3);
    }
    return res;
}
// END