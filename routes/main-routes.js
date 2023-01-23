const express = require('express');
const router = express.Router();

router.get('/', (req, res, next)=>{
    res.render('index', {
        pageTitle: "PCN Strona główna",
    });
})
router.get('/about', (req, res, next)=>{
    res.render('about', {
        pageTitle: "PCN O nas",
    });
})
router.get('/contact', (req, res, next)=>{
    res.render('contact', {
        pageTitle: "PCN Kontakt",
    });
})

module.exports = router;