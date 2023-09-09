import { Route, Routes } from 'react-router';
import Home from './pages/home';

function App() {
  return (
    <div className="container-fluid">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/* <Route path="/about" element={<About/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
