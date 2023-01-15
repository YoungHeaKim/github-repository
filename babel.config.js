module.exports = {
	presets: ['module:metro-react-native-babel-preset'],
	plugins: [
		'babel-plugin-styled-components',
		[
			'module-resolver',
			{
				root: ['.'],
				alias: {
					'@assets': './assets',
					'@src': './src',
					'@components': './src/components',
					'@data': './src/data',
					'@hooks': './src/hooks',
					'@screens': './src/screens',
				},
			},
		],
	],
};
