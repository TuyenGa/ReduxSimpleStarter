import _ from 'lodash';
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
const API_KEY ='AIzaSyAT5BDYkvPxLQAXUhzj7xWdxnlEgfn2re4';
import VideoList from './components/video_list';



class App extends Component{
    constructor(props){
        super(props);

        this.state = {
            videos : [],
            selectedVideo : null
        };

        this.videoSearch();

    }

    videoSearch(term='sofm hilight')
    {
        YTSearch({key : API_KEY, term : term}, (videos) => {
            this.setState({
                videos : videos,
                selectedVideo: videos[0] // always select the first video
            }); // this.setState({videos: videos})

            });
    }


    render(){
        return (
            <div>
                <SearchBar onSearchTermChange={term => this.videoSearch(term) }/>
                <VideoDetail video ={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    };
};

ReactDOM.render(
    <App /> , document.querySelector('.container')

);
