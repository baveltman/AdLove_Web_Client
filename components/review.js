import React from 'react';
import {
    logging
} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default class Review extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
        <div className="restaurant-image">
					image
          <div className="header-container">
            <div className="restaurant-header">
              <h1>Tanakasan</h1>
              <div className="location-tag">Restaurant</div>
              <div className="address">
                <span className="location-icon"><i className="material-icons">place</i>
                2121 6th Avenue, Seattle, WA 98121
              </div>
              <div className="stars-container">
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">star</i>
                <i className="material-icons">starborder</i>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
    }
}