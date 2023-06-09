import { styled } from 'styled-components';
import CardGeneric from './CardGeneric';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuildingColumns,
  faCode,
  faUser,
  faGraduationCap,
} from '@fortawesome/free-solid-svg-icons';

const CardStyled = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  margin-bottom: 20px;
  height: 100%;

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

const InformationCard = CardGeneric(() => {
  return (
    <CardStyled>
      <div>
        <span>
          <FontAwesomeIcon icon={faBuildingColumns} />
        </span>
        <h2>Faculty of Science</h2>
      </div>
      <div>
        <span>
          <FontAwesomeIcon icon={faCode} />
        </span>
        <h2>Computer Science</h2>
      </div>
      <div>
        <span>
          <FontAwesomeIcon icon={faUser} />
        </span>
        <h2>ID: 73849950</h2>
      </div>
      <div>
        <span>
          <FontAwesomeIcon icon={faGraduationCap} />
        </span>
        <h2>3rd Year Standing</h2>
      </div>
    </CardStyled>
  );
});

export default InformationCard;
