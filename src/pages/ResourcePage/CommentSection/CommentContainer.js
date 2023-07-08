import { styled } from 'styled-components';
import React from 'react';
import CommentCard from './CommentCard';
import { fetchCommentsAsync } from '../redux/thunks';

import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ReplyCommentsStyled = styled.div`
  margin-left: 52px;
  border-left: 3px solid #eaecf1;
`;

const CommentContainer = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCommentsAsync('64a88e8fdfd1b5b12adba4aa'));
  }, [dispatch]);

  const comments = useSelector((state) => state.resourcePageReducer.comments);

  return (
    <div className="comment-container">
      {comments.map((comment, index) => {
        return (
          <React.Fragment key={index}>
            <CommentCard comment={comment} />

            <ReplyCommentsStyled>
              {comment.replies?.map((reply, replyIndex) => {
                return (
                  <CommentCard key={`${index}-${replyIndex}`} comment={reply} />
                );
              })}
            </ReplyCommentsStyled>
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default CommentContainer;
