import React from 'react';
import NoteForm from './NoteForm';
import { startAddNote } from '../actions/notes';
import { connect } from 'react-redux';
import {history} from '../router/AppRouter';

const AddNote = (props) => ( 
    <div>
        <NoteForm onSubmit = {(note) => {
            props.startAddNote(note);
            console.log(note); 
            history.push('/dashboard');  
        }}
        />
    </div>
);

const mapDispatchToProps = (dispatch, props) => ({
    startAddNote: (note) => dispatch(startAddNote(note))
  });

export default connect(undefined, mapDispatchToProps)(AddNote);

