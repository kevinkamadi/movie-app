
import './App.css';
import {Routes, Route} from "react-router-dom"
import MovieCard from './components/MovieCard';  
import Favorites from './components/pages/favorites';
import Home from './components/pages/home';
import NavBar from './components/NavBar';


function App() {

  
  return (
    <div>
      <NavBar/>
      <main className='main-content'>
            
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/favorites' element={<Favorites/>}/>
                  <Route path='/movie.card' element={<MovieCard  movie ={{title:"Hall of Fame", release_date: "1990"}}/>}/>
                
                  {/* <Route path='/' element={<Home/>}/> */}
            </Routes> 
          </main>

    </div>
   
  // 
      
  );
}


// function Text({message}){
// return(
// <div>
//   <p>{message}</p>
// </div>
// )
// }

export default App;
