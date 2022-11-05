import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shop from './Pages/Shop/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;
