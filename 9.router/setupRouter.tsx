// Import necessary modules from React and React Router
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Import your components
import Home from './Home';
import About from './About';

// Main App component
const App: React.FC = () => {
  return (
    // Wrap the application with Router
    <Router>
      <div>
        <Switch>
          {/* Define routes for your application */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
