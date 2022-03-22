import "./ProgressBar.scss";

export const ProgressBar = ({items, setItems}) => {

    let total = 0;
    for(let item of items){
        if(item.done){
            total ++;
        }
    }

    function calcWidth(){
        return (total /items.length ) * 100 + "%";
    }

    function removeChecked() {
        items = items.filter(item => item.done === false);
        setItems(items);
    }

    return (
        <div className="progressBar-action">
            <div className="progressBar_container">
                <span>{total} of {items.length} taks done</span>
                <div style={{width: calcWidth()}} className="progressBar" />
            </div>
            <div className="remove" onClick={removeChecked}>Remove checked</div>
        </div>
    )
}