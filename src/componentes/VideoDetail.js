import React from 'react';

const VideoDetail = (props) => {
  if(!props.videoInfo.snippet) {
    return <div>No video selected...</div>
  }

  return (
    <div className="ui segment">
      <h3 className="ui header">{props.videoInfo.snippet.title}</h3>
      <p>{props.videoInfo.snippet.description}</p>
    </div>
  );
}

export default VideoDetail;
