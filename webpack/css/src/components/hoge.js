import React from 'react'
import Foo from './foo'

export default class Hoge extends React.Component {

  render () {
    return (
      <div>
        <span>Hoge</span>
        <Foo />
      </div>
    )
  }
}
