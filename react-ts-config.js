module.exports = {
	extends : [
		'./index.js',
		'plugin:jest/recommended',
	],
	parser        : '@typescript-eslint/parser',
	parserOptions : {
		ecmaFeatures : {
			jsx : true,
		},
		ecmaVersion : 2019,
		sourceType  : 'module',
	},
	plugins : [
		'react',
		'jest',
		'@typescript-eslint',
	],
	rules : {
		'no-unused-vars'                    : 'off', // overridden by @typescript-eslint/no-unused-vars
		'@typescript-eslint/no-unused-vars' : 'error',
		'react/jsx-uses-vars'               : 'error',
	},
};
