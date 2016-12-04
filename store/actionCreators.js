import ActionTypes from './ActionTypes.js';
import axios from 'axios';


export function loadAll() {
    return dispatch => {
        axios.get('/api/todo')
            .then(response => {
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
                var action = {
                    type: ActionTypes.ADD_TO_LIST,
                    name: response.data.name,
                    id: response.data.id
                }
                dispatch(action);
            })
            .catch(error => console.log(error));
    }
}

export function onItemCompleted(id, name, checked) {
    return dispatch => {
        var obj = { name, checked }
        axios.put(`/api/todo/${id}`, obj)
            .then(response => {
                var action = {
                    type: ActionTypes.ON_ITEM_COMPLETED,
                    id,
                    name,
                    checked
                }
                dispatch(action);
            })
            .catch(error => console.log(error));
    }
}

export function deleteItem(id) {
    return dispatch => {
        axios.delete(`/api/todo/${id}`, { id })
            .then(response => {
                var action = {
                    type: ActionTypes.DELETED_ITEM,
                    id
                }
                dispatch(action);
            })
            .catch(error => console.log(error));
    }
}

export function updatedItem(id, name, checked) {
    return dispatch => {
        axios.put(`api/todo/${id}`, { name, checked })
            .then(response => {
                var action = {
                    type: ActionTypes.UPDATED_ITEM,
                    name,
                    id,
                    checked
                }
                dispatch(action);
            })
            .catch(error => console.log(error));
    }
}

export function editMode(index, text) {
    return {
        type: ActionTypes.EDIT_MODE,
        index,
        text
    }
}