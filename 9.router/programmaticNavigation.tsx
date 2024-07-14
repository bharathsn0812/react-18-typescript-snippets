// Import necessary modules from React and React Router
import React from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';

// Home component with a button to navigate programmatically
const Home: React.FC = () => {
  // Get history object from React Router
  const history = useHistory();

  const navigateToAbout = () => {
    // Programmatically navigate to the About page
    history.push('/about');
  };

  return (
    <div>
      <h2>Home</h2>
      <button onClick={navigateToAbout}>Go to About</button>
    </div>
  );
};

// About component
const About: React.FC = () => <div>About Page</div>;

// Main App component
const App: React.FC = () => {
  return (
    // Wrap the application with Router
    <Router>
      <div>
        <Switch>
          {/* Define routes */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
