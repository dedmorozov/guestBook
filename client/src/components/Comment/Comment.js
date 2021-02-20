import React from 'react';
import PropTypes from 'prop-types';
import './Comment.scss';

// eslint-disable-next-line max-len
const removeImgUrl = 'https://icons-for-free.com/iconfiles/png/128/delete+remove+trash+trash+bin+trash+can+icon-1320073117929397588.png';

export const Comment = (props) => {
  const defaultImgUrl = 'https://socpartnerstvo.org/img/avatar_male.png';
  const {
    imgUrl,
    name,
    message,
    _id,
    removeComment,
  } = props;

  return (
    <div className="comment">
      <figure className="comment__img">
        <img
          src={imgUrl || defaultImgUrl}
          alt="User avatar"
        />
      </figure>

      <div className="comment__content">
        <div className="comment__name">
          <h3>{name}</h3>
        </div>

        <div className="comment__message">
          <p>{message}</p>
        </div>

        <div className="comment__id">
          <h6>
            #
            {_id}
          </h6>
        </div>
        <button
          className="comment__remove remove"
          type="button"
          onClick={() => {
            removeComment(_id);
          }}
        >
          <img
            className="remove__img"
            src={removeImgUrl}
            alt="remove"
          />
        </button>
      </div>
    </div>
  );
};

Comment.propTypes = {
  _id: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  removeComment: PropTypes.func.isRequired,
};
