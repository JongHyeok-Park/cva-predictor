import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Main from './routes/Main';
import Login from './routes/Login';
import Update from './routes/Update';
import Post from './routes/Post';
import MyInfo from './routes/MyInfo';
import Hospital from './routes/Hospital';
import Survey from './routes/Survey';
import Navbar from './components/navbar/Navbar';
import MapView from './routes/MapView';
import { useEffect, useState } from 'react';
import Redirect from './routes/Redirect';

function App() {
  const [showNav, setShowNav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const startPath = location.pathname.split('/')[1];
    if (startPath === 'post' 
        || startPath === 'info' 
        || startPath === 'hospital' 
        || startPath === 'map' 
        || startPath === '') {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
  }, [location])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/update' element={<Update />} />
        <Route path='/info' element={<MyInfo />} />
        <Route path='/hospital' element={<Hospital />} />
        <Route path='/survey' element={<Survey />} />
        <Route path='/map' element={<MapView />} />
        <Route path='/redirect' element={<Redirect />} />
        <Route path='*' element={<div>존재하지 않는 페이지입니다.</div>} />
      </Routes>
      { showNav ? <Navbar /> : null }
    </div>
  );
}

export default App;
