// Code inspired from Workshop 2's react-redux-button-counter-2022 repo: https://github.com/johnsonwlu/react-redux-button-counter-2022
export const addModule = module => {
    return {
      type: 'ADD_MODULE',
      payload: module
    };
  };

  
  export const removeModule = moduleId => {
    return {
      type: 'REMOVE_MODULE',
      payload: moduleId
    };
  };
