// Reference Materials:
// Tutorial at https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog (Unused)
// Tutorial at https://www.lambdatest.com/blog/html-dialog-element/ (Unused)
// Tutorial Sample Code at https://codepen.io/Sampurna/pen/vYRZPZa (Unused)

// Youtube Video at https://youtu.be/sSlwy7WRLTU
// Github Repository at https://github.com/thefaiz/react-dialog 
// Code Adapted from https://github.com/thefaiz/react-dialog/blob/master/src/App.js

// StackOverflow Answer #1 "Handle it on the edit control" at https://stackoverflow.com/questions/70861330/exclude-child-components-from-div-onclick

import React, { useState } from 'react'
import Dialog from './Dialog';

export default function DetailedView({ flashcard }) {
    const [isOpen, setIsOpen] = useState(false)

    // const [description, setDescription] = useState(flashcard.description)
    // const [imageURL, setImageURL] = useState(flashcard.imageURL)

    return (
        // Referred to StackOverflow Answer #1 "Handle it on the edit control" at https://stackoverflow.com/questions/70861330/exclude-child-components-from-div-onclick
        <div className="dialogBox" onClick={(event) => { event.stopPropagation(); }}>
            <button className="showDetailsButton" onClick={(e) => setIsOpen(true)}>Show Details</button>
            <Dialog isOpen={isOpen} onClose={(e) => setIsOpen(false)}>
                <div className="description">
                    {flashcard.description}
                </div>

                {/* The following code snippet for displaying image is adapted from https://codingbeautydev.com/blog/react-link-image/ */}
                <div className="description">
                    {/* 👇 show remote image */}
                    <img
                        src={flashcard.imageURL}
                        alt="Image not available :("
                        width="200"
                    />
                </div>
            </Dialog>
        </div>
    )
}