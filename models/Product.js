var keystone = require('keystone');
var Types = keystone.Field.Types;

var Product = keystone.List('Product', {
	map: { name: 'title' },
	singular: 'Product',
	plural: 'Products',
	autokey: { path: 'slug', from: 'title', unique: true },
});

Product.add({
	title: { type: String, requried: true },
	/*category: { type: String, requried: true },*/
	price: { type: Number },
	qty: { type: Number },
	description: { type: Types.Html, wysiwyg: true, height: 300 },
	image: { type: Types.CloudinaryImage },
	publishedDate: { type: Date, default: Date.now },
	category: { type: Types.Relationship, ref: 'ProductCategory', many: false },
});

Product.register();
