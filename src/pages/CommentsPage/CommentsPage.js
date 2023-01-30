import React from 'react';
import {Outlet} from 'react-router-dom'


import {Comments} from "../../components";

const CommentsPage = () => {
    return (
        <div>
            <Outlet/>
            <h1>Comments</h1>
            <Comments/>
        </div>
    );
};


export {CommentsPage};