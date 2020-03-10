import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import CatFacts from './pages/CatFacts';
import ExploreRepos from './pages/ExploreRepos';

export default function Routes() {
    return (
        <Router>
            <Route path="/cat-facts">
                <CatFacts />
            </Route>
            <Route path="/explore-repos">
                <ExploreRepos />
            </Route>
        </Router>
    )
}