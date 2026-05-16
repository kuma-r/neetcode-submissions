class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.minHeap = [];
        for (const num of nums) {
            this.add(num);
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if (this.minHeap.length < this.k) {
            this.minHeap.push(val);
            this.heapifyUp(this.minHeap.length - 1);
        } else if (val > this.minHeap[0]) {
            this.minHeap[0] = val;
            this.heapifyDown(0);
        }
        return this.minHeap[0];
    }

    // Heapify up to restore min-heap property
    heapifyUp(index) {
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.minHeap[parentIndex] > this.minHeap[index]) {
                [this.minHeap[parentIndex], this.minHeap[index]] = [this.minHeap[index], this.minHeap[parentIndex]];
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    // Heapify down to restore min-heap property
    heapifyDown(index) {
        const n = this.minHeap.length;
        while (true) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let smallest = index;

            if (leftChild < n && this.minHeap[leftChild] < this.minHeap[smallest]) {
                smallest = leftChild;
            }
            if (rightChild < n && this.minHeap[rightChild] < this.minHeap[smallest]) {
                smallest = rightChild;
            }
            if (smallest === index) break;

            [this.minHeap[index], this.minHeap[smallest]] = [this.minHeap[smallest], this.minHeap[index]];
            index = smallest;
        }
    }
}
