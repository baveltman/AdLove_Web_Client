//AIzaSyDE-5pwf2NVgurJWZACWe-6JDhS05vjkAo

import React from 'react';
import {
    logging
} from 'react-server';
import debounce from 'debounce'
import GooglePlaces from 'node-googleplaces'
import $ from 'jquery'

const logger = logging.getLogger(__LOGGER__);

export default class PlaceSearch extends React.Component {

    constructor(props) {
        super(props);

        /********** constants *****************/
        this.PLACE_SEARCH_INPUT = "placeSearch";
        this.OK_STATUS = "OK";

        /*********** attributes *************/
        this._places = new GooglePlaces("AIzaSyDE-5pwf2NVgurJWZACWe-6JDhS05vjkAo");

        /********** Methods **************/
        this.state = {
            predictions: null
        };

        this.componentWillMount = () => {
            this.searchPlaceDebounced = debounce(this.searchPlace, 300);
        };

        this.searchPlace = () => {
            let searchInput = $("#" + this.PLACE_SEARCH_INPUT);
            let search = searchInput ? searchInput.val() : "";

            if (search) {
                const params = {
                    input: search
                };
                this._places.autocomplete(params)
                    .then((res) => {
                        if (res && res.status == this.OK_STATUS) {
                            this.updatePredictions(res.predictions);
                        } else {
                            //TODO: maybe a ux around error handling at some point?
                            console.error(res);
                        }
                    })
                    .catch(err => {
                        //TODO: maybe a ux around error handling at some point?
                        console.error(err);
                    })
            }
        };

        this.updatePredictions = (predictions) => {
            if (predictions) {
                this.setState({
                    predictions: predictions
                })
            }
        };

        this.renderPredictions = () => {
            let predictions = this.state.predictions;
            let predictionResults = [];

            if (predictions) {
                predictions.forEach((prediction) => {
                    predictionResults.push(
                        <li key={prediction.id}>
                          {prediction.description}
                        </li>
                    )
                })
            }

            if (predictionResults.length > 0) {
                return (
                    <ul className="predictions">
                      {predictionResults}
                    </ul>
                );
            }
        };
    }

    render() {
        return (
            <div>
              <input id={this.PLACE_SEARCH_INPUT} type="text" placeholder="Enter Business Name or Address..." onChange={this.searchPlaceDebounced} />
              {this.renderPredictions()}
            </div>
        );
    }
}
