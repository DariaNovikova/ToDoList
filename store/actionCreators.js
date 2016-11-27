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
        type: 'DELETED_ITEM',
        index
    }
}

export function updatedItem(index, text) {
    return {
        type: 'UPDATED_ITEM',
        text,
        index
    }
}

export function editMode(index, text) {
    return {
        type: 'EDIT_MODE',
        index,
        text
    }
}