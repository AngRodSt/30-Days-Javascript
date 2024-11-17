/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    let filteredArr = [];
    let counter = 0;
    for(let i = 0; i<arr.length; i++){
        if(fn(arr[i],i) === true || fn(arr[i], i)!=0){
            filteredArr[counter] = arr[i];
            counter ++;
        }
    }
    return filteredArr;
};