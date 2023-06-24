// Reference Materials:
// For splitting the webpage into left and right sections (each with scrollbar), referred to StackOverflow Answer #1 at https://stackoverflow.com/questions/71364923/html-split-page-vertically-in-two-halves-and-allow-individual-scrolling

import './FlashcardsPractice.css';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PracticeFlashcard from './PracticeFlashcard.js';
import { useNavigate } from 'react-router-dom';

export default function FlashcardsPractice() {
  const navigate = useNavigate();

  const cards = useSelector((state) => state.flashcards);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  // const dispatch = useDispatch();

  const handleButtonPrevious = () => {
    // console.log("Before: " + currentCardIndex);
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
    }
    // console.log("After: " + currentCardIndex); // TODO: check why currentCardIndex is not updated immediately here

    // TODO: show some animations
  };

  const handleButtonNext = () => {
    // console.log("Before: " + currentCardIndex);
    if (currentCardIndex < cards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
    }
    // console.log("After: " + currentCardIndex); // TODO: check why currentCardIndex is not updated immediately here
    // TODO: show some animations
  };

  // Referred to referred to StackOverflow Answer #1 at https://stackoverflow.com/questions/71364923/html-split-page-vertically-in-two-halves-and-allow-individual-scrolling
  return (
    <div className="FlashcardsPracticePage">
      <div className="FlashcardsPracticeHeader">
        <button
          className="FlashcardsPracticeGoBackButton"
          onClick={() => navigate('/studysets')}
        >
          Go Back
        </button>{' '}
        {/* TODO: figure how how to type the left arrow <-- in html */}
        <h1>Flashcards Practice</h1>
      </div>
      <div className="FlashcardsPracticeBody">
        <div className="FlashcardsPracticeCardDisplay">
          <PracticeFlashcard
            flashcard={cards.at(currentCardIndex)}
            key={currentCardIndex /* TODO: check this! */}
          />
        </div>
      </div>
      <div className="FlashcardsPracticeControlPanel">
        <button
          className="FlashcardsPracticeButtonPrevious"
          onClick={() => handleButtonPrevious()}
        >
          Previous
        </button>{' '}
        {/* TODO: figure how how to type the left arrow <-- in html */}
        <button
          className="FlashcardsPracticeButtonNext"
          onClick={() => handleButtonNext()}
        >
          Next
        </button>{' '}
        {/* TODO: figure how how to type the left arrow --> in html */}
      </div>
    </div>
  );
}
