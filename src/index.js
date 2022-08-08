import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Signup from './pages/signup/Signup'
import Signin from './pages/signin/Signin';
import DEVinfo from './pages/DEV/DEVinfo';

import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/login' element={<Signin/>}/>
            <Route path='/devinfo' element={<DEVinfo/>}/>
        </Routes>
    </Router>

);

// ReactDOM.render(
//     <Router>
//         <Routes>
//             <Route path='/' element={<Home/>}/>
//             <Route path='/signup' element={<Signup/>}/>
//         </Routes>
//     </Router>
// )