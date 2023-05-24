const express = require('express');

const {
    test,
    createUser,
    login,
    getUser
} = require('../controller/userController')

const router = express.Router();

router.get('/', test);
router.post('/createUser', createUser);
router.post('/login', login);
router.get('/getUser', getUser);
module.exports = router;
