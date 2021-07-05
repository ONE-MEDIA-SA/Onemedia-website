import { Header } from './components/header'
import { Section } from './components/section'
import { Clients } from './components/clients'
import { About } from './components/about'
import { Service } from './components/service'
import { Tab } from './components/tab'
import { Portfolio } from './components/portfolio'
import { Contact } from './components/contact'
import { Footer } from './components/footer'

import FloatingWhatsApp from 'react-floating-whatsapp'
import 'react-floating-whatsapp/dist/index.css'

  
function App() {
  return (
    <>
      <Header />
      <Section />
      <main id="main">
        <Clients />
        <About />
        <Tab />
        <Service />
        <Contact />
        <Footer />
       

       
     {/* <FloatingWhatsApp phoneNumber={843655568} accountName={"Onemedia"}/> */}
        

      </main>
      
    </>
  );
}

export default App;
