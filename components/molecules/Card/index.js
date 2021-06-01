import React from 'react'
import PropTypes from 'prop-types'

import './styles.scss'

export default function Card({ url, heading, description }) {
  return (
    <a href={url} className="card">
      <h2 className="card__heading">{heading}</h2>
      <p className="card__description">{description}</p>
    </a>
  )
}

Card.propTypes = {
  url: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}
