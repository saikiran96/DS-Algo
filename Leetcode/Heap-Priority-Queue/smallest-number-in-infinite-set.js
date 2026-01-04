
/**
 * A custom Min-Heap implementation for numbers.
 */
class MinHeap {
    constructor() {
        this.heap = [];
    }

    // Helper methods to get parent/child indices
    getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    // Helper methods to check existence of parent/children
    hasParent(i) {
        return this.getParentIndex(i) >= 0;
    }

    hasLeftChild(i) {
        return this.getLeftChildIndex(i) < this.heap.length;
    }

    hasRightChild(i) {
        return this.getRightChildIndex(i) < this.heap.length;
    }

    // Helper methods to get parent/children values
    getParent(i) {
        return this.heap[this.getParentIndex(i)];
    }

    getLeftChild(i) {
        return this.heap[this.getLeftChildIndex(i)];
    }

    getRightChild(i) {
        return this.heap[this.getRightChildIndex(i)];
    }

    // Swaps two elements in the heap array
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    /**
     * Returns the smallest element in the heap without removing it.
     * @returns {number|null} The smallest element, or null if heap is empty.
     */
    peek() {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    /**
     * Checks if the heap is empty.
     * @returns {boolean} True if empty, false otherwise.
     */
    isEmpty() {
        return this.heap.length === 0;
    }

    /**
     * Adds an item to the heap and maintains the heap property.
     * @param {number} item The item to add.
     */
    push(item) {
        this.heap.push(item);
        this.heapifyUp();
    }

    /**
     * Removes and returns the smallest item from the heap.
     * @returns {number|null} The smallest item, or null if heap is empty.
     */
    pop() {
        if (this.heap.length === 0) {
            return null;
        }
        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const item = this.heap[0];
        this.heap[0] = this.heap.pop(); // Move last element to root
        this.heapifyDown(); // Restore heap property
        return item;
    }

    /**
     * Moves an element up the heap to maintain the min-heap property.
     */
    heapifyUp() {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.getParent(index) > this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    /**
     * Moves an element down the heap to maintain the min-heap property.
     */
    heapifyDown() {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let smallerChildIndex = this.getLeftChildIndex(index);
            if (this.hasRightChild(index) && this.getRightChild(index) < this.getLeftChild(index)) {
                smallerChildIndex = this.getRightChildIndex(index);
            }

            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this.swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
}

/**
 * Implements the SmallestInfiniteSet functionality.
 */
class SmallestInfiniteSet {
    constructor() {
        this.nextSmallest = 1; // Tracks the smallest positive integer NOT yet popped (or added back implicitly)
        this.minHeap = new MinHeap(); // Stores numbers that were popped and then added back
        this.isAddedBack = new Set(); // A set to quickly check for numbers currently in the minHeap
    }

    /**
     * Removes and returns the smallest integer currently in the set.
     * @returns {number} The smallest integer.
     */
    popSmallest() {
        // If there are numbers explicitly added back and the smallest of them
        // is less than the current 'nextSmallest' available number,
        // then that explicitly added number is the true smallest.
        if (!this.minHeap.isEmpty() && this.minHeap.peek() < this.nextSmallest) {
            const val = this.minHeap.pop();
            this.isAddedBack.delete(val); // Remove from set as it's now 'popped'
            return val;
        } else {
            // Otherwise, the smallest available number is just our 'nextSmallest' counter.
            // This also covers cases where the heap is empty, or its peek() is >= nextSmallest,
            // meaning nextSmallest is the current true smallest number from the infinite sequence.
            const result = this.nextSmallest;
            this.nextSmallest++;
            return result;
        }
    }

    /**
     * Adds a positive integer num back into the set, if it is not already in the set.
     * It is guaranteed that num was previously popped.
     * @param {number} num The number to add back.
     * @returns {void}
     */
    addBack(num) {
        // Only add 'num' back if:
        // 1. It's smaller than the current 'nextSmallest' (meaning it was actually
        //    popped before 'nextSmallest' advanced past its value).
        // 2. It's not already present in our 'isAddedBack' set (to avoid duplicates in the heap).
        // If num >= this.nextSmallest, 'num' is implicitly available in the infinite set
        // and does not need to be explicitly added back via the heap.
        if (num < this.nextSmallest && !this.isAddedBack.has(num)) {
            this.minHeap.push(num);
            this.isAddedBack.add(num);
        }
    }
}

/**
 * Your SmallestInfiniteSet object will be instantiated and called as such:
 * var obj = new SmallestInfiniteSet()
 * var param_1 = obj.popSmallest()
 * obj.addBack(num)
 */
