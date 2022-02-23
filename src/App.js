import React, { useState } from 'react';
import UserTable from "./components/UserTable";
import { v4 as uuidv4 } from 'uuid';
import AddUserForm from "./components/AddUserForm";
import EditUserForm from './components/EditUserForm';


function App() {


  const usersData = [
    { id: uuidv4(), name: 'Tania', userName: 'floppydiskette' },
    { id: uuidv4(), name: 'Craig', userName: 'siliconeidolon' },
    { id: uuidv4(), name: 'Ben', userName: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)


  const addUser = (user) =>{
    user.id = uuidv4();
    setUsers([
      ...users, user
    ])
  }

  //eliminar usuarios
const deleteUser = (id) =>{
  //creo array con usuarions distintos a los del ide del param.
 setUsers(users.filter(user =>user.id !== id));
}

//estado usuario
const [currentUser, setCurrentUser] = useState({
  id: null, name:'', userName:''
});

const editRow = (user)=>{
  setEditing(true);
setCurrentUser({
  id: user.id, name: user.name, userName: user.userName
})
}

//actualizar usuario
const updateUser = (id,updateUser)=>{
  setEditing(false)

  setUsers(users.map(user=>(user.id === id? updateUser : user)))
}


const [editing, setEditing] = useState(false)

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          { editing? (
        <div> <h2>Add user</h2>
          <EditUserForm currentUser={currentUser}
          updateUser = {updateUser}
          /> </div>)
          :
          (
          <div><h2>Add user</h2>
          <AddUserForm addUser = {addUser}/>
          </div>)
          }
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} editRow={editRow}/>
        </div>
      </div>
    </div>
  );
}

export default App;
