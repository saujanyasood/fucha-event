import './App.css';
import Timeline from "./components/Intro/Timeline/Timeline"
import Navbar from './components/Navbar/Navbar';
import Sidebar from "./components/Sidebar/Sidebar"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sidebar/>
      <Timeline/>
    </div>
  );
}

export default App;
