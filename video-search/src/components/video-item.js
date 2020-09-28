import './video-item.css';
import React from 'react';

const VideoItem = ({video, onVideoSelected}) => {
    const { snippet } = video;
    return (
        <div className="video-item item" onClick={() => onVideoSelected(video)}>
            <img 
                className="ui image" 
                src={snippet.thumbnails.medium.url}
                alt={video.snippet.title}
            />
            <div className="content">
                <div className="header"> {snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem;