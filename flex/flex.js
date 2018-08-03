import React from 'react'
import cx from 'classnames'

const Flex = (props) => {
  const classes = cx(
    'flex',
    props.col && 'flex--col',
    props.s && 'flex--s',
    props.m && 'flex--m',
    props.l && 'flex--l'
  )

  return (
    <div className={ classes }>
      { props.children }
    </div>
  )
}

const FlexItem = (props) => {
  const classes = cx(
    'flex__item',
    props.left && 'flex__item--left',
    props.center && 'flex__item--center',
    props.right && 'flex__item--right',
  )

  return (
    <div className={ classes }>
      { props.children }
    </div>
  )
}

export {
  Flex,
  FlexItem,
}