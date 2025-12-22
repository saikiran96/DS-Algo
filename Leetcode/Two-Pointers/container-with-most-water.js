
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        // Calculate the current area formed by lines at 'left' and 'right'
        const currentHeight = Math.min(height[left], height[right]);
        const width = right - left;
        const currentArea = currentHeight * width;

        // Update the maximum area found so far
        maxArea = Math.max(maxArea, currentArea);

        // Move the pointer pointing to the shorter line inward
        // This is because moving the shorter line has the potential to increase the min(height)
        // Moving the taller line will definitely decrease the width and might not increase the min(height)
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};
