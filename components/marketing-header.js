import React from 'react';
import {logging} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default class MarketingHeader extends React.Component {
	constructor(props) {
		super(props);

    /********** Methods **************/
	}

	render() {
		return (
			<div>
				<div>Add Love</div>

        <div>Sign In</div>
        <div>Sign up</div>
			</div>
			);
	}
}
