import data from './Data';
import MovieList from './Components/MovieList';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <MovieList data={data}/>
      
    </div>
  )
}

export default App;