exports.routes = function (map) {
  // Generic routes. Add all your routes below this line
  // feel free to remove generic routes
  map.root('home#index');
  map.get('/career', 'career#index');
  map.all(':controller/:action');
  map.all(':controller/:action/:id');
};
