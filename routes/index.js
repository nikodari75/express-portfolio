const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

// Home Page
router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});
// Home Page
router.get('/home', (req, res) => {
  res.render('home', { title: 'Home' });
});
// About Me Page
router.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});
// Contact Page
router.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact Me" })
})
// Services Page
router.get("/services", (req, res) => {
  res.render("services", { title: "Services" })
})
// projects Page
router.get("/projects", (req, res) => {
  res.render("projects", { title: "Projects" })
})




module.exports = router;
