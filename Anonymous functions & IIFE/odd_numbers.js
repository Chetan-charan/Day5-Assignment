var arr = [2,3,4,5,6,7]

//anonymous function
var odd = function(str){
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2!=0){
            console.log(arr[i])
        }
    }
}

odd(arr);

//IIFE

(
    function(){
        for(let i=0;i<arr.length;i++){
            if(arr[i]%2!=0){
                console.log(arr[i])
            }
        }
    }
) (arr);