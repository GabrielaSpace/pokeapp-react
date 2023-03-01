import { BrowserRouter } from 'react-router-dom';

import Main from '../src/components/Main/Main'
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <h1>Pokemon</h1>
      <BrowserRouter>
      <Header/>
      < Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
