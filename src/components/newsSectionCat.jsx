import React from 'react'

const NewsSectionCat = ({title,cat,by,News}) => {
  return (
    <>

<div className='row my-3'>
<div className='col-12'>
<img className='img-fluid' src={News} alt="news"/>

<div className='container-fluid'>
<span className='my-3' style={{color:'#C70D0D',fontWeight:'650',fontSize:'15px'}}>{cat}</span>
<h5 className='h5 my-2'>{title}</h5>
<i className='p'>by {by}</i>
</div>
</div>
</div>

    </>
  )
}

export default NewsSectionCat