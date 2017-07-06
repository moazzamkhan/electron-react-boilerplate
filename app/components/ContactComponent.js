import React from 'react'
import PropertyListRenderer from './PropertyListRenderer'
import data from './contact-data.json'

const ContactComponent = (props) => {
  return (<PropertyListRenderer {...props} title='Contact Information' properties={data} />)
}

ContactComponent.propTypes = {}

export default ContactComponent;
