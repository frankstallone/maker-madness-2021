import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Code from './pages/Code';
import Give from './pages/Give';
import OYO from './pages/OYO';

import TakeNMake from './pages/TakeNMake';
import TakeMake01 from './pages/TakeMake/TakeMake01';
import TakeMake02 from './pages/TakeMake/TakeMake02';
import TakeMake03 from './pages/TakeMake/TakeMake03';
import TakeMake04 from './pages/TakeMake/TakeMake04';
import TakeMake05 from './pages/TakeMake/TakeMake05';
import TakeMake06 from './pages/TakeMake/TakeMake06';
import TakeMake07 from './pages/TakeMake/TakeMake07';
import TakeMake08 from './pages/TakeMake/TakeMake08';
import TakeMake09 from './pages/TakeMake/TakeMake09';
import TakeMake10 from './pages/TakeMake/TakeMake10';
import TakeMake11 from './pages/TakeMake/TakeMake11';
import OYO01 from './pages/OYO/OYO01';
import OYO02 from './pages/OYO/OYO02';
import OYO03 from './pages/OYO/OYO03';
import OYO04 from './pages/OYO/OYO04';
import OYO05 from './pages/OYO/OYO05';

// import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/code" component={Code} exact />
          <Route path="/give" component={Give} exact />
          <Route path="/takemake" component={TakeNMake} exact />
          <Route path="/oyo" component={OYO} exact />
          <Route path="/takemake01" component={TakeMake01} exact />
          <Route path="/takemake02" component={TakeMake02} exact />
          <Route path="/takemake03" component={TakeMake03} exact />
          <Route path="/takemake04" component={TakeMake04} exact />
          <Route path="/takemake05" component={TakeMake05} exact />
          <Route path="/takemake06" component={TakeMake06} exact />
          <Route path="/takemake07" component={TakeMake07} exact />
          <Route path="/takemake08" component={TakeMake08} exact />
          <Route path="/takemake09" component={TakeMake09} exact />
          <Route path="/takemake10" component={TakeMake10} exact />
          <Route path="/takemake11" component={TakeMake11} exact />
          <Route path="/oyo01" component={OYO01} exact />
          <Route path="/oyo02" component={OYO02} exact />
          <Route path="/oyo03" component={OYO03} exact />
          <Route path="/oyo04" component={OYO04} exact />
          <Route path="/oyo05" component={OYO05} exact />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
