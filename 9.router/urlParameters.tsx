// Import necessary modules from React and React Router
import React from 'react';
import { BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom';

// Component to display user details
const UserDetail: React.FC = () => {
  // Access URL parameters
  const { id } = useParams<{ id: string }>();
  
  return (
    <div>
      <h2>User Detail</h2>
      <p>User ID: {id}</p>
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
          {/* Define route with URL parameter */}
          <Route path="/user/:id" component={UserDetail} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
