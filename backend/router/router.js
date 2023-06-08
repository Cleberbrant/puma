const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/user/:name', userController.pesquisarPerfilGitHub);

module.exports = router;