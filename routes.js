
module.exports = {
	routes: {
		HomePage: {
			path: ['/'],
			method: 'get',
			page: './pages/front-page',
		},
		Reviews: {
			path: ['/reviews'],
			method: 'get',
			page: './pages/review-page',
		},
	},
};
