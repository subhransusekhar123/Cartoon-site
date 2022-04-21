import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import LikedPage from './Assignment/LikedPage';

import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <Router>

<Routes>
    <Route path='/' exact='true' element={<App/>}/>
    <Route path='/like' element={<LikedPage/>}/>
    
</Routes>

 </Router>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))

