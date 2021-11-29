let mix = require('laravel-mix');


mix
	.js('resources/js/list-contacts.js', 'public/js').vue()
	.js('resources/js/add-contact.js', 'public/js').vue()
	.js('resources/js/detail-contact.js', 'public/js').vue()
	.js('resources/js/edit-contact.js', 'public/js').vue()
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
