import React from 'react';
import {
    RootContainer,
    RootElement,
    TheFold
} from "react-server";
import Cover from '../components/cover';
import Header from '../components/marketing-header';
import Footer from '../components/footer';
import '../build/styles/marketing-base.css';
import '../build/styles/marketing-header.css';
import '../build/styles/cover.css';
import '../build/styles/footer.css';

export default class FrontPage {
    getElements() {
        return (
            <RootContainer>

				<RootElement>
					<Header />
				</RootElement>

				<RootElement>
					<Cover />
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
        return "Albert - Your Friendly Review Assistant"
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
            content: 'Albert - Your Friendly Review Assistant'
        }, ];
    }
}