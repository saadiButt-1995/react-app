import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './components/Main'
import Stream from './components/Stream'
import Live from './components/Live'

function App() {
  return (
      <BrowserRouter>
      <Switch>
          <Route path="/main">
            <Main />
          </Route>
          <Route path="/stream">
            <Stream />
          </Route>
          <Route path="/live">
            <Live />
          </Route>
        </Switch>
      </BrowserRouter>
       
  );
}

export default App;
