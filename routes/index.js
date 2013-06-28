/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title : 'home' });
};

exports.creear = function(req, res){
  res.render('creear', { title : 'creear' });
};