import React from 'react';
import {Movies} from '../components/Movies'
import {Preloader} from '../components/Preloader'
import {Search} from '../components/Search'

const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY

class Main extends React.Component {
    state = {
        movies: [],
        total_movies: 0,
        page: 1,
        loading: true,
        notfound: false,
    }

    componentDidMount() {
        fetch(`http://www.omdbapi.com/?s=Back to the Future&apikey=${REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(data => {

                this.setState({movies: data.Search, loading: false})
            })
    }

    searchHandler = (fname, tfilm = 'all') =>{
        this.setState({loading: true})
        let filter = ''
        if  (tfilm==='all'){
            filter=''
        } else if (tfilm==='movie') {
            filter = '&type=movie'
        } else if (tfilm==='series') {
            filter = '&type=series'
        }

        if (fname !==""){
            fetch(`http://www.omdbapi.com/?apikey=${REACT_APP_API_KEY}&s=${fname}&page=${this.state.page}${filter}`)
                .then(response => response.json())
                .then(data => this.setState({movies: data.Search, total_movies: data.totalResult, loading: false}))
        } else {
            this.setState({loading: false})
        }
    }


    render() {
        const {movies, loading} = this.state
        return (
            <main className='container content'>
                <Search searchHandler={this.searchHandler}/>
                {loading ?
                    <Preloader/>
                    : <Movies movies={movies}/>
                }
            </main>
        )
    }
}

export {Main}