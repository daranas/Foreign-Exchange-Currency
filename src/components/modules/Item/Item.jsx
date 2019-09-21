import React from 'react';
import './Item.css';

const Item = (props) => {
  return (
    <div className="ovo-item">
      <h3>{props.currency}</h3>
      <h1>{props.value}</h1>
      <em>1 {props.currency} = {props.currency} {props.default}</em>
      <button onClick={() => props.onDelete(props.currency)}>(-)</button>
    </div>
  )
}

export default Item