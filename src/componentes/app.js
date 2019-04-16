import React, { Component } from 'react';
import SearchBar from "./SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import "./App.css";

class App extends Component {
  state = {
    fullVideoList: [],
    videos: [],
    videoSelected: {},
    start: 0,
    end: 5
  }

  selectedVideo = (video) => {
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
      fullVideoList: response.data.items,
      videos: response.data.items.slice(listStart, listEnd),
      videoSelected: response.data.items[0]
    });
  }

  loadMoreVideos = () => {
    const newStart = this.state.end;
    const newEnd = newStart + 5;
    const oldList = [...this.state.videos];
    const newItems = this.state.fullVideoList.slice(newStart, newEnd);
    const newVideoList= [...oldList, ...newItems];

    this.setState({
      videos: newVideoList,
      start: newStart,
      end: newEnd
    })
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
            <VideoList videos={this.state.videos} selected={this.selectedVideo} loadMore={this.loadMoreVideos}/>      
          </div>   
        </div>
      </div>
    );
  }
}

export default App;