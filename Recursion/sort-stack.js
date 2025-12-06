const stack = [1,4,3,7,6,2];



const sortArray = (arr,ele) =>{
    console.log({arr,ele})

   // if the top of the stack is lesser or if the arr is empty append the element
   if (arr.length == 0 || arr[arr.length-1] < ele){
    //    arr.push(ele);
       return ;
   }

   const temp = arr.pop();

   sortArray(arr,ele);

   arr.push(temp)

   return arr

}


 const rec = (arr) =>{
    console.log(arr);
    if(arr.length == 0){
        return arr
    }

    const pop = arr.pop();

    rec(arr);
   return sortArray(arr,pop)

 }

 console.log(rec([14,17,1,3,4,5,2,12,20]));