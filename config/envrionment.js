module.exports = function (compound) {
  var express = require('express')
    , app = compound.app;

  app.configure(function(){
      app.use(express.static(app.root + '/public', { maxAge: 86400000 }));
      app.set('jsDirectory', '/javascripts/');
      app.set('cssDirectory', '/stylesheets/');
      app.set('cssEngine', 'stylus');
      app.enable('merge stylesheets');
      app.engine('.html', require('jade').__express);
      
      app.use(express.bodyParser());
      app.use(express.cookieParser('secret'));
      app.use(express.session({secret: 'secret'}));
      app.use(express.methodOverride());
      app.use(app.router);
  });
};


