import { styled } from 'styled-components';
import CardGeneric from './CardGeneric';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

const CardStyled = styled.div`
  margin-top: 50px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5px;
  margin-bottom: 300px;
  justify-content: space-between;
  height: 270px;
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

const CourseCard = CardGeneric(() => {
  return (
    <CardStyled>
      <div>
        <div>
          <span>
            <FontAwesomeIcon icon={faClipboardList} size="lg" />
          </span>
          <h2>CPSC 310</h2>
        </div>
      </div>
    </CardStyled>
  );
});

export default CourseCard;
