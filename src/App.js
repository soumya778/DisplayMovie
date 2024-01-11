import Header from './Components/Header';
import './App.css';
import Movie from './Components/Movie';
import movies from './data.json'

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main'>
        {
          movies.map((element) => {
            return (
              <Movie title={element.Title}
                year={element.Year}
                img={element.Poster} />
            )
          })
        }


      </div>
    </div>
  );
}

export default App;
