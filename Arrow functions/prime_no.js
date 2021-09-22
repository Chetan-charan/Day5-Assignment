const arr = [3,13,15,16,17,23,24]

const prime = (arr) => {
    
    for(let i=0;i<arr.length;i++){
        for(let j=2;j<=arr[i]/2;j++){
            
            if(arr[i]%j==0){
               
                arr.splice(arr.indexOf(arr[i]),1)
                
            }
        }
    }
    console.log(arr)
}

prime(arr);