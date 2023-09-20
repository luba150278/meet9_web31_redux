import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import styles from './Posts.module.css';

function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function getPosts() {
      const res = await axios.get('https://dummyjson.com/posts');
      setPosts(() => res.data.posts);
    }
    getPosts();
  }, []);
  return (
    <>
      <nav className={styles.nav}>
        <div className='container'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='posts'>Posts</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className='container'>
        {posts.length > 0 && (
          <div className={styles.wrap}>
            {posts.map((item) => {
              return (
                <Card key={item.id}>
                  <Card.Body>
                    <Card.Title><Link to={`/posts/${item.id}`}>{item.title}</Link></Card.Title>
                    <Card.Text>{item.body}</Card.Text>
                    {item.tags && item.tags.length > 0 && (
                      <div className='d-flex gap-10 align-items-center'>
                        {item.tags.map((tag) => (
                          <Card.Link key={tag} href='#'>
                            {tag}
                          </Card.Link>
                        ))}
                      </div>
                    )}
                  </Card.Body>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Posts;
