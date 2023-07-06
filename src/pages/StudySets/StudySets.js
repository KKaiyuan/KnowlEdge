import './StudySets.css';
import InputForm from './InputForm';
import FlashcardList from './FlashcardList';
import { useNavigate } from 'react-router-dom';

function StudySets() {
  const navigate = useNavigate();

  return (
    <div className="StudySets">
      <div className="StudySetsBody">
        <section className="StudySetsMainSection">
          <header className="StudySets-header">
            <button
              className="StudySetsGoBackButton"
              onClick={() => navigate('/')} // TODO: figure out how to go back to the page calling this StudySets page
            >
              Go Back
            </button>{' '}
            {/* TODO: figure how how to type the left arrow <-- in html */}

            <h1>Spécialités gastronomiques françaises</h1>
          </header>
          <div className="studysets_container">
            <FlashcardList />
          </div>
          <div>Footer - to be completed</div>
        </section>
        <section className="StudySetsSidePanelSection">
          <div className="SidePanel">
            <div className="InputForm">
              <InputForm />
            </div>
          </div>
          <div className="PracticeMenu">
            <div className="FlashcardsPractice">
              <button
                className="FlashcardsPracticeButton"
                onClick={() => navigate('/studysets/flashcards')}
              >
                Flashcards Practice
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default StudySets;
