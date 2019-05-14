var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Language Model
 * ==================
 */

var Language = new keystone.List('Language', {
	autokey: { from: 'code', path: 'cod', unique: true },
});

Language.add({
	code: { type: String, required: true, initial: 'sr' },
	name: { type: String, required: true },
});

/*Language.relationship({ ref: 'Product', path: 'products', refPath: 'category' });*/
Language.defaultColumns = 'name, code';

Language.register();
