import React from 'react';
import {
    logging
} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default class MarketingHeader extends React.Component {
    constructor(props) {
        super(props);

        /********** Methods **************/
    }



    render() {
        return (
            <div>
        <div className="cover-copy">
					image
          <div className="cover-heading">
            <h1>What Are Customers Saying About Your Business?</h1>
          </div>
          <div className="cover-input">
            <input type="text" placeholder="Enter Business Name or Address..." />
          </div>
        </div>
      </div>
        );
    }
}