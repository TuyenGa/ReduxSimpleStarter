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

        this.state = {videos : []};

        YTSearch({key : API_KEY, term : 'One Call Away'}, (videos) => {
            this.setState({ videos }); // this.setState({videos: videos})

        });
    }
    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video  ={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        );
    };
};

ReactDOM.render(
    <App /> , document.querySelector('.container')

);
