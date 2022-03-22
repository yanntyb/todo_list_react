import "./TodoList.scss"
import {Item} from "../Item/Item";

export const TodoList = ({items, setItemUpdated}) => {
    return (
        <div className="todoList">
            {
                items.map(item =>
                    <Item key={item.id} item={item} setItemUpdated={setItemUpdated} />
                )
            }
        </div>
    )
}