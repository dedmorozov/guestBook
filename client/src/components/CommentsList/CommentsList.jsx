import React from 'react';
import PropTypes from 'prop-types';

import './CommentsList.scss';
import { Comment } from '../Comment/Comment';

export const CommentsList = ({ comments, removeComment }) => (
  <>
    {comments.map(comment => (
      <Comment
        key={comment._id}
        removeComment={removeComment}
        {...comment}
      />
    ))}
  </>
);

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string,
      name: PropTypes.string.isRequired,
      message: PropTypes.string.isRequired,
    }),
  ),
  removeComment: PropTypes.func.isRequired,
};

CommentsList.defaultProps = {
  comments: [],
};
