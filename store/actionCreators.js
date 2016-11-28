import ActionTypes from './ActionTypes.js';

export function changeName(newToDo) {
    return {
        type: ActionTypes.CHANGE_NAME,
        newToDo
    }
}

export function addToList(currentToDo) {
    return {
        type: ActionTypes.ADD_TO_LIST,
        currentToDo
    }
}

export function onItemCompleted(index) {
    return {
        type: ActionTypes.ON_ITEM_COMPLETED,
        index
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