import { Header } from './components/header'
import { Section } from './components/section'
import { Clients } from './components/clients'
import { About } from './components/about'
import { Service } from './components/service'
import { Tab } from './components/tab'
import { Portfolio } from './components/portfolio'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { RequestBudget } from './components/request_budget'
  
function App() {
  return (
   <Router>
      <>
      <Header />
      <Switch>
        <Route exact path="/">
          <Section />
          <main id="main">  
            <Clients />
            <About />
            <Tab />
            <Service />
            <Contact />
          </main>
        </Route>
        <Route path="/request_budget">
          <RequestBudget />
        </Route>
      </Switch>
      <Footer />
    </>
   </Router>
  );
}

export default App;
