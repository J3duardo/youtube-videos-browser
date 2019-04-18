import React, { Component } from 'react';

class VideoDetail extends Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount = () => {
    this.props.scrollHandler(this.videoRef)
  }

  render() {
    if(!this.props.videoInfo.snippet) {
      return null
    }

    return (
      <div ref={this.videoRef}>
        <div className="ui embed">
          <iframe
            src={`https://www.youtube.com/embed/${this.props.videoInfo.id.videoId}`}
            title={this.props.videoInfo.snippet.title}
          />
        </div>
        <div className="ui segment">
          <h4 className="ui header">{this.props.videoInfo.snippet.title}</h4>
          <p>{this.props.videoInfo.snippet.description}</p>
        </div>    
      </div>
    );
  }
}

export default VideoDetail;
