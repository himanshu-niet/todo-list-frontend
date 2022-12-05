import React from 'react'

const NewsSection = ({title,by,cat,News}) => {
  return (
    <>

<div className='row my-3'>
<div className='col-12'>
<img className='img-fluid rounded' src={News} alt="news"/>

<h6 className='h6 font-weight-bold my-3' style={{fontWeight:'650',color:'#C70D0D'}}>{cat}</h6>
<h2 className='h2' style={{maxWidth:'74%',color:'#131313',fontWeight:'650'}}>{title}</h2>
<i className='h6 my-3'>by {by}</i>
</div>
</div>

    </>
  )
}

export default NewsSection