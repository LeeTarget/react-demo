import React from 'react';
import VideoSearch from './VideoSearch';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';
import youtube from '../youtube';

class App extends React.Component {

    state = { videoList: [], selectedVideo: null };

    componentDidMount() {
        this.onSearchVideo('building');
    }

    onSearchVideo = async (term) => {
        const {data} = await youtube.get('/search', {
          params: {
            q: term,
            part: 'snippet',
            maxResults: 5,
            type: 'video',
          },
        });
        this.setState({
            videoList: data.items,
            selectedVideo: data.items[0]
        });
    }

    onClickVideo = video => {
        this.setState({selectedVideo: video});
    }

    render() {
        return (
        <div className="ui container">
            <VideoSearch onSearchVideo={this.onSearchVideo}/>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetails video={this.state.selectedVideo}></VideoDetails>
                    </div>
                    <div className="five wide column">
                        <VideoList 
                        videos={this.state.videoList} 
                        onVideo={this.onClickVideo}></VideoList>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default App;