const express = require('express');
const router = express.Router();

const unicornService = require('../../services/unicorns');

router.get('/', function (req, res, next) {
    unicornService.get().then((unicornNames) => { 
        res.send(unicornNames);
    }); 
});

module.exports = router;
