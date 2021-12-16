import database from '../firebase/firebase';

export const addNote = (note) => ({
        type: 'ADD_NOTE',
        note
    });

export const startAddNote = (notesData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const { title = '', createdAt = 0, category = ''} = notesData;  //destructuring
        const note = { title, createdAt, category};
        console.log(uid);
        return database.ref(`users/${uid}/notes`).push(note).then((ref) => {
            dispatch(addNote({
                id: ref.key,
                ...note
            }));
            
        }) ;
    };
};

export const editNote = (id, updates) => ({
    type: 'EDIT_NOTE',
    id,
    updates
});

export const startEditNote = (id, updates) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      database.ref(`users/${uid}/notes/${id}`).update(updates).then(() => {
        dispatch(editNote(id, updates));
      });
    };
  };

export const deleteNote = ({id} = {}) => ({
    type: 'DELETE_NOTE',
    id
});

export const startDeleteNote = ({id} ={}) => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/notes/${id}`).remove().then(() => {
          dispatch(deleteNote({id}));
      });
  };
}; 

export const setNotes  = (notes) => ({
    type: 'SET_NOTES',
    notes
  });
  
  export const startSetNotes = () => {
    return (dispatch, getState) => {
      const uid = getState().auth.uid;
      return database.ref(`users/${uid}/notes`).once('value').then((snapshot) => {
        const notes = [];
  
        snapshot.forEach((childSnapshot) => {
          notes.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
  
        dispatch(setNotes(notes));
      });
    };
  };
  
