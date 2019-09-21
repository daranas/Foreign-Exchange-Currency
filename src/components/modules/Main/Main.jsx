import React from 'react';
import API from '../../../helpers/API';
// components
import Item from '../Item/Item';
import './Main.css';

class Main extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      defaultValue: 10,
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

  handleAddItem = (e) => {
    e.preventDefault();
    const { defaultValue, currency, selectedCurrency } = this.state;
    if (e.target.value) {
      const data = {
        'currency': e.target.value,
        'default': currency[e.target.value],
        'value': currency[e.target.value] * defaultValue
      };
      
      this.setState({
        selectedCurrency: selectedCurrency.concat(data),
        value: e.target.value
      }); 
    }
  };

  handleChange = (e) => {
    e.preventDefault();
    let setNumber = parseInt(e.target.value);

    this.setState(prevState => ({
      ...prevState,
      selectedCurrency: prevState.selectedCurrency.map(currency => ({
        ...currency,
        value: currency.value * setNumber
     }))
    }))

    this.setState({ defaultValue: setNumber })
  }

  handleDelete = (currency) => {
    const items = this.state.selectedCurrency.filter(item => item.currency !== currency);
    this.setState({ selectedCurrency: items });
  };

  toCurrency(number) {
    const formatter = new Intl.NumberFormat("sv-SE", {
      style: "decimal",
      currency: "SEK"
    });

    return formatter.format(number);
  }

  render() {
    const { defaultValue, currency, selectedCurrency, value } = this.state;

    return (
      <div className="ovo-currency-wrapper">
        <label htmlFor="number" className="floating-label">USD</label>
        <input type="number"
          onChange={this.handleChange}
          defaultValue={defaultValue} />
        {selectedCurrency.map(item =>
          <Item 
            key={item.currency}
            currency={item.currency} 
            value={this.toCurrency(item.value)}
            default={this.toCurrency(item.default)}
            onDelete={this.handleDelete} />
        )}
        <div className="add-currency">
          <label htmlFor="currency">Add Currency</label>
          <select onChange={this.handleAddItem} value={value}>
            <option value="">Select Currency</option>
            {Object.keys(currency).map(key =>
              <option key={key} value={key}>{key}</option>
            )};
          </select>
        </div>
      </div>
    );
  }
}

export default Main;