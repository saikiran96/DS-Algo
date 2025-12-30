
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const n = rooms.length;
    const visited = new Set();
    const queue = [0]; // Start with room 0
    visited.add(0);

    while (queue.length > 0) {
        const currentRoom = queue.shift();

        // Get all keys (neighbor rooms) from the current room
        for (const key of rooms[currentRoom]) {
            if (!visited.has(key)) {
                visited.add(key);
                queue.push(key);
            }
        }
    }

    // Check if all rooms have been visited
    return visited.size === n;
};
