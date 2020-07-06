import React from 'react'

const Image = ({ image }) => {
  return (
    <img
      className='single-photo'
      src={image.urls.thumb}
      alt={image.alt_description || ''}
    />
  )
}

export default Image
