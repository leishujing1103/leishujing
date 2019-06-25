const express = require('express');
const router = express.Router();

router.get('/:name', function(req, res) {
    //send 返回一个json
    //render
    res.render('users', {
        name: req.params.name,
        supplies: ['笨笨', '臭臭', '猪猪']
    })
})

module.exports = router;
