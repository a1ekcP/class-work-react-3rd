import logo from './logo.svg';
import './App.css';
import Products from './components/Products';
import Container from 'react-bootstrap/Container';
import ContextTheme from './context/ContextTheme';
import { useState } from 'react';

function App() {
  const [theme, setTheme] = useState('bg-secondary');


  return (
    <ContextTheme.Provider value={{ theme, setTheme }}>
      <div className={`App ${theme}`}>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <Container>
            <Products/>
          </Container>
        </header>
      </div>
    </ContextTheme.Provider>
  );
}

export default App;
