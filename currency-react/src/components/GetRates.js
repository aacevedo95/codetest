import React, { Component } from 'react'
import axios from 'axios';

export default class GetRates extends Component {
  state = {
    amount: '',
    from: '',
    to: [],
    date: '',
    result: []
  }

  handleAmountChanged = e => {
    this.setState({
      amount: e.target.value
    })
  }
  handleFromChanged = e => {
    this.setState({
      from: e.target.value
    })
  }
  handleToChanged = e => {
    this.setState({
      to: e.target.value
    })
  }
  handleDateChanged = e => {
    this.setState({
      date: e.target.value
    })
  }
  handleSubmit = () => {
    axios.post('http://localhost:8888/api/0.1/', {
      base: this.state.from,
      amount: this.state.amount,
      symbol: this.state.to,
      date: this.state.date
    })
      .then((response) => {
        console.log('response: ', response);
        this.setState({ result: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    console.log('Results state: ', this.state.result)
    return (
      <div>
        <p>Amount</p>
        <input onChange={this.handleAmountChanged} />
        <p>From</p>
        <input onChange={this.handleFromChanged} />
        <p>To</p>
        <input onChange={this.handleToChanged} />
        <p>Date</p>
        <input onChange={this.handleDateChanged} type="date" />
        <br />
        <button onClick={this.handleSubmit}>Submit</button>
        <p>Result </p>
        {(this.state.result !== undefined ?
          <p>
            {this.state.result.amount}
          </p>
          :
          <p>DEBUG: Console will have value of result</p>
        )}
      </div>
    )
  }
}
