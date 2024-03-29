import React from 'react';
import $ from 'jquery';
import {
    logging
} from 'react-server';

const logger = logging.getLogger(__LOGGER__);

export default class MarketingHeader extends React.Component {
    constructor(props) {
        super(props);

        /********** Methods **************/
    }

    componentDidMount() {
        $(window).scroll(() => {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                $(".marketing-header").addClass("opaque");
            } else {
                $(".marketing-header").removeClass("opaque");
            }
        });
    }

    render() {
        return (
            <div className="row marketing-header">
                <div className="header-container">
                    <div className="header-right">
                        <div className="heart-image"></div>
                        <div className="logo">AdLove</div>
                    </div>

                    <div className="header-left">
                        <div className="sign-in">Login</div>
                        <div className="button round red">Request a Demo</div>
                    </div>
                </div>
			</div>
        );
    }
}