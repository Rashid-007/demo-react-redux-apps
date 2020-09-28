import React from 'react';
import ReactDOM from 'react-dom';
import Season from './season-display';
import Spinner from './spinner';

import'./season-display.css';

class App extends React.Component {
    person = {
        name: "Ahmad",
        sleep: () => {
            console.log("Sleep well!");
        },
        realStateProps: ["A house", "a shop", "a car"],
        wakeup: function(alarm) {
            console.log(`${this.name} ${alarm} boom`);
        }
    }
    // babel will get involved here and convert this to constructor based.
    state = { lat: null, errorMessage: ''};
/*     constructor(props) {
        // We override the react comp constructor, so we need to call that to config things.
        super(props);
        this.state = { lat: null, errorMessage: ''};
    } */
    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({lat: position.coords.latitude}),
            (err) => this.setState({errorMessage: err.message})
        );
    }
    componentDidUpdate() {
        console.log("Component updated");
    }
    renderContent() {
        if (this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>
            }
            if(!this.state.errorMessage && this.state.lat){
                return (
                    <Season lat={this.state.lat}/>
                )
            }
            return (
                <Spinner message="Please accept the location request..."/>
                )
    }
    render() {
        return (<div>
            {this.renderContent()}
        </div>)
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)