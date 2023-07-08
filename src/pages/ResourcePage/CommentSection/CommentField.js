import { styled } from 'styled-components';
import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

const CommentFieldStyled = styled.div`
  padding: 25px;
  display: flex;

  .comment-input {
    border-radius: 15px;
    height: 125px;
    flex: 1;
    margin: 0 20px;
    padding: 20px;
    resize: none;
  }

  .icon-container {
    margin-top: 5px;
  }

  .send-button {
    border-radius: 15px;
    width: 75px;
    background-color: #0074d9;
    color: white;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    font-weight: bold;
  }
`;

const CommentField = ({ comment }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <CommentFieldStyled>
      <div className="icon-container">
        <FontAwesomeIcon
          className="student-icon"
          icon={faCircleUser}
          size="2xl"
        />
      </div>
      <textarea
        placeholder="Add a comment"
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="comment-input"
      />
      <button className="send-button">Send</button>
    </CommentFieldStyled>
  );
};

export default CommentField;
