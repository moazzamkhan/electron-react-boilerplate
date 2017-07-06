import React from 'react'
import PropertyListRenderer from './PropertyListRenderer'
import data from './events-data.json'

const EventsComponent = (props) => {
  return (<PropertyListRenderer {...props} title='Events' properties={data} />)
}

EventsComponent.propTypes = {}

export default EventsComponent
