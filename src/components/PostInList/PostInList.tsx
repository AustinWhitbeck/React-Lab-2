import Post from "../../model/Post";
import './PostInList.css';
import { FaTrash,  } from 'react-icons/fa';
import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai';
import { useState } from "react";



interface Props {
    post: Post;
    onDelete: () => void;
}

function PostInList({post, onDelete}: Props){

    const [likeCount, setLikeCount] = useState(0);

    const [dislikeCount, setDislikeCount] = useState(0);

    return(
        <div className="PostInList">
            <section className="votePostContainer">
                <div className="upvoteContainer">
                    <div className="counterContainer">
                        <p>{likeCount}</p>
                        <p>{dislikeCount}</p>
                    </div>
                    <div className="likeDislikeContainer">
                        <button className="likesButtons" onClick={() => setLikeCount(likeCount + 1)}> <AiOutlineLike size={25}/> </button>
                        <button className="likesButtons" onClick={() => setDislikeCount(dislikeCount + 1)}> <AiOutlineDislike size={25}/></button>
                    </div>
                </div>
                <div className="postThoughtContainer">
                    <p className="userTitle">{post.title}</p>
                    <p className="userThought">{post.thought}</p>
                </div>
            </section>
            <div className="trashBtnContainer">
                <button className="deleteButton" onClick={ onDelete }> <FaTrash size={20}/> </button>
            </div>
        </div>
    )
}


export default PostInList;