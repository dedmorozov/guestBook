import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewComment.scss';

const initialState = {
  newComment: {
    imgUrl: '',
    name: '',
    message: '',
  },
};

export class NewComment extends Component {
  state = { ...initialState.newComment };

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { addComment } = this.props;
    const newComment = this.state;

    addComment(newComment);

    this.setState({ ...initialState.newComment });
  }

  render() {
    const {
      imgUrl,
      name,
      message,
    } = this.state;

    const { handleChange, handleSubmit } = this;

    return (
      <form onSubmit={handleSubmit} className="form">
        <h2>Оставьте комментарий</h2>
        <div>
          <label>
            <input
              type="text"
              name="name"
              placeholder="Введите имя"
              value={name}
              onChange={handleChange}
              autoComplete="off"
              required
              className="form__input"
            />
          </label>

          <label>
            <input
              name="imgUrl"
              type="url"
              placeholder="Вставьте ссылку на аватар (необязательно)"
              value={imgUrl}
              onChange={handleChange}
              autoComplete="off"
              className="form__input"
            />
          </label>
        </div>

        <div>
          <label>
            <textarea
              type="text"
              name="message"
              placeholder="Поделитесь своими мыслями"
              value={message}
              onChange={handleChange}
              autoComplete="off"
              rows="6"
              required
              className="form__input"
            />
          </label>
        </div>

        <div>
          <button type="submit" className="form__button">
            Отправить
          </button>
        </div>
      </form>
    );
  }
}

NewComment.propTypes = {
  addComment: PropTypes.func.isRequired,
};
