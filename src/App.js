import {useEffect, useState} from "react";

import {postService, userService} from "./services";
import {Posts, UserForm, Users} from "./components";
import {PostForm} from "./components";

const App = () => {

    const [users,setUsers]=useState([])
    const [posts,setPosts]=useState([])


    useEffect(()=>{postService.getAll().then(value => value.data).then(value => setPosts([...value]))},[])
    useEffect(()=>{userService.getAll().then(value => value.data).then(value => setUsers([...value]))},[])

  return (
      <div>
        <UserForm setUsers={setUsers}/>

          <hr/>

          <Users users={users}/>


          {/*<PostForm setPosts={setPosts}/>*/}

          {/*<hr/>*/}

          {/*<Posts posts={posts}/>*/}

      </div>
  );
};

export {App};