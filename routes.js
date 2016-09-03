
module.exports = {
	routes: {
		HomePage: {
			path: ['/'],
			method: 'get',
			page: './pages/front-page',
		},
		ReviewsPage: {
			path: ['/reviews/:placeId'],
			method: 'get',
			page: './pages/reviews-page',
		},
		PlacesApi: {
			path: ['/api/places'],
			method: 'get',
			page: './api/places-search'
		}
	},
};
