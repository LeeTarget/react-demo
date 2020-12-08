import React from 'react';
import VideoSearch from './VideoSearch';
import VideoDetails from './VideoDetails';
import VideoList from './VideoList';

class App extends React.Component {

    state = { videoList: [], selectedVideo: null };

    render() {
        return (
        <div>
            <VideoSearch />
            <VideoList></VideoList>
        </div>);
    }
}

export default App;