const express = require('express');
const router = express.Router();

// Get the orders
router.post('/', (req, res) => {
    const orders = [
        {
            "topping": "cherry",
            "quantity": 2
        },
        {
            "topping": "plain",
            "quantity": 6
        },
        {
            "topping": "chocolate",
            "quantity": 3
        }
    ]
    // Convert to JSON
    res.json(orders);
});

// Export the orders
module.exports = router;