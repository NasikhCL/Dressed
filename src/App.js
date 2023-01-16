
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UsersList from './pages/UsersList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/category/lists' element={<UsersList />}/>
      </Routes>
     {/* <Home /> */}
    </div>
  );
}

export default App;
