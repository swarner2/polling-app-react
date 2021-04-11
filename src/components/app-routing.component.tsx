import { List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { Link as RouterLink, Redirect, Route, Switch } from 'react-router-dom';
import { AddQuestion } from "./add-question.component";
import { Home } from './home.component';
import Leaderboard from './leaderboard-component';
import QuestionDetailPage from './question-detail/question-detail-page.component';

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
    'add': {
        id: 'add',
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
    return (           
        <Switch>
            { Object.values(routeConfig).map(route => (<Route key={route.id} exact path={route.path} component={route.component} />)) }
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
        </Switch>
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