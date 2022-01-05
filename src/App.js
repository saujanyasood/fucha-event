import './App.css';
import Timeline from "./components/Timeline/Timeline"
import Intro from './components/Intro/Intro';
import Events from './components/Events/Events';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Intro/>
      <Events/>
      <Timeline/>
      <Footer/>
    </div>
  );
}

export default App;
