import React from 'react';

class VideoItem extends React.Component {

    onVideoClick = () => {
        this.props.onVideo(this.props.video);
    }

    render() {
        const {video} = this.props;
        return (
        <div onClick={this.onVideoClick}>
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} />
            <div className="content">
                <div className="header">{video.snippet.title}</div>
            </div>
        </div>);
    }
}

export default VideoItem;