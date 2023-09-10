import './App.css';
import Single from './pages/single/Single';
import Home from './pages/home/Home';
import Topbar from './TopBar/Topbar';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Write from './pages/write/Write';
import Setting from './pages/settings/Setting';

function App() {
  const user = true;

  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />
        <Route path="/write" element={user ? <Write /> : <Register />} />
        <Route path="/setting" element={user ? <Setting /> : <Register />} />
        <Route path='/post' element={<Single/>}/>
      </Routes>
    </Router>
  );
}

export default App;
