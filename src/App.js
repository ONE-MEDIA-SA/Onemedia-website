import { Header } from './components/header'
import { Section } from './components/section'
import { Clients } from './components/clients'
import { About } from './components/about'
import { Service } from './components/service'
import { Tab } from './components/tab'
import { Portfolio } from './components/portfolio'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
  
function App() {
  return (
    <div>
      <Header />
      <Section />
      <main id="main">
        <Clients />
        <About />
        <Tab />
        <Service />
        <Contact />
        <Footer/>
        

      </main>
    </div>
  );
}

export default App;
