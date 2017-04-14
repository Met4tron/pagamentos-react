import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'
import Dashboard from '../dashboard/dashboard'
import MoneyApp from '../moneyApp/moneyApp'

export default props => (
    <Router history={hashHistory} >
        <Route path='/' component={Dashboard} />
        <Route path='/billingCycles' component={MoneyApp} />
        <Redirect from='*' to='/' />
    </Router>
)