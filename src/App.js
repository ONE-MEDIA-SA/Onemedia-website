import { Header } from './components/header'
import { Section } from './components/section'
import { Clients } from './components/clients'
 
function App() {
  return (
    <div>
      <Header />
      <Section />
      <main id="main">
        <Clients />
      </main>
    </div>
  );
}

export default App;
