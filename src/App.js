import WeatherDashboard from './Weather';
import './App.css';

function App() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log({baseUrl});
  return (
    <div className="App">
      <WeatherDashboard/>
    </div>
  );
}

export default App;
