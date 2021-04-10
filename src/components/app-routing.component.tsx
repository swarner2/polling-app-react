import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { selectUserIsLoggedIn } from '../store/store';
import { Home } from './home.component';
import { Login } from './login.component';
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
    'addQuestion': {
        id: 'addQuestion',
        title: 'Add A Question',
        path: '/add',
        component: QuestionDetailPage // TO BE DEVELOPED
    },
    'leaderboard': {
        id: 'leaderboard',
        title: 'Leaderboard',
        path: '/leaderboard',
        component: QuestionDetailPage // TO BE DEVELOPED
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
                </Switch>
                : <Login></Login>
            }
        </div>
    )
}