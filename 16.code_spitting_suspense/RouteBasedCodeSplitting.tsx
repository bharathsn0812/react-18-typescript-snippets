// RouteBasedCodeSplitting.tsx

import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

/*
Route-based Code Splitting:

Route-based code splitting allows you to load different parts of your application based on the route. This helps to load only the necessary code for a particular route, improving performance and user experience.
*/

const Home = React.lazy(() => import('./Home'));
const About = React.lazy(() => import('./About'));

const RouteBasedCodeSplitting: React.FC = () => {
    return (
        <Router>
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                </Switch>
            </Suspense>
        </Router>
    );
};

export default RouteBasedCodeSplitting;
