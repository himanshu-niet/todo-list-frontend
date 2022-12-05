import React from 'react'
import { Dna } from  'react-loader-spinner'

const Loading = () => {
  return (
    <div className='container'>
<div className='row'>
    <div className='col-12 col-md-8 col-lg-6 mx-auto text-center mt-5'>
    <Dna
    visible={true}
    height="50%"
    width="50%"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
  />
    </div>
    </div>
    </div>
  )
}

export default Loading