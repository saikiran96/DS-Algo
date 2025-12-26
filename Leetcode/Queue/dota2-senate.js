
/**
 * @param {string} senate
 * @return {string}
 */
var predictPartyVictory = function(senate) {
    const n = senate.length;
    const radiantQueue = [];
    const direQueue = [];

    // Initialize queues with indices of senators
    // Senators are added to their respective queues based on their initial position
    for (let i = 0; i < n; i++) {
        if (senate[i] === 'R') {
            radiantQueue.push(i);
        } else {
            direQueue.push(i);
        }
    }

    // Simulate the banning process
    // The loop continues as long as both parties have active senators
    while (radiantQueue.length > 0 && direQueue.length > 0) {
        // Get the senator who is next in line for each party
        const r_idx = radiantQueue.shift();
        const d_idx = direQueue.shift();

        // The senator with the smaller index gets to act first in the current round.
        // They ban a senator from the opposite party and get to participate in the next "round".
        // Adding 'n' to their index simulates them re-entering the queue at the end of the current cycle.
        if (r_idx < d_idx) {
            // Radiant senator bans a Dire senator
            // The Radiant senator is re-queued for the next global round
            radiantQueue.push(r_idx + n);
        } else {
            // Dire senator bans a Radiant senator
            // The Dire senator is re-queued for the next global round
            direQueue.push(d_idx + n);
        }
    }

    // After the loop, one queue will be empty, indicating that party has no active senators left.
    // The party with remaining senators is the winner.
    if (radiantQueue.length > 0) {
        return "Radiant";
    } else {
        return "Dire";
    }
};
