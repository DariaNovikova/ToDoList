import ActionTypes from './ActionTypes.js';
import axios from 'axios';


export function loadAll() {
    return dispatch => {
        axios.get('/api/todo')
            .then(response => {
                console.log(response);
                var action = {
                    type: ActionTypes.LOAD_LIST,
                    list: response.data
                };
                dispatch(action);
            })
            .catch(error => console.log(error));
    }
}

export function changeName(newToDo) {
    return {
        type: ActionTypes.CHANGE_NAME,
        newToDo
    }
}

export function addToList(name) {
    return dispatch => {
        axios.post('/api/todo', { name })
            .then(response => {
                console.log(response);
                var action = {
                    type: ActionTypes.ADD_TO_LIST,
                    name: response.data.name
                }
                dispatch(action);
            })
            .catch(error => console.log(error));
    }
}

export function onItemCompleted(id, name) {

    return dispatch=>{
        axios.put(`/api/todo/${id}`, {id, name})
    
     {
        type: ActionTypes.ON_ITEM_COMPLETED,
        index
    }
    }
}

export function deleteItem(index) {
    return {
        type: ActionTypes.DELETED_ITEM,
        index
    }
}

export function updatedItem(index, text) {
    return {
        type: ActionTypes.UPDATED_ITEM,
        text,
        index
    }
}

export function editMode(index, text) {
    return {
        type: ActionTypes.EDIT_MODE,
        index,
        text
    }
}