import React from 'react';
import "./VideoItem.css";

const VideoItem = (props) => {
  const snippet = props.video.snippet;

  const onClickHandler = () => {
    props.selected(props.video);
    window.scrollTo(0,0);
  }

  return (
    <div className="item" id="video-item" onClick={onClickHandler}>
      <img
        className="ui image"
        src={snippet.thumbnails.medium.url}
        alt={snippet.description}
      />
      <div className="content">
        <div className="header">
          {props.video.snippet.title}
        </div>
      </div>
    </div>
  );
}

export default VideoItem;