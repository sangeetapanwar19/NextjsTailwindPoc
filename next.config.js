const path = require('path')

const nextConfig = {

	experimental: {

	  optimizeCss: false, // enabling this will enable SSR for Tailwind

	},

};
module.exports = {
	...nextConfig,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
}