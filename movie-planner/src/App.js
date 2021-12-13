import './App.css';
import InsertForm from './components/InsertForm';
import MovieList from './components/MovieList';
import Overview from './components/Overview';
import Title from './components/Title';

function App() {
  return (
    <div className="App">
      <Title />
      <Overview />
      <InsertForm />
      <MovieList />
    </div>
  );
}

export default App;
