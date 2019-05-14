var keystone = require('keystone');

exports = module.exports = function (req, res) {
	var view = new keystone.View(req, res);
	var locals = res.locals;
	// Set locals
	locals.section = 'store';
	locals.filters = {
		category: req.params.category,
	};
	locals.data = {
		/*products: [],*/
	};
	/*view.on('init', function (next) {
		var q = keystone.list('Product').model.find({
			category: locals.filters.category,
		});
		q.exec(function (err, result) {
			console.log(result);
			locals.data.product = result;
			next(err);
		});
	});*/
	// Load ProductCategory
	view.query('productscategory', keystone.list('ProductCategory').model.find());
	// Load Products
	view.query('products', keystone.list('Product').model.find({
		category: locals.filters.category,
  	}));
	// Render View
	view.render('products');
};
