import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};
    onFormSubmit = (event) => {
        event.preventDefault();
        // TODO make sure we call callback from parent component
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input 
                            type="text" 
                            onChange={(e) => this.setState({term: e.target.value})}
                            value={this.state.term}
                        />
                    </div>
                </form>

            </div>
        )
    }
}

export default SearchBar;