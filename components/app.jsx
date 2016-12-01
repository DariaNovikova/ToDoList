import React from 'react';
import List from './list.jsx';
import './index.scss';
import { connect } from 'react-redux';
import { changeName, addToList, onItemCompleted, deleteItem, editMode, updatedItem } from '../store/actionCreators.js';

class App extends React.Component {
  
    render() {
        return (
            <div id="main-container">
                <h1> Todo List </h1>
                <input id='input' type='text' onChange={this.props.onInputChange} value={this.props.currentText} />
                <button onClick={() => {
                    if (this.props.editStatus.onEdit)
                    { this.props.updatedItem(this.props.editStatus.editIndex, this.props.currentText) }
                    else
                    { this.props.addNewItem(this.props.currentText) }
                } }> Save</button>
                <div className="list-container">
                    <List list={this.props.items}
                        onItemCompleted={this.props.onItemCompleted}
                        deleteItem={this.props.deleteItem}
                        editMode={this.props.editMode} />
                </div>
            </div>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return {
        onInputChange: e => dispatch(changeName(e.target.value)),
        addNewItem: currentText => dispatch(addToList(currentText)),
        onItemCompleted: (id, name) => dispatch(onItemCompleted(id, name)),
        deleteItem: index => dispatch(deleteItem(index)),
        editMode: (index, text) => dispatch(editMode(index, text)),
        updatedItem: (index, text) => dispatch(updatedItem(index, text))

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