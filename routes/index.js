var keystone = require('keystone');
var middleware = require('./middleware');
var importRoutes = keystone.importer(__dirname);
var i18n = new (require('i18n-2'))({
	// setup some locales - other locales default to the first locale
	locales: ['sr', 'en'],
});


// Common Middleware
keystone.pre('routes', middleware.initLocals);
keystone.pre('render', middleware.flashMessages);

// Import Route Controllers
var routes = {
	views: importRoutes('./views'),
};

// Setup Route Bindings
exports = module.exports = function (app) {
	// Views
	console.log(i18n.__('Hello!'));
	app.get('/', routes.views.index);
	app.get('/blog/:category?', routes.views.blog);
	app.get('/blog/post/:post', routes.views.post);
	app.get('/gallery', routes.views.gallery);
	app.get('/products/:product', routes.views.product);
	app.get('/productscategory/:category', routes.views.productscategory);
	app.get('/products', routes.views.products);
	app.all('/contact', routes.views.contact);

};
