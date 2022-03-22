import "./Item.scss";
import pen from "../../assets/images/pen-solid.svg";
import trash from "../../assets/images/trash-solid.svg";

export const Item = ({item, setItemUpdated}) => {

    function changeChecked() {
        item.done = !item.done;
        setItemUpdated(true);
    }

    function deleteItem() {
        item.remove = true;
        setItemUpdated(true);
    }

    function editItem() {
        item.editable = !item.editable;
        setItemUpdated(true);
    }

    function setTitle(e){
        item.title = e.target.value;
    }

    return (
        <div className="item">
            {item.done ? <input type="checkbox" onClick={changeChecked} checked /> : <input type="checkbox" onClick={changeChecked}/> }
            {
                item.editable ? <input type="text" className="title" onChange={setTitle} /> : <span className="title">{item.title}</span>
            }
            <div className="action">
                <img src={pen} onClick={editItem} alt=""/>
                <img src={trash} onClick={deleteItem} alt=""/>
            </div>
        </div>
    )
}

