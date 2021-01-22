
/*
 * GET home page.
 */

exports.view = function(req, res){
  var nameToShow = req.params.userName;
  if(nameToShow === undefined) {
    nameToShow = "please give me a name so I can greet you"
  }
  res.render('index', {
  	'name': nameToShow,
  });
};
