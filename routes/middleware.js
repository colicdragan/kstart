var _ = require('lodash');
var keystone = require('keystone');


/**
	Initialises the standard view locals
*/
exports.initLocals = function (req, res, next) {
	/*var view = new keystone.View(req, res);
	var q;
	// Load ProductCategory
	q = view.query('productscategory', keystone.list('ProductCategory').model.find());
	console.log(q);*/
	
	res.locals.navLinks = [
		{ label: 'Home', key: 'home', href: '/' },
		{ label: 'Blog', key: 'blog', href: '/blog' },
		{ label: 'Gallery', key: 'gallery', href: '/gallery' },
		{ label: 'Products', key: 'store', href: '/products' },
		{ label: 'Contact', key: 'contact', href: '/contact' },
		/*{ label: 'Store', key: 'store', href: '/productscategory' },*/
	];
	res.locals.user = req.user;
	next();
};


/**
	Fetches and clears the flashMessages before a view is rendered
*/
exports.flashMessages = function (req, res, next) {
	var flashMessages = {
		info: req.flash('info'),
		success: req.flash('success'),
		warning: req.flash('warning'),
		error: req.flash('error'),
	};
	res.locals.messages = _.some(flashMessages, function (msgs) { return msgs.length; }) ? flashMessages : false;
	next();
};


/**
	Prevents people from accessing protected pages when they're not signed in
 */
exports.requireUser = function (req, res, next) {
	if (!req.user) {
		req.flash('error', 'Please sign in to access this page.');
		res.redirect('/keystone/signin');
	} else {
		next();
	}
};
