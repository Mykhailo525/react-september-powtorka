import  {Routes,Route} from "react-router-dom"
import {AlbumsPage, CommentsPage, HomePage, TodosPage} from "./pages";
import {MainLayout} from "./layouts";

const App = () => {
    return (
        <div>

    <Routes>

        <Route path={'/'} element={<MainLayout/>}>
        <Route path={'/'} element={<HomePage/>}/>
        <Route path={'todos'} element={<TodosPage/>}/>
        <Route path={'albums'} element={<AlbumsPage/>}/>
        <Route path={'comments'} element={<CommentsPage/>}/>
        </Route>

    </Routes>
        </div>
);
};

export {App};