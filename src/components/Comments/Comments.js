import {Component} from "react";
import {commentsService} from "../../services";
import {Comment} from "../Comment/Comment";

class Comments extends Component{
    constructor(props) {
        super(props);
        this.state={comments:[]}
    }

    componentDidMount() {
        commentsService.getAll().then(value => value.data).then(value => this.setState({comments:[...value]}))
    }

    render() {
        return(
            <div>
                {this.state.comments.map((comment,index)=><Comment key={index+1} comment={comment}/>)}
            </div>
        )
    }
}
export {Comments}