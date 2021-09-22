var arr = [2,3,3,4,10]

const rem = function(arr){
    var arr1 = []
    for(var i=0;i<arr.length;i++){
        var count = 1;
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count+=1;
                break;
            }
        }
        if(count==1){
            arr1.push(arr[i])
        }
    }
    console.log(arr1);
}

rem(arr);

//IIFE

(function(arr){
    var arr1 = []
    for(var i=0;i<arr.length;i++){
        var count = 1;
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count+=1;
                break;
            }
        }
        if(count==1){
            arr1.push(arr[i])
        }
    }
    console.log(arr1);
}) (arr);