import './StudySets.css';
import InputForm from './InputForm';
import FlashcardList from './FlashcardList';

function StudySets() {
    return (
      // <h1>Hello World</h1>
      <div className="StudySets">
        <header className="StudySets-header">
          <h1>Spécialités gastronomiques françaises</h1>
          <h2>New Flashcards</h2>
          <InputForm/>
        </header>
        <div className="container">
          <FlashcardList  />
        </div>
  
      </div>
    );
  }
  
  export default StudySets;