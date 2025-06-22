import React from 'react';
import Auth from './component/Auth';
import Home from './component/Home';
import Login from './component/Login';
import Main from './component/Main';
import SubjectDetail from './component/SubjectDetail';
import './Css/Header.css';
import './Css/Main.css';
import './App.css';
import './Css/SubjectDetail.css';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
          <Route path="/subject/:id" element={<SubjectDetail />} />
        </Routes>
    </div>
  );
}

export default App;
