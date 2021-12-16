import React from 'react';
import NoteListItem from './NoteListItem';
import { connect } from 'react-redux';

const Completed = (props) => (
    <div className="taskCategory">
        { props.notes.map((note) => {
            if (note.category === 'completed'){
                return (<NoteListItem key = {note.id} {...note}/>)
            }
        })} 
    </div>
);

const mapStateToProp = (state) => ({
    notes: state.notes
})

export default connect(mapStateToProp)(Completed);