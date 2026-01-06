
/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let low = 0;
    let high = nums.length - 1;

    while (low < high) {
        let mid = low + Math.floor((high - low) / 2);
        
        if (nums[mid] < nums[mid + 1]) {
            // We are on an ascending slope. A peak must be to the right of mid.
            low = mid + 1;
        } else {
            // We are on a descending slope or at a peak.
            // A peak could be mid, or to the left of mid.
            high = mid;
        }
    }
    
    // When low == high, we have found the peak element's index.
    return low;
};
