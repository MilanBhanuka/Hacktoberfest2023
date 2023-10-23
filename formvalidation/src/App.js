
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Signin from './component/Signin';
import Signup from './component/Signup';

function App() {
  return (
    <div>
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
