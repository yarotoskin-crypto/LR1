// BEGIN
export default function getSuperSeriesWinner(arr) {
    let res = 0;
    for (let i = 0; i < arr.length; i++) {
        res += ((arr[i][0]>arr[i][1]) - (arr[i][0]<arr[i][1]));
    }
    if(res < 0) return 'ussr';
    if(res > 0) return 'canada';
    return null;
}
// END