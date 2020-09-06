import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Component/Home/Home';
import NotFound from './Component/NotFound/NotFound';
import PostDetails from './Component/PostDetails/PostDetails';
import Picture from './Component/Picture/Picture';



function App() {




  return (
    <div className="App">
       <Router>

<Switch>
  <Route  path="/Home">
    <Home></Home>
  </Route>
  <Route exact path="/Picture">
    <Picture></Picture>
  </Route>
  <Route exact path="/">
    <Home></Home>
  </Route>
  <Route exact path="/PostDetails/:postId">
    <PostDetails></PostDetails>
  </Route>
  <Route path="*">
    <NotFound></NotFound>
  </Route>
</Switch>

</Router>
     
    </div>
  );
}

export default App;
