import './StudySets.css';
import InputForm from './InputForm';
import FlashcardList from './FlashcardList';

function StudySets() {
    return (
      // <h1>Hello World</h1>
      <div className="StudySets">
        <header className="StudySets-header">
          <h1>Spécialités gastronomiques françaises</h1>
          {/* <h2>New Flashcards</h2> */}
          <InputForm/>
        </header>
        <div className="studysets_container">
          <FlashcardList  />
        </div>
        <div>Footer - to be completed</div>
  
      </div>
    );
  }
  
  export default StudySets;