import React from 'react'
import PropertyListRenderer from './PropertyListRenderer'
import data from './social-data.json'

const SocialComponent = (props) => {
  return (<PropertyListRenderer {...props} title='Social Account' properties={data} />)
}

SocialComponent.propTypes = {}

export default SocialComponent
