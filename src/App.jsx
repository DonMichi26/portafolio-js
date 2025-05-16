import SliderbarLeft from './components/SliderbarLeft.jsx'; // Usa el nombre correcto
import SliderbarRight from './components/SliderbarRight.jsx'; // Usa el nombre correcto
import Hero from './components/Hero.jsx';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="main-content">
        <Hero /> 
      </div>
      
      <SliderbarLeft />
      <SliderbarRight />
    </div>
  );
}

export default App;