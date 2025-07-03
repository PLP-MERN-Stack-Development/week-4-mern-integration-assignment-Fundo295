import { BrowserRouter, Routes, Route } from 'react-router-dom';
import home from './pages/home';
import CreatePost from './pages/CreatePost';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<home />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;