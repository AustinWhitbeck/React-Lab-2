import { useState } from 'react';
import  Post  from '../../model/Post';
import PostForm from '../PostForm/PostForm';
import PostInList from '../PostInList/PostInList';
import './SocialPosts.css';




function SocialPosts(){

    const [socialPosts, setSocialPosts] = useState<Post[]>([]);

    const [formVisible, setFormVisible] = useState(false);

    let hidden = '';

    if (formVisible) {
        hidden = 'socialForm';
    } else {
        hidden = 'hidden';
    }

    function handleAdd(socialPosts: Post){
        setSocialPosts( prevPosts => [
            ...prevPosts,
            socialPosts
        ])
        setFormVisible(false);
    }

    function handleDelete(index: number){
        setSocialPosts( prevPosts => [
            ...prevPosts.slice(0, index),
            ...prevPosts.slice(index+1)
        ])
    }

    function handleClose(){
        setFormVisible(false);
    }


   
    return(
        <section className="SocialPosts">
            <h1 className="PostsTitle">Brainstorm</h1>
            <button className="NewThoughtBtn" onClick={() => setFormVisible(!formVisible)}>New Thought</button>
            <div className={hidden}>
                <PostForm 
                onSubmit={ handleAdd }
                onClose={ handleClose }
                />
            </div>
            <div className="postsContainer">
                {socialPosts.map((post, index) => 
                <PostInList
                key={post.title}
                post={post}
                onDelete={() => handleDelete(index) }
                />
                )}
                
            </div>
        </section>
    )
}


export default SocialPosts;