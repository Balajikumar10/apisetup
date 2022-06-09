import logo from './logo.svg';
import './App.css';
import Api from './components/Api';
import Post from './components/Post';
import { Route, Routes } from 'react-router-dom';
import Comments from './components/Comments';
function App() {
  return (


    <Routes >
      <Route path='/' element={<Api />} />
      <Route path='/post/:id' element={<Post />} />
      <Route path='/comments/:id' element={<Comments />} />

    </Routes>


  );
}

export default App;
