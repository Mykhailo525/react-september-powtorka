import {Component} from "react";
import {axiosService, postsService} from "../../services";
import {Post} from "../Post/Post";

class Posts extends Component{
    constructor(props) {
        super(props);
        this.state={posts:[]};
    }

    componentDidMount() {
        postsService.getAll().then(value => value.data).then(value => this.setState({posts:[...value]}))
    }


    render(){
        return(
            <div>
                {this.state.posts.map((post,index)=><Post key={index+1} post={post}/>)}
            </div>
        )

    }
}

export {
    Posts
}