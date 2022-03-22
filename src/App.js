import {TodoList} from "./component/TodoList/TodoList";
import {AddItem} from "./component/AddItem/AddItem";
import {useState} from "react";
import {ProgressBar} from "./component/ProgressBar/ProgressBar";

function App() {

    const [items, setItems] = useState([]);
    const [isItemUpdated, setItemUpdated] = useState(false);

    if(isItemUpdated){
        setItems(items.filter(item => !item.remove));
        setItemUpdated(false);
    }

    return (
        <div className="main-content">
            <h1>TODOLIST</h1>
            <AddItem setItemUpdated={setItemUpdated} items={items} />
            <TodoList setItemUpdated={setItemUpdated} items={items} />
            <ProgressBar setItems={setItems} items={items} />
        </div>
    );
}

export default App;
