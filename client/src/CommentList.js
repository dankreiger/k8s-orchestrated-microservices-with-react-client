import React from 'react';

export default ({ comments }) => {
  const renderedComments = Object.values(comments).map(
    ({ id, content, status }) => {
      let renderedContent;
      if (status === 'approved') {
        renderedContent = content;
      }
      if (status === 'pending') {
        renderedContent = 'This comment is awaiting moderation';
      }
      if (status === 'rejected') {
        renderedContent = 'This comment has been rejected';
      }
      return (
        <li style={{ width: '100%', marginBottom: '20px' }} key={id}>
          {renderedContent}
        </li>
      );
    }
  );
  return <ul>{renderedComments}</ul>;
};
