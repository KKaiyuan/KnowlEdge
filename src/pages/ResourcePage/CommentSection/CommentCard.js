import { styled } from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAngleDown,
  faAngleUp,
  faCircleUser,
  faReply,
} from '@fortawesome/free-solid-svg-icons';

const CommentCardStyled = styled.div`
  padding: 25px;
  display: flex;
  flex-direction: row;
  cursor: default;

  .votes-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 20px;
  }

  .vote-icon {
    cursor: pointer;
  }

  .comment-header {
    display: flex;
    flex-direction: row;
    margin: 15px 0;
    justify-content: space-between;
  }

  .flex-div {
    display: flex;
    align-items: center;
  }

  .span-style {
    margin-left: 10px;
    font-weight: bold;
  }

  .reply-div {
    cursor: pointer;
  }

  .content-container {
    flex: 1;
  }

  .reply-to {
    color: #0074d9;
    margin-right: 5px;
    font-weight: bold;
  }
`;

const CommentCard = ({ comment }) => {
  return (
    <CommentCardStyled>
      <div className="votes-container">
        <FontAwesomeIcon icon={faAngleUp} className="vote-icon" />
        <span>{comment.upvotes}</span>
        <FontAwesomeIcon icon={faAngleDown} className="vote-icon" />
      </div>
      <div className="content-container">
        <div className="comment-header">
          <div className="commenter-details flex-div">
            <FontAwesomeIcon
              className="student-icon"
              icon={faCircleUser}
              size="lg"
            />
            <span className="span-style">{comment.sender}</span>
          </div>
          <div className="flex-div reply-div">
            <FontAwesomeIcon icon={faReply} />
            <span className="span-style">Reply</span>
          </div>
        </div>
        <div className="comment">
          {comment.reply_to ? (
            <span className="reply-to">{`@${comment.reply_to}`}</span>
          ) : (
            ''
          )}
          {comment.content}
        </div>
      </div>
    </CommentCardStyled>
  );
};

export default CommentCard;
