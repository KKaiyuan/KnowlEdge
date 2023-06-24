// Reference Material: Tutorial Video at https://youtu.be/hEtZ040fsD8
// Adapted from https://github.com/WebDevSimplified/React-Flashcard-App/blob/master/src/Flashcard.js
// The indicated code snippet for displaying image is adapted from https://codingbeautydev.com/blog/react-link-image/
// HTML id Attribute Tutorial at https://www.w3schools.com/html/html_id.asp

// StackOverflow Answer #1 at https://stackoverflow.com/questions/71663356/how-to-set-the-value-of-input-from-state-react-app
// Code and Code Demo at https://codesandbox.io/s/trusting-swanson-1q0ftq

// StackOverflow Answer #1 at https://stackoverflow.com/questions/29715655/html-5-input-type-date-disable-keyboard-input to disable keyboard input

import React, { useState, useEffect, useRef } from 'react'
import DetailedView from './DetailedView'
import { useDispatch } from 'react-redux'
import { changeDefinition, changeDescription, changeImageURL, changeTerm, deleteFlashcard } from '../../actions'

export default function Flashcard({ flashcard }) {
    const [flip, setFlip] = useState(false)
    const [height, setHeight] = useState('initial')
    const [term, setTerm] = useState(flashcard.term)
    const [definition, setDefinition] = useState(flashcard.definition)

    // console.log("term state: ", term);

    const frontEl = useRef()
    const backEl = useRef()

    function setMaxHeight() {
        const frontHeight = frontEl.current.getBoundingClientRect().height
        const backHeight = backEl.current.getBoundingClientRect().height
        setHeight(Math.max(frontHeight, backHeight, 100))
    }

    useEffect(setMaxHeight, [flashcard.term, flashcard.definition, flashcard.description, flashcard.imageURL])
    useEffect(() => {
        window.addEventListener('resize', setMaxHeight)
        return () => window.removeEventListener('resize', setMaxHeight)
    }, [])


    const dispatch = useDispatch();

    // Referred to StackOverflow Answer #1 at https://stackoverflow.com/questions/71663356/how-to-set-the-value-of-input-from-state-react-app
    // Referred to Code and Code Demo at https://codesandbox.io/s/trusting-swanson-1q0ftq
    const handleSetTerm = (event) => {
        const value = event.target.value;
        setTerm(value);
        dispatch(changeTerm(flashcard.id, value)); // TODO: check
    };

    const handleSetDefinition = (event) => {
        const value = event.target.value;
        setDefinition(value);
        dispatch(changeDefinition(flashcard.id, value)); // TODO: check
    };

    const handleSetDescription = (event) => {
        const value = event.target.value;
        setTerm(value);
        dispatch(changeDescription(flashcard.id, value)); // TODO: check
    };

    const handleSetImageURL = (event) => {
        const value = event.target.value;
        setTerm(value);
        dispatch(changeImageURL(flashcard.id, value)); // TODO: check
    };


    return (
        <div
            // Referred to HTML id Attribute Tutorial at https://www.w3schools.com/html/html_id.asp
            id={`cardNo.${flashcard.id}`}
            className={`card ${flip ? 'flip' : ''}`}
            style={{ height: height }}
            onClick={() => setFlip(!flip)}
        >
            <div className="front" ref={frontEl}>
                <div className='cardID'>
                    Card No. {flashcard.id}
                </div>
                <div className="definition" onClick={(event) => { event.stopPropagation(); }}>
                    Definition: {/* {flashcard.definition} */}
                    {/* Referred to StackOverflow Answer #1 at https://stackoverflow.com/questions/71663356/how-to-set-the-value-of-input-from-state-react-app
                    Referred to Code and Code Demo at https://codesandbox.io/s/trusting-swanson-1q0ftq */}
                    {/* Referred to StackOverflow Answer #1 at https://stackoverflow.com/questions/29715655/html-5-input-type-date-disable-keyboard-input to disable keyboard input */}
                    <form className="definitionDisplayForm">
                        <input type="text" id="definitionDisplay" name="definitionDisplay"
                            onChange={handleSetDefinition} value={definition} /* onKeyDown={(e) => e.preventDefault()} */></input>
                    </form>
                </div>
                <div className="detailedView-front">
                    <DetailedView flashcard={flashcard} />
                </div>
            </div>
            <div className="back" ref={backEl}>
                <div className='cardID'>
                    Card No. {flashcard.id}
                </div>
                <div className="term" onClick={(event) => { event.stopPropagation(); }}>
                    Term: {/* {flashcard.term} */}
                    {/* Referred to StackOverflow Answer #1 at https://stackoverflow.com/questions/71663356/how-to-set-the-value-of-input-from-state-react-app
                    Referred to Code and Code Demo at https://codesandbox.io/s/trusting-swanson-1q0ftq */}
                    {/* Referred to StackOverflow Answer #1 at https://stackoverflow.com/questions/29715655/html-5-input-type-date-disable-keyboard-input to disable keyboard input */}
                    <form className="termDisplayForm">
                        <input type="text" id="termDisplay" name="termDisplay"
                            onChange={handleSetTerm} value={term} /* onKeyDown={(e) => e.preventDefault()} */></input>
                    </form>
                </div>
                <div className="detailedView-back">
                    <DetailedView flashcard={flashcard} />
                </div>
            </div>
        </div>
    )
}
