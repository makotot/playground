import React from 'react'
import ReactDOM from 'react-dom'


export class Foo extends React.Component {

  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div>
        <span className="foo__title"></span>
      </div>
    )
  }
}
