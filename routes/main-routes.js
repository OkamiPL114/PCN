const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.render('index', {
        pageTitle: "Strona główna - PCN",
    });
})
router.get('/about', (req, res, next)=>{
    res.render('about', {
        pageTitle: "O nas - PCN",
    });
})
router.get('/contact', (req, res, next)=>{
    res.render('contact', {
        pageTitle: "Kontakt - PCN",
    });
})

module.exports = router;