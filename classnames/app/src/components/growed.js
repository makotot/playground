import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

const Growed = (props) => {
  return (
    <div className="growed">
      { props.children }
    </div>
  )
}

Growed.propTypes = {
  children: PropTypes.node,
}

const GrowedItem = (props) => {
  const classes = cx(
    'growed__item', 
    props.grow && `growed__item--${ props.grow }`,
  )

  return (
    <div className={ classes }>
      { props.children }
    </div>
  )
}

GrowedItem.propTypes = {
  grow: PropTypes.number,
  children: PropTypes.node,
}

export {
  Growed,
  GrowedItem,
}