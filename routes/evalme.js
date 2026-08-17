var express = require('express');
var router = express.Router();

router.get('/', (req,res) => {

  // https://gitlab.com/gitlab-org/secure/gsoc-sast-vulnerability-rules/playground/sast-rules/-/blob/main/javascript/eval/rule-eval_with_expression.yml
  //user input file name contains the filename which will be given by the user
  let toEval = eval(req.query.input); 
  res.send(toEval);

})

module.exports = router;
