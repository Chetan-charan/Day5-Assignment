
let arr1 = [1,12,15,26,38];
let arr2 = [2,13,17,30,45];

const median = function(ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    
    for (count = 0; count <= n; count++)
    {
     
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
 
   
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
    
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    return (m1 + m2)/2;
}

console.log(median(arr1,arr2,arr1.length));

//IIFE

(function(ar1, ar2, n)
{
    var i = 0; 
    var j = 0; 
    var count;
    var m1 = -1, m2 = -1;
    
    for (count = 0; count <= n; count++)
    {
     
        if (i == n)
        {
            m1 = m2;
            m2 = ar2[0];
            break;
        }
 
   
        else if (j == n)
        {
            m1 = m2;
            m2 = ar1[0];
            break;
        }
    
        if (ar1[i] <= ar2[j])
        {
            m1 = m2; 
            m2 = ar1[i];
            i++;
        }
        else
        {
            m1 = m2; 
            m2 = ar2[j];
            j++;
        }
    }
 
    console.log((m1 + m2)/2);
}) (arr1,arr2,arr1.length);