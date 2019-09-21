import React from 'react';

const Item = (props) => {
  // console.log(props.data);
  
  return (
    props.data.map(item =>
      <div key={item.value}>
        <h3>{item.currency}</h3>
        <h1>{item.value}</h1>
      </div>
    )
  )
}

export default Item