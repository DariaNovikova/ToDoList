import React from 'react';

function Item({name, checked, onItemCompleted, deleteItem, editMode}) {
    return (
        <div className="item-container">
            <input type="checkbox" checked={checked} onChange={onItemCompleted} />
            <span style={{ textDecoration: checked ? 'line-through' : 'none' }}>
                {name}
            </span>
            <div className="img-container">
                <img onClick={deleteItem} src="http://www.freeiconspng.com/uploads/delete-button-png-13.png" />
                <img onClick={editMode} src="http://www.freeiconspng.com/uploads/edit-new-icon-22.png" />
            </div>
        </div>
    );
}

export default class List extends React.Component {

    render() {
        return (
            <div>
                {
                    this.props.list.map((el, index) =>
                        <Item name={el.name}
                            checked={el.checked}
                            key={el.id}
                            onItemCompleted={() => this.props.onItemCompleted(el.id, el.name, !el.checked)}
                            deleteItem={() => this.props.deleteItem(el.id)}
                            editMode={() => {
                                this.props.editMode(index, el.name);
                                this.props.focus()
                            } } />)
                }
            </div>
        )
    }

}
