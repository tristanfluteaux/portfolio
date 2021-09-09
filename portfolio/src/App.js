import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutMe from './components/AboutMe';
import Home from './screens/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path = '/'>
            <Home />
          </Route>
          <Route exact path='/aboutme'>
            <AboutMe />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
