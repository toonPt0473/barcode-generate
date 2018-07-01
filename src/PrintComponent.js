import React, { Component } from 'react'
import Barcode from 'react-barcode'

export class PrintComponent extends Component {
  componentDidMount() {
    window.onafterprint = () => this.props.onPrinted()
    window.print()
  }
  componentWillUnmount() {
    window.onafterprint = null
  }
  renderRow = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }} >
        {new Array(10).fill(null).map((n, i) => (
          <Barcode
            value={this.props.value}
            format="EAN5"
            width={1.2}
            height={25}
            fontSize={12}
            key={i}
          />
        ))}
      </div>
    )
  }
  renderCol = (number) => {
    return new Array(number).fill(null).map((n, i) => (
      <div key={i} >
        {this.renderRow()}
      </div>
    ))
  }
  render() {
    return (
      <div className="page" >
        <div className="subpage" >
          {this.renderCol(19)}
        </div>
      </div>
    )
  }
}

export default PrintComponent
