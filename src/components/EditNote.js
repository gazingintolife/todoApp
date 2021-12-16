import React from 'react';
import NoteForm from './NoteForm';
import { connect } from 'react-redux';
import { startEditNote, startDeleteNote} from '../actions/notes';

const EditNote = (props) => (
    <div className="">
        <NoteForm 
            secondNote = {props.oneNote}
            onSubmit = { (note) => {
                props.startEditNote(props.oneNote.id, note);
                props.history.push('/');          
            } }
            handleDelete = { () => {
                props.startDeleteNote({ id: props.oneNote.id});
                props.history.push('/');
            } }
            deleteOption = {true}
        />
    </div>
); 

const mapStateToProps = (state, props) => ({
    oneNote: state.notes.find((note) => {
        return note.id === props.match.params.id
    })
});

const mapDispatchToProps = (dispatch) => ({
    startEditNote: (id, note) => dispatch(startEditNote(id, note)),
    startDeleteNote: (data) => dispatch(startDeleteNote(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(EditNote);