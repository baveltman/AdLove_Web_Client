import {ReactServerAgent, logging} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default class NetworkApi {
	setConfigValues() {
		return {isRawResponse: true};
	}

	handleRoute(next) {
		this.search = this.getRequest().getQuery().search;
		logger.info(`got places api request for ${this.search}`);
		return next();
	}

	getContentType() {
		return 'application/json';
	}

	getResponseData() {
		let url = "http://138.68.54.190:8080/places?search=";
		if (this.search) {
			url += `${this.search}`;
		}
		return new Promise(resolve => {
			ReactServerAgent.get(url).then(data => {
				logger.info(`got data ${JSON.stringify(data)} from url ${url}`);
				resolve(JSON.stringify(data));
			});
		});
	}
}
