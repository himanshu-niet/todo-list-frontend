import React from 'react'

const heading = ({title}) => {
  return (
    <div className='row mt-4'>
<div style={{border:'2px solid gray'}}></div>
<div className='col-8 my-3'><span className='h1'>{title}</span></div>
<div className='col-4 my-3' style={{textAlign:'right'}}>See All</div>
</div>
  )
}

export default heading