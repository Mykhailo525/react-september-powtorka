import {Users} from "./components";
import {UserForm} from "./components";
import {useEffect, useState} from "react";
import {userService} from "./services";

const App = () => {
    const [users,setUsers]=useState([])

    useEffect(()=>{userService.getAll().then(value => value.data).then(value => setUsers([...value]))},[])
  return (
      <div>
        <UserForm setUsers={setUsers}/>
          <hr/>
          <Users users={users}/>
      </div>
  );
};

export {App};