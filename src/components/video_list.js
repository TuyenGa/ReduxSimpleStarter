import React , { Component } from 'react';
import VideosListItem from './video_list_item';
const VideoList = (props) => {
    const videoItems = props.videos.map(video =>{
        return <VideosListItem key={video.etag} video={video}/>
    });

        return (
            <ul className="col-md-6 list-group">
                {videoItems}
            </ul>
        );



}

export default VideoList;