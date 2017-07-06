import React from 'react'
import PropertyListRenderer from './PropertyListRenderer'
import data from './profile-data.json'

const ProfileComponent = (props) => {
  return (<PropertyListRenderer {...props} title='Profile Information' properties={data} />)
}

ProfileComponent.propTypes = {}

export default ProfileComponent
