import React, {Component} from 'react';

const VideoDetail  = ({video}) =>  {
    console.log(video);
    if(!video)
    {
        return <div>Loading...</div>;
    }
        const videoID = video.id.videoId;
        const url = `https://www.youtube.com/embed/${videoID}`;
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="details">
                <h3>{video.snippet.title}</h3>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};

export default VideoDetail;