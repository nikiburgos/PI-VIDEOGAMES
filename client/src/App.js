import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';
import Landing from './components/LANDING/Landing';
import Home from './components/HOME/Home';
import CreateVideogame from './components/CREATEVIDEOGAME/CreateVideogame';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <h1>VIDEOGAMES PI</h1>
        {/* <Switch> */}
          <Route exact path="/" component={Landing} />
          <Route path = "/home" component = {Home} />

          <Route path="/videogame" component={CreateVideogame} />

          
        {/* </Switch> */}
      </div>
    </BrowserRouter>
  );
}

export default App;