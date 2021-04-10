import React from 'react';

import './App.css';
import { Login } from './components/login.component';
import { Home } from './components/home.component'
import PersistentDrawerLeft from './components/persistent-drawer-left';


function App() {

  return (
    <div>
      <PersistentDrawerLeft></PersistentDrawerLeft>
      {/* <ButtonAppBar></ButtonAppBar>
      <Login></Login>
      <Home></Home> */}
    </div>

  );
}

export default App;


// function Avatar(props: {user: UserModel}) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarURL}
//       alt={props.user.name}
//   );
//     />\