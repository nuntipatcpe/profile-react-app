import React, { Component } from 'react'

export class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
        <div className="ciontainer">
            <header>What i do</header>
        </div>
        <div className="imnput">
            <input type="text" placeholder='Search'/>
        </div>
      </div>
    )
  }
}

export default Portfolio