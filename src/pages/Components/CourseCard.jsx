import { styled } from 'styled-components';
import CardGeneric from './CardGeneric';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/free-solid-svg-icons';

const CardStyled = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
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

const CourseCard = CardGeneric(({ title, onclickfn }) => {
  return (
    <CardStyled
      onClick={() => {
        const titleSlug = title.toLowerCase().replace(/\s+/g, '-');
        onclickfn(titleSlug);
      }}
    >
      <div>
        <div>
          <span>
            <FontAwesomeIcon icon={faClipboardList} size="lg" />
          </span>
          <h2>{title}</h2>
        </div>
      </div>
    </CardStyled>
  );
});

export default CourseCard;
