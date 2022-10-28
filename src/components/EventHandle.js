import React, { Component } from 'react'

export default class EventHandle extends Component {
    constructor(props) {
      super(props)

      this.state = {
         changedValue: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
        this.setState({
            changedValue: e.target.value
        })
    }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <p>{this.state.changedValue}</p>
      </div>
    )
  }
}
