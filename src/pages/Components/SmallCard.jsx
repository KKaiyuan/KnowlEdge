import { styled } from 'styled-components';
import CardGeneric from './CardGeneric';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBook,
  faSquarePollVertical,
} from '@fortawesome/free-solid-svg-icons';

const CardStyled = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  height: 60px;
  justify-content: center;
  margin-bottom: 20px;

  div {
    display: flex;
    width: 100%;
  }

  h2 {
    flex: 2;
    text-align: left;
    font-weight: bold;
  }

  span {
    width: 50px;
  }
`;

const SmallCard = CardGeneric(({ type, title }) => {
  return (
    <CardStyled>
      <div>
        <div>
          <span>
            <FontAwesomeIcon
              icon={type === 'study-set' ? faBook : faSquarePollVertical}
              size="lg"
            />
          </span>
          <h2>{title}</h2>
        </div>
      </div>
    </CardStyled>
  );
});

export default SmallCard;
