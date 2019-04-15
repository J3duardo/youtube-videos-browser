import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./VideoList";

class App extends Component {
  state = {
    videos: [],
    videoSelected: null
  }

  selectedVideo = (video) => {
    console.log(video);
    this.setState({
      videoSelected: video
    })
  }

  onSearchSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items
    });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit}/>
        <VideoList videos={this.state.videos} selected={this.selectedVideo}/>
      </div>
    );
  }
}

export default App;