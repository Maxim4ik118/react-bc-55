import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { requestCommentsByPostId } from 'services/api';

const SearchComments = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [comments, setComments] = useState([]);

  const queryValue = searchParams.get('query');

  useEffect(() => {
    if (!queryValue) return;

    const fetchCommentsByPostId = async () => {
      try {
        const commentsData = await requestCommentsByPostId(queryValue);
        setComments(commentsData);
      } catch (err) {
        // ACHTUNG!!!!!!! ADD HANDLING EXCEPTIONS
      } finally {
        // ACHTUNG!!!!!!! ADD HANDLING EXCEPTIONS
      }
    };

    fetchCommentsByPostId();
  }, [queryValue]);

  const onSubmit = event => {
    event.preventDefault();

    const searchValue = event.target.children.search.value;
    setSearchParams({ query: searchValue });
  };

  return (
    <div>
      <h1>SearchComments</h1>
      <form onSubmit={onSubmit}>
        <input defaultValue={queryValue} type="text" name="search" required />
        <button type="submit">Search</button>
      </form>
      <ul>
        {comments?.length > 0 &&
          comments.map(comment => (
            <li key={comment.id}>
              <h3>{comment.email}</h3>
              <h4>{comment.name}</h4>
              <p>{comment.body}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchComments;
