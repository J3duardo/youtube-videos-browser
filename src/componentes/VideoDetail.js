import React from 'react';

const VideoDetail = (props) => {
  if(!props.videoInfo.snippet) {
    return <div>No video selected...</div>
  }

  return (
    <div>
      <div className="ui embed">
        <iframe
          src={`https://www.youtube.com/embed/${props.videoInfo.id.videoId}`}
          title={props.videoInfo.snippet.title}
        />
      </div>
      <div className="ui segment">
        <h3 className="ui header">{props.videoInfo.snippet.title}</h3>
        <p>{props.videoInfo.snippet.description}</p>
      </div>    
    </div>
  );
}

export default VideoDetail;
