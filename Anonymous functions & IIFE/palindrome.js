const arr = [131,141,115,22]

function reverseDigits(num)
{
    let rev_num = 0;
    while (num > 0) {
        rev_num = rev_num * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return rev_num;
}

var palindrome = function(arr){
    
    for(var i=0;i<arr.length;i++){
        let rev_n = reverseDigits(arr[i])
        if(rev_n!=arr[i]){
            arr.splice(arr.indexOf(arr[i]),1)
        }
    }
    console.log(arr)
}

palindrome(arr);

//IIFE

(function(arr){
    
    for(var i=0;i<arr.length;i++){
        let rev_n = reverseDigits(arr[i])
        if(rev_n!=arr[i]){
            arr.splice(arr.indexOf(arr[i]),1)
        }
    }
    console.log(arr);

})(arr);