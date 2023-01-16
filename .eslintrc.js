module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'airbnb/hooks',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint'],
	rules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/no-unused-vars': ['error'],
		'react-hooks/exhaustive-deps': 'off',
		'no-shadow': 'off',
		'@typescript-eslint/no-shadow': ['error'],
		'react/jsx-props-no-spreading': 0,
		'import/prefer-default-export': 'off',
		'import/extensions': 'off',
		'import/no-unresolved': 'off',
		'import/no-cycle': 'off',
		'no-nested-ternary': 'off',
		'react/no-array-index-key': 'off',
		'react/jsx-filename-extension': [
			2,
			{
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
			},
		],
		'prettier/prettier': 'error',
	},
	settings: {
		'import/resolver': {
			node: {
				extensions: ['.js', '.jsx', '.ts', '.tsx'],
				moduleDirectory: ['node_modules', '@types'],
			},
			typescript: {}, // 프로젝트 Root의 tsconfig.json을 찾는다.
		},
	},
};
