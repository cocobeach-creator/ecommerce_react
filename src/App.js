import React from 'react';
import {Switch, Route} from "react-router-dom";
import './App.css';
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shoppage/shoppage.component";
import Header from "./components/header/header.component";
import SignInPage from "./pages/signinpage/signinpage.component";


const HatsPage=() =>(
  <div>
    <h1>
      This is the hats page!
    </h1>
  </div>
)

function App() {
  return (
    <div>
    <Header/>
    <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/shop" component={ShopPage}/>
    <Route exact path="/signin" component={SignInPage} />
    </Switch>
    </div>
  );
}

export default App;
