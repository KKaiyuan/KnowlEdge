import { styled } from 'styled-components';

const CardStyled = styled.div`
  background: #ffffff;
  box-shadow: 1px 1px 4px 4px rgba(0, 0, 0, 0.06);
  width: fit-content;

  &:hover {
    cursor: pointer;
    color: #0074d9;
  }
`;

const CardGeneric = (Content) => {
  return function CardGeneric(props) {
    return (
      <CardStyled>
        <Content {...props} />
      </CardStyled>
    );
  };
};

export default CardGeneric;
