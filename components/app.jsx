import React from 'react';
import List from './list.jsx';
import './index.scss';
import { connect } from 'react-redux';
import { changeName, addToList, onItemCompleted, deleteItem, editMode, updatedItem } from '../store/actionCreators.js';

class App extends React.Component {
    constructor() {
        super();
        this.focus = this.focus.bind(this);
    };
    focus() {
        this.textInput.focus();
    };
    render() {
        return (
            <div id="main-container">
                <h1> Todo List </h1>
                <input id='input' type='text' onChange={this.props.onInputChange} value={this.props.currentText} ref={(input) => { this.textInput = input } } />
                <button onClick={() => {
                    if (this.props.editStatus.onEdit) {
                        let element = this.props.items[this.props.editStatus.editIndex];
                        this.props.updatedItem(element.id, this.props.currentText, element.checked)
                    }
                    else {
                        this.props.addNewItem(this.props.currentText)
                    }
                    this.focus();
                } }> Save</button>
                <div className="list-container">
                    <List list={this.props.items}
                        onItemCompleted={this.props.onItemCompleted}
                        deleteItem={this.props.deleteItem}
                        editMode={this.props.editMode} 
                        focus={this.focus}/>
                </div>
            </div>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return {
        onInputChange: e => dispatch(changeName(e.target.value)),
        addNewItem: currentText => dispatch(addToList(currentText)),
        onItemCompleted: (id, name, checked) => dispatch(onItemCompleted(id, name, checked)),
        deleteItem: id => dispatch(deleteItem(id)),
        editMode: (index, text) => dispatch(editMode(index, text)),
        updatedItem: (id, name, checked) => dispatch(updatedItem(id, name, checked))

    }
};

function mapStateToProps(state, ownProps) {
    return {
        currentText: state.currentToDo,
        items: state.list,
        editStatus: state.editStatus
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);