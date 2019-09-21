import React from 'react';
import API from '../../../helpers/API';
// components
import Item from '../Item/Item';

class Currency extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currency: {},
      selectedCurrency: [],
      value: '?'
    }
  }

  async componentDidMount() {
    let getCurrency = await API.get('/latest?base=USD');
    let currency = getCurrency.data.rates;
    this.setState({ currency });
  }

  handleChange = (event) => {
    event.preventDefault();
    const { currency, selectedCurrency } = this.state;
    const data = {
      'currency': event.target.value,
      'value': currency[event.target.value]
    };
    
    this.setState({
      selectedCurrency: selectedCurrency.concat(data)
    });
  };

  render() {
    const { currency, selectedCurrency, value } = this.state;

    return (
      <div>
        <Item data={selectedCurrency}/>
        <select onChange={this.handleChange} value={value}>
          {Object.keys(currency).map(key =>
            <option key={key} value={key}>{key}</option>
          )};
        </select>
      </div>
    );
  }
}

export default Currency;