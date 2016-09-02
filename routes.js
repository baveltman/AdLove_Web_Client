
module.exports = {
	routes: {
		HomePage: {
			path: ['/'],
			method: 'get',
			page: './pages/front-page',
		},
		PlacesApi: {
			path: ['/api/places'],
			method: 'get',
			page: './api/places-search'
		}
	},
};
