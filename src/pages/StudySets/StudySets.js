import './StudySets.css';
import InputForm from './InputForm';
import FlashcardList from './FlashcardList';

function StudySets() {
    return (
      // <h1>Hello World</h1>
      <div className="StudySets">
        <div className="HeaderAndInputForm">
          <header className="StudySets-header">
            <h1>Spécialités gastronomiques françaises</h1>
            {/* <h2>New Flashcards</h2> */}
            <div className="FlashcardsDisplay">
              <InputForm/>
            </div>
          </header>
        </div>
        <div className="studysets_container">
          <FlashcardList  />
        </div>
        <div>Footer - to be completed</div>
  
      </div>
    );
  }
  
  export default StudySets;