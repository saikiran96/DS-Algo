
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxWater = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        // Calculate the current width
        const width = right - left;
        
        // Determine the limiting height (the shorter of the two lines)
        const currentHeight = Math.min(height[left], height[right]);
        
        // Calculate the current area
        const currentWater = currentHeight * width;
        
        // Update maxWater if the current area is greater
        maxWater = Math.max(maxWater, currentWater);
        
        // Move the pointer of the shorter line inwards
        // This is because moving the taller line inwards would only decrease the width
        // and would still be limited by the shorter line's height (or potentially a new even shorter line).
        // Moving the shorter line gives a chance to find a taller line to potentially increase height.
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
};
