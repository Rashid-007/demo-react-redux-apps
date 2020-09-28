
import React from 'react';
import SearchBar from './search-bar';
import ItemList from './item-list';
import unsplashGateway from '../api/unsplash-gateway';

class App extends React.Component {
    state = { images: []};
    onSearchSubmit = async (term) => {
        // An asynchronous request
        const response =  await unsplashGateway.get('/search/photos', {
            params: { query: term},
        });

        this.setState({images: response.data.results});
    }
    render() {
        return (
            <div className="ui container" style={{marginTop: '20px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ItemList images={this.state.images}/>
                <p>{this.state.images.length}</p>
            </div>
        )
    }
}

export default App;