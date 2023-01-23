const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.render('index', {
        pageTitle: "Strona główna - PCN",
    });
})

module.exports = router;