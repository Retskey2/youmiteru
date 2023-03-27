module.exports = {
	presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
	plugins: [
		'babel-plugin-react-require',
		[
			'@babel/plugin-transform-runtime',
			{
				regenerator: true
			}
		]
	]
};
