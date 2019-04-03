/*   FileName: index.js (Server)
     Student: Siddharth Pandya
     Student ID: 300915041
     Date: 03/04/2019 */

let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
//router.get('/', indexController.displayHomePage);

/* GET projects page. */
//router.get('/projects', indexController.displayProjectsPage);

/* GET services page. */
//router.get('/services', indexController.displayServicesPage);

/* GET about page. */
//router.get('/about', indexController.displayAboutPage);

/* GET contact page. */
//router.get('/contact', indexController.displayContactPage);

/* GET - displays the Login Page */
//router.get('/login', indexController.displayLoginPage);

/* POST - processes the Login Page */
router.post('/login', indexController.processLoginPage);

/* GET - displays the User Registration Page */
//router.get('/register', indexController.displayRegisterPage);

/* POST - processes the User Registration Page */
router.post('/register', indexController.processRegisterPage);

/* GET - perform user logout */
router.get('/logout', indexController.performLogout);


module.exports = router;
