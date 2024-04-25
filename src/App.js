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
    setPage(1)
  }
  
  const addPage = () => {
    console.log("hello world")
    setPage(prev => prev + 1)
  }
const perPage = 32
const pexelsKey = process.env.REACT_APP_PEXELS_KEY
const rapidKey = "hXTXNv15wHUVVPqKkjVMhVCDqFgpGpqCErZoKKg8DydBVgQdN1QSUoff"

const options = {
	method: 'GET',
	headers: {
		Authorization:"hXTXNv15wHUVVPqKkjVMhVCDqFgpGpqCErZoKKg8DydBVgQdN1QSUoff",
	}
};
useEffect(() => {
  setLoading(true)
  fetch(`https://api.pexels.com/v1/search?query=${query}&per_page=${perPage}&page=${page}`, options)
	.then(response => response.json())
	.then(response => {
    console.log(response.photos,"hello resp")
    if(page > 1){
      setImages((prev) => [...prev,...response.photos])
    }
    else{
      response.photos && setImages(response.photos)
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
