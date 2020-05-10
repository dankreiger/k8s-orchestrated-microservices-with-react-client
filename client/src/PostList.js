import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default () => {
  const [posts, setPosts] = useState({});
  console.log({ posts });
  const fetchPosts = useCallback(async () => {
    const res = await axios.get('http://posts.com/posts');
    setPosts(res.data);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const renderedPosts = Object.values(posts).map(({ id, comments, title }) => (
    <div
      className="card"
      style={{ width: '30%', marginBottom: '20px' }}
      key={id}
    >
      <div className="card-body">
        <h3>{title}</h3>
        <CommentList comments={comments} />
        <CommentCreate postId={id} />
      </div>
    </div>
  ));
  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};
