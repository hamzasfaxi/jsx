
import './App.css';
import './style.css';



function App() {
  return (
    <div className="App" style={{border:"solid 1px black",maxWidth:"100vw"}}>
      <header className="App-header">
        <p>
          <h1 class="title">Tom Riddle</h1>
           <img src="/profile.js" alt="profile" />

        </p>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
