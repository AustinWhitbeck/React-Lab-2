import { useState } from 'react';
import  Post  from '../../model/Post';
import PostForm from '../PostForm/PostForm';
import PostInList from '../PostInList/PostInList';
import './SocialPosts.css';
import Modal from 'react-modal';


const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#79c5e8',
      borderRadius: '20px',
      padding: '30px'
    },
  };


function SocialPosts(){

    const [socialPosts, setSocialPosts] = useState<Post[]>([]);

    const [formVisible, setFormVisible] = useState(false);


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
            <button className="NewThoughtBtn" onClick={() => setFormVisible(true)}>New Thought</button>
            {/* <div className={hidden}> */}
            
            <Modal isOpen={formVisible} style={customStyles} onRequestClose={() => setFormVisible(false)}>
                <PostForm 
                onSubmit={ handleAdd }
                onClose={ handleClose }
                />
            </Modal>
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