import React from 'react';

const Item = (props) => {
  return (
    <div>
      <h3>{props.currency}</h3>
      <h1>{props.value}</h1>
      <button onClick={() => props.onDelete(props.currency)}>Remove</button>
    </div>
  )
}

export default Item