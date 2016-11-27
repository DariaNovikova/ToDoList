import { combineReducers } from 'redux';

export default combineReducers({ currentToDo: inputReducer, list: listReducer });

function inputReducer(currentToDo='', action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return action.newToDo;
        case 'ADD_TO_LIST':
            return '';
        case 'EDIT_ITEM':   
            return action.text; 
        default:
            return currentToDo;
    }
};
function listReducer(list=[], action) {
    switch (action.type) {
        case 'ADD_TO_LIST':
            var newList = list.concat([{ name: action.currentToDo, checked: false }]);
            return newList;
        case 'ON_ITEM_COMPLETED':
            var newList = [];
            for (let i = 0; i < list.length; i++) {
                if (i !== action.index) {
                    newList.push(list[i]);
                }
                else {
                    var checkedItem = { name: list[i].name, checked: !list[i].checked };
                    newList.push(checkedItem);
                }
            }
            return newList;
        case 'DELETE_ITEM':
            var newList = [];
            for (let i = 0; i < list.length; i++) {
                if (i !== action.index) {
                    newList.push(list[i]);
                }
            }
            return newList;
        case 'EDIT_ITEM':
        var newList = [];
            for (let i = 0; i < list.length; i++) {
                if (i !== action.index) {
                    newList.push(list[i]);
                }
                else {
                    var updatedItem = { name: action.text, checked:list[i].checked };
                    newList.push(updatedItem);
                }
            }
            return newList;
            
        default:
            return list;
    }
};