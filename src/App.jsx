import './App.css';
import { Route, Routes } from 'react-router-dom';
import Main from './routes/Main';
import Login from './routes/Login';
import Update from './routes/Update';
import Post from './routes/Post';
import MyInfo from './routes/MyInfo';
import Hospital from './routes/Hospital';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/post/:id' element={<Post />} />
        <Route path='/update' element={<Update />} />
        <Route path='/info' element={<MyInfo />} />
        <Route path='/hospital' element={<Hospital />} />
      </Routes>
    </div>
  );
}

export default App;