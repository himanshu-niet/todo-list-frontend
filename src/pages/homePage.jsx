import React ,{useEffect,useState}from 'react'
import { NavbarPage } from '../components/navbar';
import NewsSection from '../components/newsSection';
import NewsSectionSide from '../components/NewsSectionSide';
import NewsSectionCat from '../components/newsSectionCat';
import Heading from '../components/heading';
import Loading from '../components/Loading'


const HomePage = () => {

  const [newsData, setNews] = useState([]);
  const [artData, artNews] = useState([]);
  const [sportData, sportNews] = useState([]);
  const [loading,setLodding]=useState(true);

  

  


  useEffect(() => {



    function getTopNew(){
     fetch(`https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=71b83723fbe341738cfd2a8400c63d10`)
      .then((response) => response.json())
      .then((data) => {
       setNews(data['articles'].slice(0,10));
      })
      .catch((err) => {
         console.log(err.message);
      });
    }
    
    function getArtNews(){
     fetch(`https://newsapi.org/v2/everything?q=art&apiKey=71b83723fbe341738cfd2a8400c63d10`)
           .then((response) => response.json())
           .then((data) => {
            artNews(data['articles'].slice(0,10));
            
           })
           .catch((err) => {
              console.log(err.message);
           });
    
    }
    
    function getSportNews(){
     fetch(`https://newsapi.org/v2/everything?q=sports&apiKey=71b83723fbe341738cfd2a8400c63d10`)
           .then((response) => response.json())
           .then((data) => {
            sportNews(data['articles'].slice(0,10));
            setLodding(false)
            
            
           })
           .catch((err) => {
              console.log(err.message);
           });
    
    }
    
    

    getTopNew();
    getArtNews();
    getSportNews();
    
    
   
 }, []);




  return (
    <>
  <NavbarPage/>

 { loading ? (<Loading/>) : ( <div className='container'>

<div className='row'>
<div className='col-12  col-lg-6'>
{
  newsData.slice(0, 1).map((item,id)=>{
    return(
      <span key={id}>
      <NewsSection News={item['urlToImage']} title={item['title']} cat={item['author']} by={item['author']}/>
      </span>
    )
  })
}


</div>
<div className='col-12  col-lg-6'>

{
  newsData.slice(1, 4).map((item,id)=>{
    return(
      <span key={id}>
      <NewsSectionSide News={item['urlToImage']} title={item['title']} cat={item['author']} by={item['author']}/>
      </span>
    )
  })
}

</div>
</div>

<div className='row my-3'>

<Heading title={"Arts & Culture"}/>

<div className='row'>
{
  artData.slice(1, 4).map((item,id)=>{
    return(
     
      <div className='col-12 col-md-6 col-lg-4' key={id}>
      <NewsSectionCat News={item['urlToImage']} title={item['title']} cat={item['author']} by={item['author']}/>

</div>
    )
  })
}


</div>

</div>

<div className='row my-3'>

<Heading title={"Sport Update"}/>

<div className='row'>

{
  sportData.slice(1, 4).map((item,id)=>{
    return(
      <div className='col-12 col-md-6 col-lg-4' key={id}>
      <NewsSectionCat News={item['urlToImage']} title={item['title']} cat={item['author']} by={item['author']}/>

</div>
    )
  })
}
</div>

</div>

</div> )}
    </>
  )
}

export default HomePage