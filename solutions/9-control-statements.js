// BEGIN
export default function getTotalAmount(arr, currency) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].slice(0, 3) === currency) {
            res += Number(arr[i].slice(4));
        }
    }
    return res;
}
// END