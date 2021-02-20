import React, { Component } from 'react';
import { CommentsList } from './components/CommentsList/CommentsList';
import { NewComment } from './components/NewComment/NewComment';
import { Arrow } from './components/Arrow/Arrow';
import './App.scss';

export class App extends Component {
  state = {
    comments: [],
  };

  componentDidMount = async() => {
    const comments = await this.loadComments();

    this.setState({ comments });
  }

  loadComments = async() => {
    const response = await fetch('http://localhost:4000/books');

    return response.json();
  }

  loadToServer = async(comment) => {
    const response = await fetch('http://localhost:4000/books/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comment),
    });

    return response.json();
  }

  addComment = async(comment) => {
    const instance = await this.loadToServer(comment);

    this.setState(prevState => ({
      comments: [...prevState.comments, instance],
    }));
  };

  removeComment = async(id) => {
    const URL = `http://localhost:4000/books/${id}`;

    await fetch(URL, { method: 'DELETE' });

    this.setState(({ comments }) => ({
      comments: comments.filter(comment => comment._id !== id),
    }));
  }

  render() {
    const { comments } = this.state;

    return (
      <div className="app">
        <div className="app__comments comments">
          <CommentsList
            comments={comments}
            removeComment={this.removeComment}
          />
        </div>

        <div className="app__form">
          <NewComment addComment={this.addComment} />
        </div>

        <Arrow />
      </div>
    );
  }
}
