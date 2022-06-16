import React,{useState,useEffect} from 'react';
import './App.css';
 import { createClient } from 'pexels';
import Header from "./Components/Header";
import Categories from "./Components/Categories"
import SnapForm from "./Components/SnapForm"
import DispalyImages from "./Components/DisplayImages"

function App () {
  const [query,setQuery] = useState("food")
  const [images,setImages] = useState([])
  const [loading,setLoading] = useState(false)
  const [page,setPage] = useState(1)
 
  const getCategoryQuery = (categoryQuery) => {
    setQuery(categoryQuery)
  }
  
  const addPage = () => {
    console.log("hello world")
    setPage(prev => prev + 1)
  }
const perPage = 32

const options = {
	method: 'GET',
	headers: {
		Authorization: '563492ad6f917000010000019674aa0fd7744dc4ab17a2cf568a1d16',
		'X-RapidAPI-Key': '1dd4d52b8fmsh21ff7141d5a5affp19fc01jsn2865e02b10c4',
		'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
	}
};
useEffect(() => {
  setLoading(true)
fetch(`https://pexelsdimasv1.p.rapidapi.com/v1/search?query=${query}&locale=en-US&per_page=${perPage}&page=${page}`, options)
	.then(response => response.json())
	.then(response => {
    //console.log(response.photos)
    if(page > 1){
      setImages((prev) => [...prev,...response.photos])
    }
    else{
      setImages(response.photos)
    }
    setLoading(false)
    
  })
	.catch(err => console.error(err));
},[query,page]) 


  
  return (
    <div className="App">
      
      <Header />
      <SnapForm getCategoryQuery={getCategoryQuery} />
      <Categories getCategoryQuery={getCategoryQuery} />
      <DispalyImages addPage={addPage} isLoading={loading} query={query} imgs={images}   />
      <div className='top'>
        <a href="#top">
            <i class="fa-solid fa-angle-up fa-lg"></i>
        </a>
            </div>
    </div>
  );
}

export default App;
