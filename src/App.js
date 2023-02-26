import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/home/Home';
import CourseVideoPlayer from './components/video/CourseVideoPlayer';
import VideoContentShow from './components/video/VideoContentShow';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/class' element={<VideoContentShow />}>
          <Route path='li/:id' element={<CourseVideoPlayer />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
