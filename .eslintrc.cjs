module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs'],
	parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
	settings: { react: { version: '18.2' } },
	plugins: ['react-refresh'],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true }
		],

		// Added Rules
		'no-irregular-whitespace': 'error',
		'no-unexpected-multiline': 'error',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-filename-extension': [1, { extensions: ['.jsx'] }],
		'no-unused-vars': 'warn',
		'array-bracket-spacing': ['error', 'never'],
		'array-element-newline': 'off', // eslint:recommended
		'block-spacing': ['error', 'never'],
		'brace-style': 'error',
		'camelcase': [
			'error',
			{
				properties: 'never'
			}
		],
		'capitalized-comments': 1,
		'comma-dangle': ['error', 'always-multiline'],
		'comma-spacing': 'error',
		'comma-style': 'error',
		'computed-property-spacing': 'error',
		'eol-last': 'error',
		'func-call-spacing': 'error',
		'indent': [
			'error',
			2,
			{
				CallExpression: {
					arguments: 2
				},
				FunctionDeclaration: {
					body: 1,
					parameters: 2
				},
				FunctionExpression: {
					body: 1,
					parameters: 2
				},
				MemberExpression: 2,
				ObjectExpression: 1,
				SwitchCase: 1,
				ignoredNodes: ['ConditionalExpression']
			}
		],
		'key-spacing': 'error',
		'keyword-spacing': 'error',
		'linebreak-style': 'error',
		'new-cap': 'error',
		'no-array-constructor': 'error',
		'no-multiple-empty-lines': ['error', { max: 2 }],
		'one-var': [
			'error',
			{
				var: 'never',
				let: 'never',
				const: 'never'
			}
		],
		'operator-linebreak': ['error', 'after'],
		'padded-blocks': ['error', 'never'],
		'quote-props': ['error', 'consistent'],
		'quotes': [
			'error',
			'single',
			{
				allowTemplateLiterals: true
			}
		],
		'semi': 'error',
		'semi-spacing': 'error',
		'space-before-blocks': 'error',
		'space-before-function-paren': [
			'error',
			{
				asyncArrow: 'always',
				anonymous: 'never',
				named: 'never'
			}
		],
		'spaced-comment': ['error', 'always'],
		'switch-colon-spacing': 'error',
		'arrow-parens': ['error', 'always'],
		'constructor-super': 'error',
		'generator-star-spacing': ['error', 'after'],
		'no-new-symbol': 'error',
		'no-this-before-super': 'error',
		'no-var': 'error',
		'prefer-const': [
			'error',
			{
				destructuring: 'all'
			}
		],
		'prefer-rest-params': 'error',
		'prefer-spread': 'error',
		'rest-spread-spacing': 'error',
		'yield-star-spacing': ['error', 'after']
	}
};
