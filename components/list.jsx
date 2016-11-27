import React from 'react';

function Item({name, checked, onItemCompleted, deleteItem, editItem}) {
    return (
        <div className="item-container">
            <input type="checkbox" checked={checked} onChange={onItemCompleted} />
            <span style={{ textDecoration: checked ? 'line-through' : 'none' }}>
                {name}
                <img id="delete" onClick={deleteItem} src="http://www.freeiconspng.com/uploads/delete-button-png-13.png" />
                <img id="edit" onClick={editItem} src="https://cdn3.iconfinder.com/data/icons/mobidocs/512/edit_write_pencil_pen_page-512.png" />
            </span>
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
                            key={index}
                            onItemCompleted={() => this.props.onItemCompleted(index)}
                            deleteItem={() => this.props.deleteItem(index)}
                            editItem={()=>this.props.editItem(index, el.name)} />)
                }
            </div>
        )
    }

}
