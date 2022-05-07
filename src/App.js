import './App.css';
import React, { useState, useEffect } from 'react';
import { db } from './firebase.js';
import { collection, getDocs } from 'firebase/firestore';
import Post from './Post.js';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


function App() {
  // useState: create a variable that stores array
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);

  // useEffect: runs a piece of code based on a specific condition

  useEffect(() => {
    // this code runs everytime the page is refreshed and posts db is updated

    // Access the collection posts of the database
    const colRef = collection(db, 'posts')

    // Map all records each document of the collection posts
    getDocs(colRef)
      .then(
        (snapshot) => {
          // everytime time a post is added (db updated): get docs = content of the db
          snapshot.docs.map(
            ({ id, doc }) =>
              setPosts(snapshot.docs.map(doc => ({
                // doc data is all the properties (caption, username, urlImage)
                id: doc.id,
                post: doc.data(),
              })
              )
              ));
        })

  }, [])

  return (

    <div className="App">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
      </Modal>






      <div className="app__header">
        {/* Logo */}
        <img
          className="app__headerImage"
          src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
          alt="instagram logo"
        ></img>

      </div>

      <h1> Welcome to my first react app</h1>


      {/* Loop through all posts in the database*/}
      {
        posts.map(({ id, post }) => (
          <Post
            key={id}
            username={post.username}
            caption={post.caption}
            imageUrl={post.imageUrl}
          />
        ))
      }

      {/* Posts */}
      {/* Posts */}
    </div>
  );
}

export default App;
