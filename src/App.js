import './App.css';
import MovieList from './Components/MovieList/MovieList';
import {data} from './dataMovies'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieAdd from './Components/MovieAdd/MovieAdd';
import { useState } from 'react';
import Filter from './Components/Filter/Filter';
import Navbar  from './Components/Navbar/Navbar';

function App() {
  const [newData, setNewData] = useState(data)
  const NewMovie=(x)=>{
   setNewData([...newData,{...x,id:newData.length}])
  } 

  const FilterMovie = (x) =>{
    console.log(x.title)
    console.log(newData.filter(el=>el.title.toUpperCase()==x.title.toUpperCase()))
    //setMoviedata(moviedata.filter(el=>el.title.toUpperCase()==x.title.toUpperCase()))
  }
  const handleDclick=()=>{
    setNewData([])  //array of object
  }
  return (
    <div className="App">
      <h1>Movie List</h1>
      <Navbar NewMovie={NewMovie} />
      <Filter FilterMovie={FilterMovie}/>
     { MovieList.length?<MovieList data={newData}/>:<h1>No Movies</h1>}
      <button onDoubleClick={handleDclick}>Clear all</button>
       
    </div>
  );
}

export default App;
