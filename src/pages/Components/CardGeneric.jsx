import { styled } from 'styled-components';

const CardStyled = styled.div`
  background: #ffffff;
  box-shadow: 0px 5px 4px 3px rgba(0, 0, 0, 0.08);
  width: fit-content;
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
