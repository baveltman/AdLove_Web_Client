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
                    <div className="row">
                    ©2016 AdLove
                    </div>
                </div>
      </div>
        );
    }
}