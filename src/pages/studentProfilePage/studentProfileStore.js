import { createStore } from 'redux';

const initialState = {
    preferredName: "Bob Jones",
    faculty: "Science",
    major: "Computer Science",
    image: "https://i.guim.co.uk/img/media/6bb1314dbe7b5b178616018f3096c0477790956f/0_982_5000_3000/master/5000.jpg?width=1200&quality=85&auto=format&fit=max&s=ed87a424051d58aec798bc03c0284129",
    contact: "bob.jones@gmail.com",
    aboutMe: "Hi everyone! My name is Bob Jones and I am a full-time smiling yellow emoji! In my spare time, I like finishing up my CPSC 455 assignments and learning about Redux from absolutely scratch, with no guidance from my professors! Please feel free to contact me by email if your company is in need of a yellow emoji! I can be other colors as well!"
 };

 
 const studentProfileReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'editDetails': {
        return {...state, ...action.payload };
      }
      default:
        return state;
    }
  };

  export const store = createStore(studentProfileReducer);