import React from 'react';
import List from './list.jsx';
import './index.scss';
import { connect } from 'react-redux';
import { changeName, addToList, onItemCompleted, deleteItem, editItem } from '../store/actionCreators.js'

class App extends React.Component {
    // constructor(props) {
    //     super(props)
    // };

    render() {
        return (
            <div id="main-container">
                <h1> Todo List </h1>
                <input id='input' type='text' onChange={this.props.onInputChange} value={this.props.currentText} />
                <button onClick={() => this.props.addNewItem(this.props.currentText)}>Save</button>
                <div className="list-container">
                    <List list={this.props.items}
                        onItemCompleted={this.props.onItemCompleted}
                        deleteItem={this.props.deleteItem}
                        editItem={this.props.editItem} />
                </div>
            </div>
        )
    }
};

function mapDispatchToProps(dispatch) {
    return {
        onInputChange: e => dispatch(changeName(e.target.value)),
        addNewItem: currentText => dispatch(addToList(currentText)),
        onItemCompleted: index => dispatch(onItemCompleted(index)),
        deleteItem: index => dispatch(deleteItem(index)),
        editItem: (index, text) => dispatch(editItem(index, text))
    }
};

function mapStateToProps(state, ownProps) {
    return {
        currentText: state.currentToDo,
        items: state.list
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);