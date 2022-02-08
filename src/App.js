import './App.css';

import { Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home/Home';
import Error from './Error/Error.js';

function App() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </section>
  );
}

export default App;
