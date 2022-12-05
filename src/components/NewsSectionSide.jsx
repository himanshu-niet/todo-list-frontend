import React from 'react'

const NewsSectionSide = ({title,by,cat,News}) => {
  return (
    <>

<div className='row my-3'>
<div className='col-12 col-md-6'>
<img className='img-fluid rounded' src={News} alt="news"/>
</div>
<div className='col-12 col-md-6'>

    
<span style={{color:'#C70D0D',fontWeight:'650',fontSize:'15px'}}>{cat}</span>
<h5 className='h5'>{title}</h5>
<i className='p'>by {by}</i>
</div>

</div>
<hr></hr>

    </>
  )
}

export default NewsSectionSide