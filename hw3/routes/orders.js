const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
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
    res.json(orders);
});

module.exports = router;