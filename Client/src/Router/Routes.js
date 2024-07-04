import React from 'react'
import Home from '../Pages/Home'
import Movie from '../Pages/Movie'
import TvShow from '../Pages/TvShow'

const routes = () => [
    {path: '/', Element: <Home/>},
    {path: '/movie', Element: <Movie/>},
    {path: '/tvshow', Element: <TvShow/>}
];


export default routes;