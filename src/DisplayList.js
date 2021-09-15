import React from "react";
import './DisplayList.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import FlipMove from "react-flip-move";
function DisplayList(props){
    const items = props.items;
    const listItems =items.map((item)=>{
        return <div key={item.key} className="displayStyle">
                <p> <input type="text" id={item.key} value={item.text} onChange={(e)=>{
                    props.makeUpdate(e.target.value,item.key);
                }}/>
                <span id="trashIcon">
                     <FontAwesomeIcon icon="trash" onClick={()=>{props.deleteTodo(item.key)}}/>
                </span>
                </p>
               
        </div>
    })
return <>
<FlipMove duration={400} easing="ease-in-out">
{listItems}
</FlipMove> 
</>
}
export default DisplayList;