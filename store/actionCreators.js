export function changeName(newToDo) {
    return {
        type: 'CHANGE_NAME',
        newToDo
    }
}

export function addToList(currentToDo) {
    return {
        type: 'ADD_TO_LIST',
        currentToDo
    }
}

export function onItemCompleted(index) {
    return {
        type: 'ON_ITEM_COMPLETED',
        index
    }
}

export function deleteItem(index) {
    return {
        type: 'DELETE_ITEM',
        index
    }
}

export function editItem(index,text) {
    return {
        type: 'EDIT_ITEM',
        text,
        index
    }
}