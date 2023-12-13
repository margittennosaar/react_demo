import { useState, useEffect } from 'react';
import Post from '../components/Post';
import axios from 'axios';

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/notes')
      .then((res) => setPosts(res.data))
  }, []);

  return (
    <>
      <h1>Posts from the db.json</h1>
      <div className='posts'>
      {posts.map(post => <Post key={post.id} {...post}/>)}</div>
    </>
  );
}

export default Posts;
