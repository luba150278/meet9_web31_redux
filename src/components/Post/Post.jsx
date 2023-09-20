import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function Post() {
  const { id } = useParams();
  const [post, setPost] = useState({
    id: '',
    title: '',
    body: '',
    tags: [],
    userId: '',
    reactions: 0,
  });
  useEffect(() => {
    async function getPost() {
      const res = await axios.get(`https://dummyjson.com/posts/${id}`);
      setPost(() => res.data);
    }
    getPost();
  }, [id]);
  return (
    <div className='container'>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
