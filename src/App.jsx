import Header from './Header';
import CharacterCards from './CharacterCards';
import CharacterRatings from './CharacterRatings';
import './App.css';
import './style.css';
import './reset.css';


function App() {
  return (
    <div className="App">
      <Header />
      <CharacterRatings />
      <CharacterCards />
    </div>
  );
}

export default App;
