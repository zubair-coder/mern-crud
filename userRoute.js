const express = require('express');
const { addUser, getUsers, getSingleUser, updateUser, delUser } = require("../controllers/userController");
const router = express.Router();

router.route('/addUser').post(addUser);
router.route('/getUsers').get(getUsers);
router.route('/:id').get(getSingleUser);
router.route('/:id').put(updateUser)
router.route('/:id').delete(delUser)

module.exports = router