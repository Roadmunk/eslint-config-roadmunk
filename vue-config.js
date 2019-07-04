module.exports = {
	extends : [
		'./index',
		'plugin:vue/strongly-recommended',
	],
	rules : {
		// Vue: disable some extended rules
		'vue/max-attributes-per-line' : 'off', // doesn't work with our pattern of allowing `class` and `id` static attrs on first line
		'vue/require-default-prop'    : 'off',

		// Vue: configure extended rules
		'vue/component-name-in-template-casing' : [ 'error', 'kebab-case' ],
		'vue/html-indent'                       : [ 'error', 'tab' ],
		'vue/no-multi-spaces'                   : [ 'error', { ignoreProperties : true } ], // allow aligning of object properties

		// Vue: enable extra rules
		'vue/no-v-html'           : 'error',
		'vue/order-in-components' : 'error',
		'vue/this-in-template'    : 'warn',
	},
};
