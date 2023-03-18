import { Route } from 'react-router-dom';
import './App.css';
import { BrowserRouter, Router, Switch} from 'react-router-dom';
import Landing from './components/LANDING/Landing';
import Home from './components/HOME/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <h1>VIDEOGAMES PI</h1>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path = "/home" component = {Home} />

          
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;