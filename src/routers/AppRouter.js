import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import EditExpensePage from '../components/EditExpensePage'
import HelpExpensePage from '../components/HelpPage'
import AddExpensePage from '../components/AddExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import LoginPage from '../components/LoginPage'
import PrivateRoute from '../routers/PrivateRoute'

export const history = createBrowserHistory()


const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>  
        </div>
        
    </Router>
)

export default AppRouter