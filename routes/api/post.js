const express = require('express')
const router = express.Router();

//@route    Get api/post/test
//@desc     Test Post Route
//@access   Public

router.get('/test', (req, res) => res.json({
  msg: "Post Works"
}));

module.exports = router