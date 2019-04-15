import React, { Component } from 'react';
import VideoItem from "./VideoItem";

class VideoList extends Component {
  videosList = () => {
    return this.props.videos.map((video) => {
      return <VideoItem key={video.id.videoId} video={video} selected={this.props.selected}/>
    })
  }

  render() {
    return (
      <div className="ui relaxed divided list">
        {this.videosList()}
      </div>
    );
  }
}

export default VideoList;
