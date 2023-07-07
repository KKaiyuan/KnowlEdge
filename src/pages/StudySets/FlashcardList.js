// Reference Material:
// Tutorial Video at https://youtu.be/hEtZ040fsD8
// Adapted from https://github.com/WebDevSimplified/React-Flashcard-App/blob/master/src/FlashcardList.js
// Danya's Sample Code at https://github.com/danyakarras/react-redux-button-counter-2022/blob/main/src/components/Button.js
// Tutorial of Keys at https://legacy.reactjs.org/docs/lists-and-keys.html (Unused)

import React from 'react'
import Flashcard from './Flashcard';

import { useDispatch, useSelector } from 'react-redux';
import { getFlashcardsAsync } from './redux/StudySetsThunks';
import { useEffect } from 'react';

export default function FlashcardList() {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.flashcards.list);

  useEffect(() => {
    dispatch(getFlashcardsAsync());
  }, [dispatch]);

  return (
    <div className="card-grid">
      {cards.map(flashcard => {
        return <Flashcard flashcard={flashcard} key={flashcard.id} />
      })}
    </div>
  )
}
