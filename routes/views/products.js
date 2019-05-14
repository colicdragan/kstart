var keystone = require('keystone');
var i18n = new (require('i18n-2'))({
	// setup some locales - other locales default to the first locale
	locales: ['sr', 'en'],
});
exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	// Set locals
	locals.section = 'store';
	// Load ProductCategory
	view.query('productscategory', keystone.list('ProductCategory').model.find());
	// Load Products
	view.query('products', keystone.list('Product').model.find());
	// Render View
	view.render('products', {
		_products: i18n.__('Products'),
		_product: i18n.__('Product'),
	});
};
