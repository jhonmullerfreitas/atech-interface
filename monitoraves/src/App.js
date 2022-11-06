import './App.css';
import BasePage from './components/basepage';
import Home from './components/home';

function App() {
  return (
    <div className="App">
      <BasePage>
        <Home/>
      </BasePage>
    </div>
  );
}

export default App;
