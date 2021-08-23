const withImages = require('next-images');

module.exports = withImages({
	images: {
		domains: ['cdn.sanity.io'],
	},
});
