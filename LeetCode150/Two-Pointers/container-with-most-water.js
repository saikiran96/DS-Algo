
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        // Calculate the height of the container, which is limited by the shorter line
        const currentHeight = Math.min(height[left], height[right]);
        // Calculate the width of the container
        const currentWidth = right - left;
        // Calculate the area for the current container
        const currentArea = currentHeight * currentWidth;

        // Update maxArea if the current area is larger
        maxArea = Math.max(maxArea, currentArea);

        // Move the pointer of the shorter line inward
        // This is because moving the taller line inward would definitely decrease the width
        // and potentially keep the height the same or decrease it,
        // making it impossible to form a larger area.
        // Moving the shorter line inward might lead to a taller line, potentially increasing the height.
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
};
