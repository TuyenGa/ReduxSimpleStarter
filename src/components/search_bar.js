import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {term : ''}
    }
    render(){
        return (
        <div className='search-bar form-group col-md-6 col-md-offset-3'>
            <input className='form-control' onFocus={event => this.onInputChange(event.target.value) } />

        </div>
        );
    }

    onInputChange(term)
    {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

}

export default SearchBar;