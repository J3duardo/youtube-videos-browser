import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "./App.css";

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
        <div id="videos-container">
          <div id="video-detail">
            <VideoDetail videoInfo={this.state.videoSelected}/>
          </div>  
          <div id="video-list">
            <VideoList videos={this.state.videos} selected={this.selectedVideo}/>       
          </div>   
        </div>
      </div>
    );
  }
}

export default App;