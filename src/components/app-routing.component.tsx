import { List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { selectUserIsLoggedIn } from '../store/store';
import { Home } from './home.component';
import { Login } from './login.component';
import QuestionDetailPage from './question-detail/question-detail-page.component';
import { Link as RouterLink } from 'react-router-dom';
import { Leaderboard } from './leaderboard-component';
import { AddQuestion } from "./add-question.component";

export const routeConfig = {
    'home': {
        id: 'home',
        title: 'Home',
        path: '/home',
        component: Home
    },
    'questions': {
        id: 'questions',
        title: 'Question Details',
        path: '/questions/:id',
        component: QuestionDetailPage
    },
    'addQuestion': {
        id: 'addQuestion',
        title: 'Add A Question',
        path: '/add',
        component: AddQuestion 
    },
    'leaderboard': {
        id: 'leaderboard',
        title: 'Leaderboard',
        path: '/leaderboard',
        component: Leaderboard
    }
}

export function AppRouting() {
    const userIsLoggedIn = useSelector(selectUserIsLoggedIn)

    return (           
        <div>
            {
            userIsLoggedIn 
                ? 
                <Switch>
                    { Object.values(routeConfig).map(route => (<Route key={route.id} exact path={route.path} component={route.component} />)) }
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                </Switch>
                : <Login></Login>
            }
        </div>
    )
}

export function AppMenu() {
    return (
        <List>
          {Object.values(routeConfig).filter(route => route.id !== 'questions').map((route, index) => {
            return (
            <ListItem button key={route.id} component={RouterLink} to={route.path}>
              {/* TODO :: add icons to routes */}
              {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon > : <MailIcon />}</ListItemIcon> */}
              <ListItemText primary={route.title} />
            </ListItem>
          )}
          )}
        </List>
    )
}