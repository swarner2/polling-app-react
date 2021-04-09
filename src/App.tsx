import React from 'react';

import './App.css';
import { Login } from './components/login.component';



function App() {

  return (
    <div>
      <Login></Login>
    </div>

  );
}

export default App;


// function Avatar(props: {user: UserModel}) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarURL}
//       alt={props.user.name}
//     />
//   );