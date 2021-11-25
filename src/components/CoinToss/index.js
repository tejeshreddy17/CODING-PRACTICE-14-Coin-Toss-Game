// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    total: 0,
    heads: 0,
    tails: 0,
    result: 'heads',
  }

  tossingCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        total: prevState.total + 1,
        heads: prevState.heads + 1,
        result: 'heads',
      }))
    } else {
      this.setState(prevState => ({
        total: prevState.total + 1,
        tails: prevState.tails + 1,
        result: 'tails',
      }))
    }
  }

  render() {
    const {result, total, heads, tails} = this.state
    return (
      <div className="background-card">
        <div className="toss-coin-card">
          <h1>Coin Toss Game</h1>
          <p>Heads (or) Tails</p>
          {result === 'heads' && (
            <img
              alt="toss result"
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
            />
          )}
          {result === 'tails' && (
            <img
              alt="toss result"
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
            />
          )}

          <button onClick={this.tossingCoin} type="button">
            Toss Coin
          </button>
          <div className="content-card">
            <p>Total: {total}</p>
            <p>Heads: {heads}</p>
            <p>Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
