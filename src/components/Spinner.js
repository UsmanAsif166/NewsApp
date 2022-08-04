import React from 'react'
import loading from './assets/loading.gif'
const spinner = () => {

  return (
    <div className='text-center'>
      <img className='my-3' src={loading} alt="Loading" />
    </div>
  )

}

export default spinner