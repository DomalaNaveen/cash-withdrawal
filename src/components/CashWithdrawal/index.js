import {Component} from 'react'

import DenominationItem from '../DenominationItem'
import './index.css'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  updateBalance = value => {
    this.setState(prevState => ({balance: prevState.balance - value}))
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="bg-container">
        <div className="profile">
          <div className="profile-avatar">
            <h1 className="symbol">N</h1>
          </div>
        </div>
        <h1 className="profile-name">Naveen Domala</h1>
        <div className="balance-container">
          <p>Your Balance</p>
          <div className="amount">
            <p>
              {balance}
              <br />
              in rupees
            </p>
          </div>
        </div>
        <p className="withdraw">Withdraw</p>
        <p className="choose-sum">CHOOSE SUM (IN RUPEES)</p>
        <ul className="denomination-list">
          {denominationsList.map(eachDenomination => (
            <DenominationItem
              key={eachDenomination.id}
              denominationDetails={eachDenomination}
              updateBalance={this.updateBalance}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default CashWithdrawal
