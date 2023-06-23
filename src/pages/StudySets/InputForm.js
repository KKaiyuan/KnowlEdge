// Reference Materials:
// Tutorial at https://legacy.reactjs.org/docs/forms.html
// Tutorial at https://iamtimsmith.com/blog/this-state-how-to-use-state-in-react/
// StackOverflow Answer at https://stackoverflow.com/questions/69965343/convert-react-class-based-to-functional-component
// Workshop Slide 73 at https://docs.google.com/presentation/d/14cxSbCLjkmi-cqKBPzijMa4JBS5GB2Rj_OEdhg5RJIE/edit#slide=id.g12ec8e645a1_0_82
// StackOverflow Answer at https://stackoverflow.com/questions/66813084/how-to-pass-in-the-state-to-the-dispatch-action-if-using-usestate-instead-of-thi
// Danya's Sample Code at https://github.com/danyakarras/react-redux-button-counter-2022/blob/main/src/components/Button.js
// StackOverflow Answer #1 / Method 5 at https://stackoverflow.com/questions/11563638/how-do-i-get-the-value-of-text-input-field-using-javascript
// React docs at https://react.dev/reference/react-dom/components/input#reading-the-input-values-when-submitting-a-form
// StackOverflow Answer #1 at https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object

import React from 'react';
import { addFlashcard, increment } from '../../actions/index.js';
import { useDispatch, useSelector } from 'react-redux';

export default function InputForm() {
    const index = useSelector(state => state.indexCount);

    const dispatch = useDispatch();


    const handleSubmit = (event) => {

        // Prevent the browser from reloading the page
        event.preventDefault();

        // React docs at https://react.dev/reference/react-dom/components/input#reading-the-input-values-when-submitting-a-form
        // Read the form data
        const form = event.target;
        const formData = new FormData(form);

        // // You can pass formData as a fetch body directly:
        // fetch('/some-api', { method: form.method, body: formData });

        // Or you can work with it as a plain object:
        const newFlashcard /* formJson */ = Object.fromEntries(formData.entries());
        // console.log(formJson);

        dispatch(increment(1));

        // Referred to StackOverflow Answer #1 at https://stackoverflow.com/questions/1168807/how-can-i-add-a-key-value-pair-to-a-javascript-object
        // Referred to the code to set the id at https://github.com/WebDevSimplified/React-Flashcard-App/blob/master/src/App.js
        newFlashcard["id"] = index + 1; // TODO: check why index at this point is always one less than the intended ID

        dispatch(addFlashcard(newFlashcard));
    }

    return (
        <form className="header" onSubmit={handleSubmit}>
            <h2>New Flashcards</h2>
            <div className="form-group">
                <label>
                    Term: <input type="text" id="term" name="term" placeholder="Please enter term..." />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Definition: <input type="text" id="definition" name="definition" placeholder="Please enter definition..." />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Description: <input type="text" id="description" name="description" placeholder="Please enter description..." />
                </label>
            </div>
            <div className="form-group">
                <label>
                    Image URL: <input type="url" id="imageURL" name="imageURL" placeholder="Please enter image url..." />
                </label>
            </div>

            <input type="submit" className='btn' value="Submit" />
            <input type="reset" className='btn' value="Reset" />

            {/* Another way for the html code for the buttons: */}
            {/* <button type="submit" className='btn'>Submit</button>
            <button type="reset" className='btn'>Reset</button> */}
        </form>
    );

}
