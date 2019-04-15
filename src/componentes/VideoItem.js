import React from 'react';
import "./VideoItem.css";

const VideoItem = (props) => {
  const snippet = props.video.snippet;

  const onClickHandler = () => {
    props.selected(props.video)
  }

  return (
    <div className="item" id="video-item" onClick={onClickHandler}>
      <img
        className="ui image"
        src={snippet.thumbnails.high.url}
        alt={snippet.description}
      />
      <div className="content">
        <div className="header">
          {props.video.snippet.title}
        </div>
        <p className="video-description">{snippet.description}</p>
      </div>
    </div>
  );
}

export default VideoItem;