import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route
            path="/facebook"
            component={() => {
            global.window && (global.window.location.href = 'https://www.facebook.com/profile.php?id=100008497029231');
            return null;
            }}
        />
        <Route
            path="/linkedin"
            component={() => {
            global.window && (global.window.location.href = 'https://www.linkedin.com/in/soumik-sen-a26647180/');
            return null;
            }}
        />
        <Route
            path="/github"
            component={() => {
            global.window && (global.window.location.href = 'https://github.com/insane2899');
            return null;
            }}
        />
        <Route
            path="/youtube"
            component={() => {
            global.window && (global.window.location.href = 'https://www.youtube.com/channel/UCqyNVjgDemXlc1wrRv3Br6g?view_as=subscriber');
            return null;
            }}
        />
      </Switch>
    <Footer/>
    </Router>
  );
}

export default App;
