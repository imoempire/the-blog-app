import Navbar from './Component/Navbar';
import Home from './Component/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
     <div className="content">
       <Home />
     </div>
     </div>
  );
}

export default App;
