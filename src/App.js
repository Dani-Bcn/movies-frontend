import './App.css';
import { Routes, Route ,Outlet} from 'react-router-dom';
import Home from './views/Home';
import Movie from './components/Movie'
import Movies from './views/Movies';
import Edit from './components/Edit';
import New from './views/New';
import Navbar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <h1>Movies app</h1>
      <Navbar></Navbar>
        <Routes>      
          <Route path="/" element={<Home />}/> 
          <Route path='movies' element={<Movies />}/>        
          <Route path="new" element={<New />} />       
          <Route path="edit/:id" element={<Edit />} />
          <Route path="home/:id" element={<Movie />} /> 

      </Routes>
    
    </div>
  );
}
export default App;
