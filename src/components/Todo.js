import React from 'react';
import NoteListItem from './NoteListItem';
import { connect } from 'react-redux';


const Todo = (props) => (
    <div className="taskCategory">
        { props.notes.map((note) => {
            if (note.category === 'todo'){
                return (<NoteListItem key = {note.id} {...note}/>)
            }
        })}        
    </div>
);

const mapStateToProp = (state) => ({
    notes: state.notes
})

export default connect(mapStateToProp)(Todo);
