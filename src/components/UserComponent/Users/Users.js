import React, {useEffect, useState} from 'react';
import {userService} from "../../../services";
import {User} from "../User/User";


const Users = ({users}) => {


    return (
        <div>
            {users.map((user,index)=><User key={index+1} user={user}/>)}
        </div>
    );
};

export {Users};