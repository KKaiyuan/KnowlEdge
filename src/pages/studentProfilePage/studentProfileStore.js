// import { createStore } from 'redux';

// const initialState = {
//     preferredName: "Bob Jones",
//     faculty: "Science",
//     major: "Computer Science",
//     image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/800px-Twemoji_1f600.svg.png",
//     contact: "bob.jones@gmail.com",
//     aboutMe: `October arrived, spreading a damp chill over the grounds and into the castle. Madam Pomfrey, the nurse, was kept busy by a sudden spate of colds among the staff and students. Her Pepperup potion worked instantly, though it left the drinker smoking at the ears for several hours afterward. Ginny Weasley, who had been looking pale, was bullied into taking some by Percy. The steam pouring from under her vivid hair gave the impression that her whole head was on fire.

//     Raindrops the size of bullets thundered on the castle windows for days on end; the lake rose, the flower beds turned into muddy streams, and Hagrid's pumpkins swelled to the size of garden sheds. Oliver Wood's enthusiasm for regular training sessions, however, was not dampened, which was why Harry was to be found, late one stormy Saturday afternoon a few days before Halloween, returning to Gryffindor Tower, drenched to the skin and splattered with mud.
    
//     Even aside from the rain and wind it hadn't been a happy practice session. Fred and George, who had been spying on the Slytherin team, had seen for themselves the speed of those new Nimbus Two Thousand and Ones. They reported that the Slytherin team was no more than seven greenish blurs, shooting through the air like missiles.
    
//     As Harry squelched along the deserted corridor he came across somebody who looked just as preoccupied as he was. Nearly Headless Nick, the ghost of Gryffindor Tower, was staring morosely out of a window, muttering under his breath, ". . . don't fulfill their requirements . . . half an inch, if that . . ."
    
//     "Hello, Nick," said Harry.
    
//     "Hello, hello," said Nearly Headless Nick, starting and looking round. He wore a dashing, plumed hat on his long curly hair, and a tunic with a ruff, which concealed the fact that his neck was almost completely severed. He was pale as smoke, and Harry could see right through him to the dark sky and torrential rain outside.
    
//     "You look troubled, young Potter," said Nick, folding a transparent letter as he spoke and tucking it inside his doublet.
    
//     "So do you," said Harry.
    
//     "Ah," Nearly Headless Nick waved an elegant hand, "a matter of no importance. . . . It's not as though I really wanted to join. . . . Thought I'd apply, but apparently I 'don't fulfill requirements' -"
    
//     In spite of his airy tone, there was a look of great bitterness on his face.
    
//     "But you would think, wouldn't you," he erupted suddenly, pulling the letter back out of his pocket, "that getting hit forty-five times in the neck with a blunt axe would qualify you to join the Headless Hunt?"`
    
// };

 
//  const studentProfileReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case 'editDetails': {
//         return {...state, ...action.payload };
//       }
//       default:
//         return state;
//     }
//   };

//   export const store = createStore(studentProfileReducer);