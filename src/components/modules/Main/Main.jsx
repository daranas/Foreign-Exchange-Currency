import React from 'react';
import API from '../../../helpers/API';
// components
import Item from '../Item/Item';
import './Main.css';

class Main extends React.Component {

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

  handleChange = (e) => {
    e.preventDefault();
    const { currency, selectedCurrency } = this.state;
    const data = {
      'currency': e.target.value,
      'value': currency[e.target.value]
    };
    
    this.setState({
      selectedCurrency: selectedCurrency.concat(data)
    });
  };

  handleDelete = (currency) => {
    const items = this.state.selectedCurrency.filter(item => item.currency !== currency);
    this.setState({ selectedCurrency: items });
  };

  render() {
    const { currency, selectedCurrency, value } = this.state;

    return (
      <div className="currencyWrapper">
        {selectedCurrency.map(item =>
          <Item 
            key={item.currency}
            currency={item.currency} 
            value={item.value} 
            onDelete={this.handleDelete} />
        )}
        <select onChange={this.handleChange} value={value}>
          {Object.keys(currency).map(key =>
            <option key={key} value={key}>{key}</option>
          )};
        </select>
      </div>
    );
  }
}

export default Main;