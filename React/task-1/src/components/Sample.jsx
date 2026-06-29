import React from 'react'

const date=new Date()
const Sample = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <h1>{date.getDay()}</h1>
    </div>
  )
}

export default Sample
