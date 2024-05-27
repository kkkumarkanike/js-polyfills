const rightRotateReccursion = (arr,k) =>{
     if(k === 0) return;
     
     const len = arr.length;
     
     const temp = arr[len - 1];
     for(let i = len-1; i > 0; i--){
         arr[i] = arr[i-1];
     }
     arr[0] = temp;
     rightRotateReccursion(arr,k-1)
 }
 
 const rightRotateIteration = (arr,k) =>{
     const len = arr.length;
     
     for(let i = 0; i < k; i++){
         const temp = arr[len - 1];
         for(let j = len-1; j > 0; j--){
             arr[j] = arr[j-1];
         }
         arr[0] = temp;
     }
     
 }
 
 //Iteration
 const leftRotateIteration = (arr,k) =>{
     const len = arr.length;
     for(let i = 0; i < k; i++){
         const temp = arr[0];
         console.log(temp);
         for(let j = 0; j < len - 1; j++){
             arr[j] = arr[j+1];
         }
         arr[len-1] = temp; 
     }
 }
 
 //Reccursion
 
 const leftRotateReccursion = (arr,k) =>{
     if(k === 0) return
     const len = arr.length;
     
     const temp = arr[0];
     for(let j = 0; j < len - 1; j++){
        arr[j] = arr[j+1];
     }
     arr[len-1] = temp; 
     leftRotateReccursion(arr,k-1)
 }
 
 
 let arr = [-1,-100,3,99];
 let k = 2;
 // rightRotate(arr, k)
 rightRotateIteration(arr,k);
 console.log(arr);
 