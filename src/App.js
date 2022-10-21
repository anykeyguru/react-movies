import React, {Fragment} from "react";
import './materialize.min.css'
import './index.css'
import {Header} from './layout/Header'
import {Main} from './layout/Main'
import {Footer} from './layout/Footer'

function App() {
    return (
        <Fragment>
            <Header/>
            <Main/>
            <Footer/>
        </Fragment>
    );
}
export default App;
