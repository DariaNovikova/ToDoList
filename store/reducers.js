import { combineReducers } from 'redux';
import ActionTypes from './ActionTypes.js';

export default combineReducers({ currentToDo: inputReducer, list: listReducer, editStatus: statusReducer });

function inputReducer(currentToDo = '', action) {
    switch (action.type) {
        case ActionTypes.CHANGE_NAME:
            return action.newToDo;
        case ActionTypes.ADD_TO_LIST:
            return '';
        case ActionTypes.EDIT_MODE:
            return action.text;
        case ActionTypes.UPDATED_ITEM:
            return '';
        default:
            return currentToDo;
    }
};
function listReducer(list = [], action) {
    switch (action.type) {
        case ActionTypes.ADD_TO_LIST:
            var newList = list.concat([{ name: action.currentToDo, checked: false }]);
            return newList;
        case ActionTypes.ON_ITEM_COMPLETED:
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
        case ActionTypes.DELETED_ITEM:
            var newList = [];
            for (let i = 0; i < list.length; i++) {
                if (i !== action.index) {
                    newList.push(list[i]);
                }
            }
            return newList;
        case ActionTypes.UPDATED_ITEM:
            var newList = [];
            for (let i = 0; i < list.length; i++) {
                if (i !== action.index) {
                    newList.push(list[i]);
                }
                else {
                    var updatedItem = { name: action.text, checked: list[i].checked };
                    newList.push(updatedItem);
                }
            }
            return newList;
        default:
            return list;
    }
};

function statusReducer(editStatus = { onEdit: false, editIndex: -1 }, action) {
    switch (action.type) {
        case ActionTypes.EDIT_MODE:
            return { onEdit: true, editIndex: action.index }
        case ActionTypes.UPDATED_ITEM:
            return { onEdit: false, editIndex: -1 }
        case ActionTypes.CHANGE_NAME:
            return (action.newToDo === '') ? { onEdit: false, editIndex: -1 } : editStatus;
        default:
            return editStatus;
    }
}