
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Favourites from './pages/Favourites';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import UsersList from './pages/UsersList';


function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route excat path='/category/:gender/:categoryName' element={<UsersList/>}/>
        <Route exact path='/searchResults/:searchQuery' element={<SearchResult />} />
        <Route exact path='/favourites' element={<Favourites />} />
      </Routes>
     {/* <Home /> */}
    </div>
  ); 
}

export default App;
