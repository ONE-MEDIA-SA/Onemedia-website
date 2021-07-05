import { Header } from './components/header'
import { Section } from './components/section'
import { Clients } from './components/clients'
import { About } from './components/about'
 
function App() {
  return (
    <div>
      <Header />
      <Section />
      <main id="main">
        <Clients />
        <About />
      </main>
    </div>
  );
}

export default App;
