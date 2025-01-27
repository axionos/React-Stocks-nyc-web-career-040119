import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  renderPortfolio = () => {
    return this.props.portfolio.map(stock => {
      return <Stock
        key={stock.id}
        stock={stock}
        handleClick={this.props.removeStock}
        // stockContainer={false}
      />
    })
  }

  render() {
    console.log('Portfolio Container', this.props)
    return (
      <div>
        <h2>My Portfolio</h2>
        {this.renderPortfolio()}
      </div>
    );
  }

}

export default PortfolioContainer;
