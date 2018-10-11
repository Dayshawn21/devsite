const express = require('express')
const router = express.Router();

//@route    Get api/user/test
//@desc     Test user Route
//@access   Private


router.get('/test', (req, res) => res.json({
  msg: "User Works"
}));

module.exports = router