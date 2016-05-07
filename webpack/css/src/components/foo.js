import React from 'react'

import styles from './foo.scss'


export default class Foo extends React.Component {

  render () {
    return (
      <div className={ styles.main }>
        Foo
      </div>
    )
  }
}
