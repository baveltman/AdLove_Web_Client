import React from 'react';
import {
    logging
} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default class Footer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="footer">
                <div className="footer-container">
                Albert © 2016.
                </div>
      </div>
        );
    }
}