import React from 'react';
import VideoItem from './VideoItem';

class VideoList extends React.Component {


    render() {
        const videos = this.props.videos.map((video) => {
            return <VideoItem onVideo={this.props.onVideo} key={video.id.videoId} video={video}></VideoItem>
        })
        return <div className="ui relaxed divded list">{ videos }</div>;
    }
}

export default VideoList;