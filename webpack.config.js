const path = require('path')

module.export = {
	mode: 'production',
	entry: './src/index.js',
	output: {
		path: path.join(__dirname, 'dist'),
		filename: "app.bundle.js"
	}
}