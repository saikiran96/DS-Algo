
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var maxScore = function(nums1, nums2, k) {
    // MinPriorityQueue implementation
    class MinPriorityQueue {
        constructor() {
            this.heap = [];
        }

        push(val) {
            this.heap.push(val);
            this._bubbleUp(this.heap.length - 1);
        }

        pop() {
            if (this.isEmpty()) {
                return null;
            }
            if (this.heap.length === 1) {
                return this.heap.pop();
            }
            const min = this.heap[0];
            this.heap[0] = this.heap.pop();
            this._bubbleDown(0);
            return min;
        }

        peek() {
            return this.isEmpty() ? null : this.heap[0];
        }

        isEmpty() {
            return this.heap.length === 0;
        }

        size() {
            return this.heap.length;
        }

        _bubbleUp(index) {
            while (index > 0) {
                const parentIndex = Math.floor((index - 1) / 2);
                if (this.heap[parentIndex] > this.heap[index]) {
                    [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
                    index = parentIndex;
                } else {
                    break;
                }
            }
        }

        _bubbleDown(index) {
            const lastIndex = this.heap.length - 1;
            while (true) {
                let leftChildIndex = 2 * index + 1;
                let rightChildIndex = 2 * index + 2;
                let smallestIndex = index;

                if (leftChildIndex <= lastIndex && this.heap[leftChildIndex] < this.heap[smallestIndex]) {
                    smallestIndex = leftChildIndex;
                }

                if (rightChildIndex <= lastIndex && this.heap[rightChildIndex] < this.heap[smallestIndex]) {
                    smallestIndex = rightChildIndex;
                }

                if (smallestIndex !== index) {
                    [this.heap[index], this.heap[smallestIndex]] = [this.heap[smallestIndex], this.heap[index]];
                    index = smallestIndex;
                } else {
                    break;
                }
            }
        }
    }

    const n = nums1.length;
    const pairs = [];
    for (let i = 0; i < n; i++) {
        pairs.push([nums1[i], nums2[i]]);
    }

    // Sort pairs by nums2 in descending order
    // This allows us to iterate and fix the minimum nums2 value efficiently.
    pairs.sort((a, b) => b[1] - a[1]);

    let currentSum = 0; // Stores the sum of nums1 values for the current k elements
    let maxScore = 0;
    const minHeap = new MinPriorityQueue(); // Stores k largest nums1 values

    for (let i = 0; i < n; i++) {
        const [num1, num2] = pairs[i];

        currentSum += num1;
        minHeap.push(num1);

        // Once we have k elements in the heap, we can calculate a potential score.
        if (minHeap.size() === k) {
            // The current num2 (pairs[i][1]) is guaranteed to be the minimum
            // among the k elements whose nums1 values are currently in the heap
            // because of the descending sort order of pairs.
            maxScore = Math.max(maxScore, currentSum * num2);

            // To prepare for the next iteration, we need to remove the smallest
            // nums1 element from our current selection to maintain only k elements
            // (or to prepare for a new set of k elements if the heap grows beyond k).
            // We remove the smallest so that currentSum remains as large as possible
            // for the next window.
            const smallestNum1 = minHeap.pop();
            currentSum -= smallestNum1;
        }
    }

    return maxScore;
};
