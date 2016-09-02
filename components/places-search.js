import React from 'react';
import {
    logging
} from 'react-server';
import debounce from 'debounce'
import $ from 'jquery'
import * as Ajax from '../lib/Ajax'

const logger = logging.getLogger(__LOGGER__);

export default class PlaceSearch extends React.Component {

    constructor(props) {
        super(props);

        /********** constants *****************/
        this.PLACE_SEARCH_INPUT = "placeSearch";

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
                //TODO: change the backend service to come from env vars
                let getUrl = "http://138.68.54.190:8080/places?search=" + search;
                Ajax.GET(getUrl)
                    .then((response) => {
                        if (response && response.Predictions) {
                            this.updatePredictions(response.Predictions)
                        }
                    }).catch(err => {
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
                    //TODO: program each onclick of prediction to redirect to review aggregation page 
                    predictionResults.push(
                        <li key={prediction.place_id}>
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
            } else if (predictions) {
                return (
                    <ul className="predictions">
                  {"No Results"}
                </ul>
                );
            }
        };
    }

    render() {
        return (
            <div>
              <input id={this.PLACE_SEARCH_INPUT} type="text" placeholder="Enter Business Name or Address..." onChange={this.searchPlaceDebounced} />
              <div className="predictions">
                {this.renderPredictions()}
              </div>
            </div>
        );
    }
}