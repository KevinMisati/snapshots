import React,{useState,useEffect,useCallback} from 'react';
import './App.css';
import Header from "./Components/Header";
import Categories from "./Components/Categories"
import SnapForm from "./Components/SnapForm"
import DispalyImages from "./Components/DisplayImages"


function App () {
  const [images, setImages] = useState([])
  const [query,setQuery] = useState("food")
  
  
  
  const getCategoryQuery = (categoryQuery) => {
    setQuery(categoryQuery)
  }
  
  

  const getImages = (img,query) => {
    console.log(img)
    setQuery(query)
    setImages(img)
    console.log(img)
  }
  return (
    <div className="App">
      <Header />
      <SnapForm categoryQuery={query} getImages={getImages} />
      <Categories getCategoryQuery={getCategoryQuery} />
      <DispalyImages imageCategory={query} images={images} />
    </div>
  );
}

export default App;
