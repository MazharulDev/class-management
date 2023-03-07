import { Route, Routes } from 'react-router-dom';
import './App.css';
import DynamicInput from './components/dynamicInput/DynamicInput';
import Home from './components/home/Home';
import CourseVideoPlayer from './components/video/CourseVideoPlayer';
import VideoContentShow from './components/video/VideoContentShow';

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/class' element={<VideoContentShow />}>
          <Route path='li/:title' element={<CourseVideoPlayer />} />
        </Route>
        <Route path='/input' element={<DynamicInput />} />
      </Routes>
    </div>
  );
}

export default App;
