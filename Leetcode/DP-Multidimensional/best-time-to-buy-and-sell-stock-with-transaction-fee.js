
/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
var maxProfit = function(prices, fee) {
    let cash = 0; // Represents the maximum profit when you don't have a stock.
    let hold = -prices[0]; // Represents the maximum profit when you have a stock.
                            // Initialized by buying the first stock.

    for (let i = 1; i < prices.length; i++) {
        let prevCash = cash; // Store the previous day's cash state before updating.

        // Calculate the maximum profit if not holding a stock on day 'i'.
        // Option 1: Do nothing, remain in the cash state from the previous day.
        // Option 2: Sell the stock held from the previous day, incurring the fee.
        cash = Math.max(cash, hold + prices[i] - fee);

        // Calculate the maximum profit if holding a stock on day 'i'.
        // Option 1: Do nothing, remain in the hold state from the previous day.
        // Option 2: Buy a stock on day 'i'. To buy, we must have been in the cash state
        // on the previous day (represented by prevCash).
        hold = Math.max(hold, prevCash - prices[i]);
    }

    // The maximum profit at the end will always be in the 'cash' state
    // (meaning you don't hold any stock).
    return cash;
};
