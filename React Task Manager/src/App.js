import './App.css';
import Header from './component/Header';
import Dashboard from './component/Dashboard';
import Login from './component/Form/Login'
import Register from './component/Form/Register'
import CreateTask from './component/CreateTask';

import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/create-task" element={<CreateTask />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
