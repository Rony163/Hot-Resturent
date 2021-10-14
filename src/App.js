import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import BreakfastDetail from './Pages/FoodDetail/BreakfastDetail';
import Home from './Pages/Home/Home/Home';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/detail/:foodId">
            <BreakfastDetail></BreakfastDetail>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
