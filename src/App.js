import  {Routes,Route} from "react-router-dom"
import React from "react";

import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, PostPage, TodosPage} from "./pages";
import {MainLayout} from "./layouts";


const App = () => {
    return (
        <div>

    <Routes>

        <Route path={'/'} element={<MainLayout/>}>
            <Route index element={<HomePage/>}/>
            <Route path={'todos'} element={<TodosPage/>}/>
            <Route path={'albums'} element={<AlbumsPage/>}/>
            <Route path={'comments'} element={<CommentsPage/>}>
            <Route path={':postId'} element={<PostPage/>}/>
            </Route>

            <Route path={'*'} element={<NotFoundPage/>}/>
        </Route>

    </Routes>

        </div>
);
};

export {App};