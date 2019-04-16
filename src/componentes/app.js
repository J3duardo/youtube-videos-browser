import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends Component {
  state = {
    videos: [],
    videoSelected: {}
  }

  selectedVideo = (video) => {
    console.clear();
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
      videos: response.data.items,
      videoSelected: {}
    });
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchSubmit}/>
        <VideoDetail videoInfo={this.state.videoSelected}/>
        <VideoList videos={this.state.videos} selected={this.selectedVideo}/>
      </div>
    );
  }
}

export default App;