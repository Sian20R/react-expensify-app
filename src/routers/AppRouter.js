import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import HelpPage from '../components/Help';
import NotFoundPage from '../components/NotFound';
import ExpenseDashBoardPage from '../components/expense/Dashboard';
import NewExpensePage from '../components/expense/New';
import EditExpensePage from '../components/expense/Edit';


const AppRouter = () => (
    <BrowserRouter>
     <div>
       <Header />
       <Switch>
           <Route path="/" component={ExpenseDashBoardPage} exact={true}/>
           <Route path="/new" component={NewExpensePage} />
           <Route path="/edit/:id" component={EditExpensePage} />
           <Route path="/help" component={HelpPage} />
           <Route component={NotFoundPage} />
       </Switch> 
    </div>
   </BrowserRouter>
);
export default AppRouter;