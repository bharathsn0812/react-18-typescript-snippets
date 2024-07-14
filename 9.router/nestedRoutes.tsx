// Import necessary modules from React and React Router
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useRouteMatch } from 'react-router-dom';

// Components for nested routes
const Topic1: React.FC = () => <div>Topic 1 Content</div>;
const Topic2: React.FC = () => <div>Topic 2 Content</div>;

// Topics component containing nested routes
const Topics: React.FC = () => {
  // Get the current route match
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/topic1`}>Topic 1</Link>
        </li>
        <li>
          <Link to={`${url}/topic2`}>Topic 2</Link>
        </li>
      </ul>

      <Switch>
        {/* Define nested routes */}
        <Route path={`${path}/topic1`} component={Topic1} />
        <Route path={`${path}/topic2`} component={Topic2} />
      </Switch>
    </div>
  );
};

// Main App component
const App: React.FC = () => {
  return (
    // Wrap the application with Router
    <Router>
      <div>
        <Switch>
          <Route path="/topics" component={Topics} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
