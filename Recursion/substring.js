
 const rec = (curr,arr) =>{
  // console.log({curr,arr});
    if (arr.length==0){
      console.log(curr);
      return;
    }

    const temp =arr[0];

    rec([...curr,temp],arr.slice(1));
    rec(curr,arr.slice(1));

    return
 }
const arr= [1,2,3];
 console.log(rec([],arr));