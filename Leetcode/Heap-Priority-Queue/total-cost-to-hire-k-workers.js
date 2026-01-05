
/**
 * @param {number[]} costs
 * @param {number} k
 * @param {number} candidates
 * @return {number}
 */
class MinPriorityQueue {
    constructor() {
        this.heap = [];
    }

    _getParentIndex(i) {
        return Math.floor((i - 1) / 2);
    }

    _getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    _getRightChildIndex(i) {
        return 2 * i + 2;
    }

    _hasParent(i) {
        return this._getParentIndex(i) >= 0;
    }

    _hasLeftChild(i) {
        return this._getLeftChildIndex(i) < this.heap.length;
    }

    _hasRightChild(i) {
        return this._getRightChildIndex(i) < this.heap.length;
    }

    _getParent(i) {
        return this.heap[this._getParentIndex(i)];
    }

    _getLeftChild(i) {
        return this.heap[this._getLeftChildIndex(i)];
    }

    _getRightChild(i) {
        return this.heap[this._getRightChildIndex(i)];
    }

    _swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    enqueue(element) {
        this.heap.push(element);
        this._heapifyUp();
    }

    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        if (this.heap.length === 1) {
            return { element: this.heap.pop() };
        }
        const item = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._heapifyDown();
        return { element: item };
    }

    front() {
        if (this.isEmpty()) {
            return null;
        }
        return { element: this.heap[0] };
    }

    _heapifyUp() {
        let index = this.heap.length - 1;
        while (this._hasParent(index) && this._getParent(index) > this.heap[index]) {
            this._swap(this._getParentIndex(index), index);
            index = this._getParentIndex(index);
        }
    }

    _heapifyDown() {
        let index = 0;
        while (this._hasLeftChild(index)) {
            let smallerChildIndex = this._getLeftChildIndex(index);
            if (this._hasRightChild(index) && this._getRightChild(index) < this._getLeftChild(index)) {
                smallerChildIndex = this._getRightChildIndex(index);
            }

            if (this.heap[index] < this.heap[smallerChildIndex]) {
                break;
            } else {
                this._swap(index, smallerChildIndex);
            }
            index = smallerChildIndex;
        }
    }
}

var totalCost = function(costs, k, candidates) {
    const n = costs.length;
    let totalCost = 0;

    let left = 0;
    let right = n - 1;

    const minHeapLeft = new MinPriorityQueue();
    const minHeapRight = new MinPriorityQueue();

    // Initialize heaps
    // Fill left heap with the first 'candidates' workers
    for (let i = 0; i < candidates; i++) {
        if (left <= right) {
            minHeapLeft.enqueue(costs[left]);
            left++;
        } else {
            break; 
        }
    }
    // Fill right heap with the last 'candidates' workers
    for (let i = 0; i < candidates; i++) {
        if (left <= right) {
            minHeapRight.enqueue(costs[right]);
            right--;
        } else {
            break; 
        }
    }

    // Hire k workers
    for (let i = 0; i < k; i++) {
        const valL = minHeapLeft.front() ? minHeapLeft.front().element : Infinity;
        const valR = minHeapRight.front() ? minHeapRight.front().element : Infinity;

        if (valL <= valR) { // Tie-breaking: prefer the worker from the left side (smaller original index)
            totalCost += minHeapLeft.dequeue().element;
            if (left <= right) { 
                minHeapLeft.enqueue(costs[left]);
                left++;
            }
        } else { // valR < valL
            totalCost += minHeapRight.dequeue().element;
            if (left <= right) { 
                minHeapRight.enqueue(costs[right]);
                right--;
            }
        }
    }

    return totalCost;
};
