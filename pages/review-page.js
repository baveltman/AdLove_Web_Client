import React from 'react';
import {
    RootContainer,
    RootElement,
    TheFold
} from "react-server";
import Review from '../components/review';
import Header from '../components/marketing-header';
import Footer from '../components/footer';
import '../build/styles/marketing-base.css';
import '../build/styles/marketing-header.css';
import '../build/styles/review.css';
import '../build/styles/footer.css';

export default class ReviewPage {
    getElements() {
        return (
            <RootContainer>

				<RootElement>
					<Header />
				</RootElement>
                <RootElement>
                    <Review />
                </RootElement>
				<TheFold />
                <Footer />

			</RootContainer>
        );
    }

    handleRoute(next) {
        return next();
    }

    getTitle() {
        return "Reviews for Tanakasan in Seattle, WA | AdLove"
    }

    getBodyClasses() {
        return ['page-body'];
    }

    getMetaTags() {
        //TODO: Alex modify meta tags here as needed
        return [{
            charset: 'utf8'
        }, {
            'http-equiv': 'x-ua-compatible',
            'content': 'ie=edge'
        }, {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1'
        }, {
            name: 'description',
            content: 'Automatically collect feedback from your most valuable customers'
        }, ];
    }
}