
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import UsersList from './pages/UsersList';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route excat path='/category/:gender/:categoryName' element={<UsersList/>}/>
      </Routes>
     {/* <Home /> */}
    </div>
  ); 
}

export default App;
