import {Component} from 'react'
import './index.css'

// Write your code here
class Comments extends Component {
  render() {
    return (
      <div className="app-container">
        <div className="comments-app">
          <h1 className="comment-heading">Comments</h1>
          <div className="comments-add-section">
            <form className="form">
              <p className="comment-note">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                placeholder="Your Name"
                className="name-input"
              />
              <textarea placeholder="Your Comment" className="comment-input" />
              <button type="button" className="add-comment-btn">
                Add Comment
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
              alt="comments"
              className="image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Comments

