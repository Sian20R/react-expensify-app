import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
const createHistory = require("history").createBrowserHistory;

import NotFoundPage from '../components/NotFound';
import LoginPage from '../components/Login';
import ExpenseDashBoardPage from '../components/expense/Dashboard';
import NewExpensePage from '../components/expense/New';
import EditExpensePage from '../components/expense/Edit';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
     <div>
       <Switch>
           <PublicRoute path="/" component={LoginPage} exact={true}/>
           <PrivateRoute path="/dashboard" component={ExpenseDashBoardPage}/>
           <PrivateRoute path="/new" component={NewExpensePage} />
           <PrivateRoute path="/edit/:id" component={EditExpensePage} />
           <Route component={NotFoundPage} />
       </Switch> 
    </div>
   </Router>
);
export default AppRouter;