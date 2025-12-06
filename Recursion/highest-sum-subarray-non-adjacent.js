const rec = (arr,idx) =>{

    if(idx >= arr.length){
        return 0;
    }

  return  rec(Math.max((arr[idx]+rec(arr,idx+2)),rec(arr,idx+1)));

}


const arr = [1,10,5,100,4,2];

// console.log(rec(arr,0))




// Javascript code to implement the approach
// Function to find the maximum sum
 
function rec(nums, idx)
{
    if (idx >= nums.length)
        return 0;
    return Math.max(nums[idx] + rec(nums, idx + 2), rec(nums, idx + 1));
}
 
function findMaxSum(arr, N)
{
    return rec(arr, 0);
}
 
// Driver Code
// Creating the array
arr = [5, 5, 10, 100, 10, 5];
N = arr.length;
 
// Function call
console.log(findMaxSum(arr, N));