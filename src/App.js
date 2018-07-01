import React, { Component } from 'react';
import PrintComponent from './PrintComponent'

class App extends Component {
  state = {
    print: false,
    value: '',
    err: '',
  }
  onPrint = () => {
    const reg = RegExp(/^\d+$/)
    if (!this.state.value) {
      return this.setState({ err: 'มึงไม่ใส่ตัวเลขมากูจะgen ให้มึงถูกมั๊ย ไอ่เวน' })
    }
    if (!reg.test(this.state.value)) {
      return this.setState({ err: 'ไอ้สัส !!! กุบอกให้ใส่แต่ตัวเลขไง' })
    }
    if (this.state.value.length !== 5) {
      return this.setState({ err: 'ใส่เลข 5 หลักไอ้เชี้ย !!!!' })
    }
    if (this.state.value && this.state.value.length === 5) {
      return this.setState({ print: true, err: '' })
    }
  }
  render() {
    if (this.state.print) {
      return <PrintComponent onPrinted={() => this.setState({ print: false, value: '' })} value={this.state.value} />
    }
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} >
        {this.state.err && <h1 style={{ color: 'red' }} >{this.state.err}</h1>}
        <input 
          onChange={(e) => this.setState({ value: e.target.value })} 
          style={{ padding: 25, fontSize: 40, margin: 30, width: 170, textAlign: 'center' }} 
          maxLength={5}
        />
        <button 
          onClick={this.onPrint}
          style={{ padding: 10, fontSize: 20 }}
        >Print</button>
      </div>
    );
  }
}

export default App;
