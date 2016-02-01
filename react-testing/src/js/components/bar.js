import React from 'react'
import ReactDOM from 'react-dom'
import 'whatwg-fetch'


export class Bar extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      items: []
    }
  }

  componentDidMount () {
    fetch('./api/dummy.json')
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        this.setState({
          items: json.items
        })
      })
  }

  render () {
    const items = this.state.items.map((item, index) => {
      return (
        <li key={ index }>{ item }</li>
      )
    })

    return (
      <ul className="bar__list">
        { items }
      </ul>
    )
  }
}
