// Reference Material:
// Tutorial Video at https://youtu.be/hEtZ040fsD8
// Adapted from https://github.com/WebDevSimplified/React-Flashcard-App/blob/master/src/FlashcardList.js
// Danya's Sample Code at https://github.com/danyakarras/react-redux-button-counter-2022/blob/main/src/components/Button.js
// Tutorial of Keys at https://legacy.reactjs.org/docs/lists-and-keys.html (Unused)

import React from 'react'
import Flashcard from './Flashcard';

import { useSelector } from 'react-redux';

export default function FlashcardList() {
  const cards = useSelector((state) => state.flashcards);

  return (
    <div className="card-grid">
      {cards.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />
      })}
    </div>
  )
}
