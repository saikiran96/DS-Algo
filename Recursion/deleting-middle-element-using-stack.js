const stack = [1,2,3,4,5,6];


const rec = (arr,n) =>{

    if(n==1){
        arr.pop()
        return arr
    }

  const temp = arr.pop()
  rec(arr,n-1);
  arr.push(temp);

  return arr

}

console.log(rec(stack,3));