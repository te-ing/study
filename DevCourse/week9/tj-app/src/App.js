import './App.css';
import Logo from './components/Logo';
import Paragraph from './components/Paragraph';

function App() {
  const name = '리액트'

  return (
    <div className="App">
      <header className="App-header">
        <Logo size={100} />
        <Logo />

        <Paragraph>
          Edit <code>src/App.js</code> and save to reload.
        </Paragraph>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn {name}
        </a>

      </header>
    </div>
  );
}

export default App;
