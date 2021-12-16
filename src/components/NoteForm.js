import React from 'react';
import moment from 'moment';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

export default class NoteForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title: props.secondNote ? props.secondNote.title : '',
            createdAt : moment().format("hh:mm A MMM DD"),
            error: '',
            category : props.secondNote ? props.secondNote.category : ''
        }
    }
    
    onChange = (value) => {
        this.setState(() => ({category: value}));        
    }
    
    onTitleChange = (e) => {
        const title = e.target.value;
        this.setState(() => ({title}));
    }


    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.title){
            this.setState(() => ({error: 'Please add a note'}));
        }
        else if(!this.state.category){
            this.setState(() => ({error: 'Please Select a Category'}));
        }
        else {
            this.setState(() => ({error: ''}));
            this.props.onSubmit({
                title: this.state.title,
                createdAt: this.state.createdAt,
                category: this.state.category
            });
        }
    }   
    
    render(){
        
        return (
            <div className="">                
                {this.state.error && <p>{this.state.error}</p> }
                <form className="form" id = "taskform" onSubmit = {this.onSubmit}>
                    <div className="editTask">
                        <input className="text-input"
                             type = 'text' 
                             placeholder = 'To-Do'
                             rows= {4}
                             value = {this.state.title}
                             onChange = {this.onTitleChange}      
                        />
                        <div className="">
                                { this.props.deleteOption && 
                            <button className="addbutton" onClick = {this.props.handleDelete}>Delete</button>}
                        </div>
                    </div>    
                    <h4 className ="">Select One</h4>
                    <div className="radioBtn">
                        <RadioGroup onChange={ this.onChange} vertical>
                            <RadioButton className = "radioBox" value="todo">
                              To Do
                            </RadioButton>
                            <RadioButton value="inprogress" className = "radioBox">
                                In Progress
                            </RadioButton>
                            <RadioButton value="completed" className = "radioBox">
                              Completed
                            </RadioButton>
                        </RadioGroup>
                    </div> 
                    <div>
                        <button type='submit' className="addbutton">Add Task</button>
                    </div>              
                </form> 
            </div>
        );
    }
}