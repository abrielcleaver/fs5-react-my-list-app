import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link,
} from 'react-router-dom';

import PokemonDetailPage from './Components/PokemonDetail';
import PokemonPage from './Components/PokemonPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <PokemonPage />
          </Route>
          <Route exact path="/pokemon/:id">
            <PokemonDetailPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
