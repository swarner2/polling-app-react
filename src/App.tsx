import React from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Layout from './components/layout.component';
import { Login } from './components/login.component';
import { selectUserIsLoggedIn } from './store/store';



function App() {
  const isUserLoggedIn = useSelector(selectUserIsLoggedIn)

  return (
    <div>
      {
        isUserLoggedIn 
        ? <Layout></Layout>
        : <Login></Login>
      }
    </div>
  );
}

export default App;
