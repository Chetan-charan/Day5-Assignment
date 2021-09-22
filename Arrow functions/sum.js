const arr = [10,20,30,15]

const add = (arr) => {
    var sum = 0;
    for(let i=0;i<arr.length;i++){
        sum = sum + parseInt(arr[i])
    }
    console.log(sum);
}
add(arr);