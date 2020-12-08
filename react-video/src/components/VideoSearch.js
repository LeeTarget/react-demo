import React from 'react';

class VideoSearch extends React.Component {

    state = { item: '' }

    onSearchChange = (event) => {
        this.setState({item: event.target.value});
    }

    onSearchSubmit = (event) => {
        event.preventDefault();
        this.props.onSearchVideo(this.state.item);
    }

    render() {
        return (
        <div className="searchbar ui segment"> 
            <form onSubmit={this.onSearchSubmit} className="ui form">
                <div className="field">
                    <label>Search Video</label>
                    <input type="text" className="ui input"
                        value={this.state.item}
                        onChange= {this.onSearchChange} ></input>
                </div>
            </form>
        </div>);
    }
}

export default VideoSearch;