
var RecentCounter = function() {
    this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    // Add the current ping's timestamp to the end of the queue
    this.queue.push(t);

    // Remove any timestamps from the front of the queue that are outside the
    // [t - 3000, t] time range. Since 't' is strictly increasing,
    // we only need to check the oldest timestamp at the front.
    while (this.queue[0] < t - 3000) {
        this.queue.shift(); // Remove the oldest (invalid) ping
    }

    // The number of remaining pings in the queue are those within the
    // [t - 3000, t] range.
    return this.queue.length;
};

/**
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */
