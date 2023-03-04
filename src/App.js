import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import PokemonProvider from './context/PokemonProvider';

function App() {
  return (
    <div className="App">
      <h1>Pokemon</h1>

      <BrowserRouter>
        <PokemonProvider>
          <Header />
          <Main />
        </PokemonProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
