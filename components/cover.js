import React from 'react';
import {
    logging
} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default class MarketingHeader extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
        <div className="cover-copy">
					image
          <div className="cover-container">
            <div className="cover-heading">
              <h1>What are customers saying about you?</h1>
              <h2>Automatically collect feedback from your most valuable customers with AdLove.</h2>
            </div>
            <div className="cover-input">
              <input type="text" placeholder="Enter Business Name or Address..." />
            </div>
          </div>
        </div>
      </div>
        );
    }
}