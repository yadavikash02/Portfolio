import './App.css';
import Header from './Component/Header';
import Intro from './Component/Intro/Intro';
import Showtime from './Component/Showtime';

function App() {
  return (
    <div className="App container">
      <Header></Header>
      <Intro></Intro>
      <Showtime></Showtime>
    </div>
  );
}

export default App;
