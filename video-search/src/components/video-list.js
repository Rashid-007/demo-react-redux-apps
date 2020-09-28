import React from 'react';
import VideoItem from './video-item';


const VideoList = ({videos, onVideoSelected}) => {
    const renderedList = videos.map(video => {
    return <VideoItem 
                video={video} 
                onVideoSelected={onVideoSelected} 
                key={video.id.videoId}
            />
    });
    return (
        <div className="ui relaxed divided list">
           {renderedList}
        </div>
    )
}

export default VideoList;