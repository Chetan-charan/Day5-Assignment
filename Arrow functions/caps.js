var arr = ["hello","world","programming"]

let convert = (arr) => {
    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            console.log(arr[i].toUpperCase())
        }
    }

}

convert(arr)