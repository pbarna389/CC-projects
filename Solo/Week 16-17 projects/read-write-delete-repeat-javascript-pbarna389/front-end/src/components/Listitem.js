import React from "react";

function ListItem({ items, remove, check }) {

    return (
        <>
            {
                items.map(element =>
                    <div className="list" key={element.id}>
                        <li className={element.isCompleted ? "completed" : undefined}>{element.title}</li>
                        <button onClick={() => remove(element.id)}>delete</button>
                        <div>Toggle Status</div>
                        <input type="checkbox" checked={element.isCompleted && true} onChange={() => check(element.isCompleted, element.id)} ></input>
                    </div>
                )
            }
        </>
    )
}
export default ListItem 