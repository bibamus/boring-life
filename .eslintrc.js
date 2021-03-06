module.exports = {
	root: true,
	env: {
		node: true
	},
	'extends': [
		'plugin:vue/essential',
		'@vue/standard',
		'@vue/typescript'
	],
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
		'indent': ['error', 'tab'],
		'no-tabs': ['error', { 'allowIndentationTabs': true }],
		'space-before-function-paren': 'off',
		'semi': 'off',
		'@typescript-eslint/semi': ['error', 'always']
	},
	parserOptions: {
		parser: '@typescript-eslint/parser'
	}
};
