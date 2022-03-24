import React from 'react'

const Clock = () => {
  return (
    <div>
        <h1>{new Date().toLocaleDateString()}</h1>
    </div>
  )
}

export default Clock