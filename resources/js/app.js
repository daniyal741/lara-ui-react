import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/home/';
import About from './components/about/';
import Detail from './components/detail/';

ReactDOM.render(

    <div>
        <Home />
        <About />
        <Detail />
    </div>,

    document.getElementById('root')

);