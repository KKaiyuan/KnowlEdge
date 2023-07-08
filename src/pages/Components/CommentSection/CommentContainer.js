import { styled } from 'styled-components';
import React from 'react';
import CommentCard from './CommentCard';

const ReplyCommentsStyled = styled.div`
  margin-left: 52px;
  border-left: 3px solid #eaecf1;
`;

const CommentContainer = () => {
  const comment = {
    sender: 'Loay Al Jahwari',
    content:
      'Thank you, instructor, for sharing this invaluable course resource. The organized presentation and supplementary materials have greatly enhanced my understanding of the subject, and your dedication to providing exceptional resources is truly appreciated.',
    replies: [
      {
        content: 'Yeah these are very helpul',
        sender: 'John Wrick',
        reply_to: 'Loay Al Jahwari',
      },
      {
        content: 'I like this, thank you!',
        sender: 'Adam Smith',
        reply_to: 'John Wrick',
      },
    ],
  };

  return (
    <div className="comment-container">
      <CommentCard comment={comment} />
      <ReplyCommentsStyled>
        {comment.replies.map((reply) => {
          return <CommentCard comment={reply} />;
        })}
      </ReplyCommentsStyled>
    </div>
  );
};

export default CommentContainer;
