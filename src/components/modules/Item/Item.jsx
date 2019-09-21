import React from 'react';

// class Item extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       items: this.props
//     }
//   }

//   render() {
//     const { items } = this.state;
//     return (
//       items.data.map(item =>
//         <div key={item.value}>
//           <h3>{item.currency}</h3>
//           <h1>{item.value}</h1>
//         </div>
//       )
//     )
//   }
// }

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