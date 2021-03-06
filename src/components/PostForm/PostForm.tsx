import { FormEvent, useState } from "react";
import Post from "../../model/Post";
import './PostForm.css';
import { AiFillCloseCircle } from 'react-icons/ai';
import Modal from 'react-modal';

interface Props {
    onSubmit: (post: Post) => void;
    onClose: () => void;
}


function PostForm({onSubmit, onClose}: Props){

    const [title, setTitle] = useState('');

    const [thought, setThought] = useState('');

    function handleSubmit(e: FormEvent){
        e.preventDefault();
        onSubmit({
            title,
            thought
        })
        setTitle('');
        setThought('');
    }

    return(
        <div className="modalBackground">
            <form className="PostForm" action="submit" onSubmit={handleSubmit}>
                <div className="closeButtonContainer">
                    <button className="closeButton" onClick={() => onClose()}> <AiFillCloseCircle size={40}/> </button>
                </div>
                <div className="postFields">
                    <label className="form-labels" htmlFor="post-title">Title</label>
                    <input className="inputTitle" type="text" name="post-title" id="post-title" value={title} onChange={ (e) => setTitle(e.target.value) }/>
                </div>
                <div className="postFields">
                    <label className="form-labels" htmlFor="post-thought">Thought</label>
                    <input className="inputThought" type="text" name="post-thought" id="post-thought" value={thought} onChange={ (e) => setThought(e.target.value) }/>
                </div>
                <button className="addPostButton" type="submit">Add Post</button>
            </form>
        </div>
    )
}

export default PostForm;