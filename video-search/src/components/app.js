import React from 'react';

import SearchBar from './search-bar';
import VideoList from './video-list';
import VideoDetail from './video-detail';
import youtubeGateway from '../api/youtube-gateway';

class App extends React.Component {
    state = {videos: [], selectedVideo: null};
    componentDidMount() {
        this.onTermSubmit('buildings');
    }
    onTermSubmit = async (term) => {
        const response = await youtubeGateway.get('/search', {
            params: {
                q: term,
            }
        });
        this.setState({videos: response.data.items, 
            selectedVideo: response.data.items[0]});
    }
    onVideoSelected = (selectedVideo) => {
        this.setState({selectedVideo})
    }
    render() {
        return (
            <div className="ui container">
                <SearchBar onSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo}/>
                        </div>
                        <div className="five wide column">
                        <VideoList 
                            videos={this.state.videos} 
                            onVideoSelected={this.onVideoSelected}
                        />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;