/**
 * @param {number[]} nums
 * @return {number[]}
 */

const combineArrays = (left,right) =>{
    const arr = [];
    let i=0,j=0;
    
    while ( i<left.length && j< right.length){
        if (left[i]>right[j]){
            arr.push(left[i]);
            i++;
        }else{
            arr.push(right[j]);
            j++;
        }
    }
    console.log({arr})

    if (i>=left.length){
        arr.push(...right.slice(j))
    }
    if (j>=right.length){
        arr.push(...left.slice(i))
    }

    return arr

}

console.log(combineArrays([6,5,4,1],[3,2]));

// var sortArray = function(nums) {
//     console.log(nums)
//     if (nums.length == 1  )
//         return nums ;

//     const mid = Math.floor(nums.length/2);
//     const left =sortArray(nums.slice(0,mid));
//     const right = sortArray(nums.slice(mid,nums.length )) 

//    return combineArrays(left,right)
// };
// const que = [1,22,3,0,56,32,44,123,49]
//  console.log(sortArray(que));

// // console.log(combineArrays([1,2,4,7],[3,6,8]));


// let mid = Math.floor(7/2)
// console.log( que.slice(3,5) )