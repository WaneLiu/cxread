import {Switch, Router, Route,} from 'react-router-dom'
import React from 'react'
import RankPage from '../components/rankPage';
import BookNavBar from '../components/common/common-modules/BookNavBar';
import history from './history';
import Read from '../components/readPage';
const router = () => (
    <Router history={history}>
        <Switch>
            <Route exact path="/" component={BookNavBar}/>
            <Route exact path="/bookshelves" component={BookNavBar} />
            <Route exact path="/recommend" component={BookNavBar} />
            <Route exact path="/rank" component={BookNavBar} />
            <Route exact path="/my" component={BookNavBar} />
            <Route exact path="/search" component={BookNavBar} />
            <Route exact path="/book" component={BookNavBar} /> 
            <Route exact path="/ranklist" component={RankPage}/>
            <Route exact path="/read" component={Read} />
        </Switch>
    </Router>
)
export default router