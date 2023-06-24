import { styled } from 'styled-components';
import CardGeneric from './CardGeneric';
import profile_image from '../../assets/profile_img.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPenToSquare,
  faBell,
  faGear,
} from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const CardStyled = styled.div`
  width: 300px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 15px;

  &:hover {
    color: black;
  }

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

  .icon {
    cursor: pointer;
  }

  .icon:hover {
    color: #0074d9;
  }

  .margin-right {
    margin-right: 8px;
  }
`;

const StudentCard = CardGeneric(() => {
  const navigate = useNavigate();
  return (
    <CardStyled>
      <div className="rounded-container flex-item margin-right">
        <img src={profile_image}></img>
      </div>
      <div className="flex-item">
        <h2>Mirabel</h2>
      </div>
      <div className="flex-item icons-container">
        <FontAwesomeIcon
          icon={faPenToSquare}
          className="icon"
          onClick={() => navigate('/profile')}
        />
        <FontAwesomeIcon icon={faGear} className="icon" />
        <FontAwesomeIcon
          icon={faBell}
          className="icon"
          onClick={() => navigate('/announcements')}
        />
      </div>
    </CardStyled>
  );
});

export default StudentCard;
