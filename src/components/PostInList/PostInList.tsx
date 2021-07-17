import Post from "../../model/Post";
import './PostInList.css';
import { FaTrash } from 'react-icons/fa';



interface Props {
    post: Post;
    onDelete: () => void;
}

function PostInList({post, onDelete}: Props){

    return(
        <div className="PostInList">
            <div className="postThoughtContainer">
                <p>{post.title}</p>
                <p>{post.thought}</p>
            </div>
            <div className="trashBtnContainer">
                <button className="deleteButton" onClick={ onDelete }> <FaTrash size={20}/> </button>
            </div>
        </div>
    )
}


export default PostInList;