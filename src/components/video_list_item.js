import React , {Component} from 'react';

const VideosListItem = ({video}) =>{
    const imgUrl = video.snippet.thumbnails.default.url;
    return(
    <li className="list-group-item">
        <div className="video-list media">
            <div className="media-left">
                <img src={imgUrl} alt="" className="media-object"/>
            </div>
            <div className="media-body">
                <div className="media-heading">{video.snippet.title}</div>
            </div>
        </div>

    </li>);
};
export default VideosListItem;