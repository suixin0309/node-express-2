var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/add', function(req, res, next) {
//   res.send('respond with a resource');
// });
let users=[]
router.route('/')
  .get(function (req, res, next) {
    res.json(users)
    // res.send('respond with a resource');
  })
  .post(function (req,res) {
    const user=req.body
    users.push(user)
    res.json(user)
  });
module.exports = router;
