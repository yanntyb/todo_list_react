import "./AddItem.scss";

export const AddItem = ({setItemUpdated, items}) => {

    function addItemClick(e) {
        const title = e.currentTarget.previousSibling.value;
        if(title.length > 0){
            items.push({title: title, id: items.length, done: false, remove: false, editable: false});
            setItemUpdated(true);
        }
        e.currentTarget.previousSibling.value = "";
    }

    return (
        <div className="addItem">
            <input type="text"/>
            <div onClick={addItemClick}>+</div>
        </div>
    )
}