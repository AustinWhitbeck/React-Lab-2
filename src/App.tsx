import React from 'react';
import './App.css';
import SocialPosts from './components/SocialPosts/SocialPosts';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {
  return (
    <div className="App">
      <SocialPosts/>
    </div>
    
  );
}

export default App;
