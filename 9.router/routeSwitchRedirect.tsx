// Import necessary modules from React and React Router
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// Import your components
import Home from './Home';
import About from './About';
import NotFound from './NotFound';

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
          {/* Redirect from old route to new route */}
          <Redirect from="/old-about" to="/about" />
          {/* Fallback route for 404 Not Found */}
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
