import Auth from './component/Auth';
import Home from './component/Home';
import Login from './component/Login';
import Main from './component/Main';
import './Css/Header.css';
import './Css/Main.css';
import './App.css';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Login />} />
          <Route path="/main" element={<Main />} />
        </Routes>
    </div>
  );
}

export default App;
