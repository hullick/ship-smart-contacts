let mix = require('laravel-mix');


mix
	.js('resources/js/app.js', 'public/js').vue({ version: 2 })
	.webpackConfig({
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					loader: "ts-loader",
					exclude: /node_modules/
				}
			]
		}
	})
	.sourceMaps();
mix.sass('resources/scss/app.scss', 'public/css');
