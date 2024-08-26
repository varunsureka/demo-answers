import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useLocation } from 'react-router-dom';
import Encrypt from './components/Encrypt';

function App() {
  useEffect(() => {
    document.title = 'React UI Testing';
  }, []);

  return (
    <Router>
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>React UI Form</h1>
        <Switch>
          <Route path="/encrypt" component={Encrypt} />
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  const location = useLocation();

   return (
    <Link to="/encrypt" style={{ textDecoration: 'none', 
      marginTop: '20px', 
      padding: '10px 20px', 
      color: 'white', 
      borderRadius: '5px',
      backgroundColor: 'blue'
    }} 
    data-testid="encryption-button">
          Click this
      </Link>
  );
}

export default App;
