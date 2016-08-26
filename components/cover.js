import React from 'react';
import {
    logging
} from 'react-server';
import PlaceSearch from './place-search'

const logger = logging.getLogger(__LOGGER__);

export default class Cover extends React.Component {
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
            <PlaceSearch />
          </div>
        </div>
      </div>
        );
    }
}