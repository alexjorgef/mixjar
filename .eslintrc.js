module.exports = {
	'env': { 'node': true },
	'parserOptions': {
		'ecmaVersion': 2018,
		'sourceType': 'module'
	},
	'plugins': [
		'snakecasejs'
	],
	'rules': {
		'array-bracket-newline': [
			'error',
			'consistent'
		],
		'array-bracket-spacing': [
			'error',
			'never'
		],
		'arrow-body-style': 'error',
		'arrow-spacing': [
			'error',
			{
				'before': true,
				'after': true,
			}
		],
		'brace-style': 'error',
		'capitalized-comments': 'off',
		'comma-spacing': [
			'error',
			{
				'before': false,
				'after': true
			}
		],
		'constructor-super': 'error',
		'curly': 'error',
		'dot-notation': 'off',
		'eol-last': 'error',
		'eqeqeq': [
			'error',
			'smart'
		],
		'func-style': [
			'error',
			'expression',
			{ 'allowArrowFunctions': true }
		],
		'id-blacklist': 'off',
		'id-match': 'off',
		'indent': [
			'error',
			'tab'
		],
		'key-spacing': [
			'error',
			{
				'beforeColon': false,
				'afterColon': true,
				'mode': 'strict'
			}
		],
		'keyword-spacing': [
			'error',
			{ 'after': true }
		],
		'lines-around-comment': [
			'error',
			{
				'beforeBlockComment': true,
				'beforeLineComment': true,
				'afterBlockComment': false,
				'afterLineComment': false
			}
		],
		'max-len': [
			'error',
			{ 'code': 140 }
		],
		'no-bitwise': 'error',
		'no-caller': 'error',
		'no-console': [
			'error',
			{
				'allow': [
					'log',
					'warn',
					'dir',
					'timeLog',
					'assert',
					'clear',
					'count',
					'countReset',
					'group',
					'groupEnd',
					'table',
					'dirxml',
					'error',
					'groupCollapsed',
					'Console',
					'profile',
					'profileEnd',
					'timeStamp',
					'context'
				]
			}
		],
		'no-debugger': 'error',
		'no-empty': 'off',
		'no-eval': 'error',
		'no-fallthrough': 'error',
		'no-multiple-empty-lines': [
			'error',
			{ 'max': 1 }
		],
		'no-new-wrappers': 'error',
		'no-shadow': [
			'error',
			{ 'hoist': 'all' }
		],
		'no-throw-literal': 'error',
		'no-trailing-spaces': 'error',
		'no-undef-init': 'error',
		'no-underscore-dangle': 'off',
		'no-unused-expressions': 'error',
		'no-unused-labels': 'error',
		'no-useless-rename': 'error',
		'no-var': 'error',
		'object-curly-newline': [
			'error',
			{
				'consistent': true,
				'minProperties': 2
			}
		],
		'object-curly-spacing': [
			'error',
			'always'
		],
		'object-property-newline': 'error',
		'object-shorthand': [
			'error',
			'always',
			{
				'avoidQuotes': true
			}
		],
		'one-var': [
			'error',
			'never'
		],
		'prefer-arrow-callback': 'error',
		'prefer-const': 'error',
		'prefer-destructuring': [
			'error',
			{
				'array': true,
				'object': true
			}, {
				'enforceForRenamedProperties': false
			}
		],
		'prefer-spread': 'error',
		'quotes': [
			2,
			'single',
			{ 'avoidEscape': true }
		],
		'radix': 'error',
		'require-jsdoc': 'error',
		'semi': [
			'error',
			'always'
		],
		'space-before-blocks': [
			'error',
			'always'
		],
		'space-before-function-paren': [
			'error',
			'never'
		],
		'space-in-parens': 'error',
		'spaced-comment': 'error',
		'template-curly-spacing': [
			'error',
			'never'
		],
		'valid-typeof': 'error'
	},
	'settings': {
		'snakecasejs/filter': ['ClassDeclaration', 'NewExpression'],
		'snakecasejs/whitelist': ['externalPath', 'setNumber']
	},
};
