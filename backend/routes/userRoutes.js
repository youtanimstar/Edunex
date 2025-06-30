const router = require('express').Router();

const { signup, loginWithOtp, verifyOtp, getUserByUsername } = require('../controllers/userController');

router.post('/signup',signup);
router.post('/login',loginWithOtp);
router.post('/verify-otp', verifyOtp);
router.post('/user', getUserByUsername);

module.exports = router;