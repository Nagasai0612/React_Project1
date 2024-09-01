import React from 'react'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.js';
import About from './About'
import Contact from './Contact'
import Service from './Service'
import Home from './Home.js'
import Recipe from './Recipe.js';
import Weather from './Weather.js';
import News from './News.js'
import Movies from './Movies.js'


function Header() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><img className='pic' src='https://www.pngitem.com/pimgs/m/145-1451274_transparent-web-development-icon-png-symbol-png-download.png'></img></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/service">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    API's
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to='/recipe'>Recipe Finder API</Link></li>
                                    <li><Link className="dropdown-item" to="/weather">Weather API</Link></li>
                                    <li><Link className="dropdown-item" to="/news">News API</Link></li>
                                    <li><Link className="dropdown-item" to="/movies">Movies API</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/service' element={<Service />} />
                    <Route path='/recipe' element={<Recipe />} />
                    <Route path='/weather' element={<Weather />} />
                    <Route path='/news' element={<News />} />
                    <Route path='/movies' element={<Movies />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App