// Reference Material:
// Tutorial Video at https://youtu.be/hEtZ040fsD8
// Tutorial Video at https://youtu.be/0UNNThVWXr0
// Danya's Sample Code at https://github.com/danyakarras/react-redux-button-counter-2022/blob/main/src/App.js

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import InputForm from './components/InputForm';
import FlashcardList from './components/FlashcardList';


function App() {
  return (
    // <h1>Hello World</h1>
    <div className="App">
      <header className="App-header">
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

export default App;