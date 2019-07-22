export const postTodo = body => {
  return dispatch => {
    dispatch({ type: "POST_TODO", payload: body });
  };
};

//DISPATH DONE ACTION
export const postDone = index => {
  return dispatch => {
    dispatch({ type: "POST_DONE", payload: index });
  };
};

// can be done
// export const postContact = body => dispatch => {
//     dispatch({})
// }

// export function postContact(body){
//     return function(dispatch){
//         dispatch({type: 'POST_CONTACT', payload: body})
//     }
// }
