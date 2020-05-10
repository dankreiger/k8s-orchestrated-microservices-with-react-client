import React, { useState, useCallback } from 'react';
import axios from 'axios';

export default () => {
  const [title, setTitle] = useState('');

  const onSubmit = useCallback(
    async (event) => {
      event.preventDefault();
      await axios.post('http://posts.com/posts/create', {
        title,
      });
      setTitle('');
    },
    [title]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="post-create-title">Title</label>
          <input
            type="text"
            id="post-create-title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
