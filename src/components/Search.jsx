import React, {Component} from "react";
import '../css/fawesome/solid.css'

class Search extends Component {
    state = {
        search: '',
        radio_type: 'all'
    }

    handleKey = (event) => {
        if (event.key === 'Enter' || event.key === 'numpadEnter') {
            this.props.searchHandler(this.state.search, this.state.radio_type)
        }
    }
    handleChange = (event) => {
        this.setState(() => ({[event.target.name]: event.target.value}), () => {
            this.props.searchHandler(this.state.search, this.state.radio_type)
            localStorage.setItem('search_bar', JSON.stringify(this.state))
        })

    }

    render() {
        return (
            <div className="row">
                <div className="col s12">
                    <div className="input-field ">
                        <input
                            className="validate"
                            placeholder='search'
                            type="search"
                            value={this.state.search}
                            onChange={(e) => this.setState({search: e.target.value})}
                            onKeyDown={this.handleKey}

                        />
                        <button className='btn search-btn pink darken-3'
                                onClick={() => this.props.searchHandler(this.state.search, this.state.radio_type)}>
                            Search
                        </button>

                    </div>
                    <label>
                        <input name="radio_type"
                               type="radio"
                               value='all'
                               onChange={this.handleChange}
                               checked={this.state.radio_type === 'all'}
                        />
                        <span className="rbutton">All</span>
                    </label>
                    <label>
                        <input name="radio_type"
                               type="radio"
                               value='movie'
                               onChange={this.handleChange}
                               checked={this.state.radio_type === 'movie'}
                        />
                        <span className="rbutton">Movies</span>
                    </label>
                    <label>
                        <input name="radio_type"
                               type="radio"
                               value='series'
                               onChange={this.handleChange}
                               checked={this.state.radio_type === 'series'}

                        />
                        <span className="rbutton">Series</span>
                    </label>
                </div>
            </div>
        )
    }
}

export {Search}