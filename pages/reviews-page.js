import React from 'react';
import {
    RootContainer,
    RootElement,
    TheFold
} from "react-server";
import Footer from '../components/footer';
import '../build/styles/marketing-base.css';
import '../build/styles/footer.css';

export default class ReviewsPage {
    getElements() {
        return (
            <RootContainer>

				<RootElement>
					<div>Reviews Page</div>
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
        return "AdLove - Automatically collect feedback from your most valuable customers"
    }

    getBodyClasses() {
        return ['page-body', 'cover-copy'];
    }

    getMetaTags() {
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