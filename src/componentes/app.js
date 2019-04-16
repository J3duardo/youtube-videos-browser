import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "./App.css";

class App extends Component {
  state = {
    videos: [],
    videoSelected: {},
    start: 0,
    end: 5
  }

  selectedVideo = (video) => {
    console.clear();
    console.log(video);
    this.setState({
      videoSelected: video
    })
  }

  onSearchSubmit = async (term) => {
    const listStart = this.state.start;
    const listEnd = this.state.end;

    const response = await youtube.get("/search", {
      params: {
        q: term
      }
    });

    this.setState({
      videos: response.data.items.slice(listStart, listEnd),
      videoSelected: response.data.items[0]
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