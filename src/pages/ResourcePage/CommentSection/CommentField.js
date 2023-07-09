import { styled } from 'styled-components';
import React, { useEffect } from 'react';
import { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { addReplyTo } from '../redux/ResourcePageSlice';
import { addCommentAsync, fetchCommentsAsync } from '../redux/thunks';

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
    background-color: #374151;
    color: white;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: center;
    font-weight: bold;
  }

  .send-button:hover {
    background-color: #0074d9;
  }
`;

const CommentField = () => {
  const [inputValue, setInputValue] = useState('');

  const reply_to = useSelector((state) => state.resourcePageReducer.reply_to);
  const commentInputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (reply_to.person_name) {
      setInputValue(`@${reply_to.person_name} `);
    }

    commentInputRef.current.focus();
  }, [reply_to]);

  const handleChange = (event) => {
    const value = event.target.value;
    if (!value.includes(reply_to.person_name)) {
      dispatch(addReplyTo({}));
    }
    setInputValue(value);
  };

  const handleSubmit = () => {
    if (inputValue !== '') {
      const newInputValue = inputValue.replace(`@${reply_to.person_name} `, '');

      console.log(reply_to);
      // if it's not a reply
      if (reply_to.person_id === undefined) {
        dispatch(
          addCommentAsync({
            resourceId: '64a88e8fdfd1b5b12adba4aa',
            content: newInputValue,
            sender: '64a8de79980b0b6b6f40b10c',
          })
        );
      }
      // if it's a reply
      else {
        dispatch(
          addCommentAsync({
            resourceId: '64a88e8fdfd1b5b12adba4aa',
            content: newInputValue,
            sender: '64a8de79980b0b6b6f40b10c',
            reply_to: {
              person_id: reply_to.person_id,
              comment_id: reply_to.comment_id,
            },
          })
        );
      }
    }
    setInputValue('');
    // TODO: will need to add the resourcesID as a redux general state instead of calling it each time
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
        ref={commentInputRef}
        placeholder="Add a comment"
        type="text"
        value={inputValue}
        onChange={handleChange}
        className="comment-input"
      />
      <button className="send-button" onClick={handleSubmit}>
        Send
      </button>
    </CommentFieldStyled>
  );
};

export default CommentField;
