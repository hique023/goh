import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './components/Login'
import Register from './components/Register'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Phase from './components/Phase'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/phase" component={Phase} />
                <Route component={NotFound} />
            </Switch>
        </BrowserRouter>
    )
}