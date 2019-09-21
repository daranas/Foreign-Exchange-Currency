import React from 'react';
import API from '../../../helpers/API';

class Currency extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      currency: {},
      selectedCurrency: {},
      value: '?'
    }
  }

  async componentDidMount() {
    let getCurrency = await API.get('/latest?base=USD');
    let currency = getCurrency.data.rates;
    // console.log(currency);
    
    this.setState({ currency });
  }

  handleChange = (event) => {
    const { currency, selectedCurrency } = this.state;
    const data = {
      'currency': event.target.value,
      'value': currency[event.target.value]
    };
    // Object.assign(selectedCurrency, data);
    
    this.setState({ selectedCurrency: data });
    console.log(selectedCurrency);
    
  };

  render() {
    const { currency, value } = this.state;

    return (
      <div>
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