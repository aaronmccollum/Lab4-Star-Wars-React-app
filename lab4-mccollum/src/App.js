// Importing images and App.css code
import lightsaber from './lightsaber.png';
import vader from './vader.svg';
import './App.css';

// Get the current date
const todayDate = new Date().toLocaleDateString();

// Component for the page
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={vader} className="App-logo" alt="Darth Vader crossing his arms in a menacing way" />
        <h1>Aaron's Star Wars App</h1>
        <p>I find your lack of Star Wars fandom disturbing.</p>
        <p>This is a React app created by Aaron for Lab 4 of the Darksaber Web Dev course.</p>
        <p>The date is {todayDate}</p>
        <p>Aaron is a big fan of Star Wars.</p>
        <img src={lightsaber} width="650px" height="auto" alt="The blue lightsaber of Obi Wan Kenobi"></img>
      </header>
    </div>
  );
}

export default App;
