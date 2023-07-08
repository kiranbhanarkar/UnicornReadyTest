
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Todo from './Todo';
import Login from './Login';
import Signup from './Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todo />}>
         </Route>
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
