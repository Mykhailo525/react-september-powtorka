import {Post} from "../Post/Post";

const Posts = ({posts}) => {

    return (
        <div>
            {posts.map((post,index)=><Post key={index+1} post={post}/>)}
        </div>
    );
};

export {Posts};