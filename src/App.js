import './App.css';
import Timeline from "./components/Timeline/Timeline"
import Intro from './components/Intro/Intro';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';
import Credits from './components/Credits/Credits';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Events/>
      <Timeline/>
      <Footer/>
      <Credits/>
    </div>
  );
}

export default App;
