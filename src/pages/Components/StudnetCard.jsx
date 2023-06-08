import { styled } from 'styled-components';
import CardGeneric from './CardGeneric';
import profile_image from '../../assets/profile_img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faBell,
  faGear,
} from '@fortawesome/free-solid-svg-icons';

const CardStyled = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;

  img {
    width: 100%;
    height: 100%;
  }

  div {
    width: 100%;
  }

  .rounded-container {
    border-radius: 50%;
    overflow: hidden;
    width: fit-content;
    display: flex;
    justify-content: center;
  }

  .flex-item {
    flex: auto;
  }

  h2 {
    font-size: large;
    font-weight: bold;
  }

  .icons-container {
    display: flex;
    justify-content: space-around;
    padding: 3px;
  }
`;

const StudentCard = CardGeneric(() => {
  return (
    <CardStyled>
      <div className="rounded-container flex-item">
        <img src={profile_image}></img>
      </div>
      <div className="flex-item">
        <h2>Mirabel</h2>
      </div>
      <div className="flex-item icons-container">
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faGear} />
        <FontAwesomeIcon icon={faBell} />
      </div>
    </CardStyled>
  );
});

export default StudentCard;
