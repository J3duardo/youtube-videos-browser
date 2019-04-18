import React from 'react';
import "./VideoItem.css";

const VideoItem = (props) => {
  const snippet = props.video.snippet;

  const onClickHandler = () => {
    console.log(props.videoRef)
    props.selected(props.video);
    if(props.videoRef.current){
      window.scroll({top: props.videoRef.current.offsetTop, behavior: 'smooth'})
    }
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