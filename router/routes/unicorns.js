const express = require('express');
const router = express.Router();

const unicornService = require('../../services/unicorns');

router.get('/', (req, res) => {
    unicornService.get().then((unicornNames) => {
        res.send(unicornNames);
    });
});

module.exports = router;
