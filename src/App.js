import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import './App.css';
import Post from './components/Post/Post';


function App() {
  
  const [posts, setPosts] = useState([]);

  useEffect ( ()=> {
    const url =`https://jsonplaceholder.typicode.com/posts`
    fetch (url)
    .then (res=> res.json())
    .then (data => setPosts(data))

  },[])
  return (
    <div>
     <h1> Post :{posts.length}</h1>

     {
       posts.map(post => <Post post = {post}>  </Post>)
     }
      
    <Button color="primary"> Hello World</Button>
      
    </div>
  );


}

export default App;
