import React from 'react';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
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
                let getUrl = "/api/places?search=" + search;
                Ajax.GET(getUrl)
                    .then((response) => {
                        let isValidResponse = response && response.body && response.body.Predictions;
                        if (isValidResponse) {
                            this.updatePredictions(response.body.Predictions)
                        }
                    }).catch(err => {
                        console.error(err);
                    })
            } else {
                this.updatePredictions(null);
            }
        };

        this.updatePredictions = (predictions) => {
            this.setState({
                predictions: predictions
            })
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
                    <ul className="predictions" key={"predictions"}>
                      {predictionResults}
                    </ul>
                );
            } else if (predictions) {
                return (
                    <ul className="predictions" key={"no-predictions"}>
                  {"No Results"}
                </ul>
                );
            }
        };

        this.closeIfEmpty = () => {
            let searchInput = $("#" + this.PLACE_SEARCH_INPUT);
            if (!searchInput || !searchInput.val()) {
                this.setState({
                    predictions: null
                });
            }
        };
    }

    render() {
        return (
            <div>
              <input id={this.PLACE_SEARCH_INPUT}
                type="text"
                placeholder="Enter Business Name or Address..."
                onChange={this.searchPlaceDebounced}
                onBlur={this.closeIfEmpty} />
              <div className="predictions">
                <ReactCSSTransitionGroup transitionName="animate-opacity" transitionEnterTimeout={500} transitionLeaveTimeout={300}>
                  {this.renderPredictions()}
                </ReactCSSTransitionGroup>
              </div>
            </div>
        );
    }
}
