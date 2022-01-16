import React,{useState,useEffect} from 'react';
import './App.css';
import Header from "./Components/Header";
import Categories from "./Components/Categories"
import SnapForm from "./Components/SnapForm"
import DispalyImages from "./Components/DisplayImages"

function App () {
  const [query,setQuery] = useState("food")
  const [images,setImages] = useState([])
 
  const getCategoryQuery = (categoryQuery) => {
    setQuery(categoryQuery)
  }
  const fetchData = async () => {
    const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=020fada4ee15a8b88e543fb1552ac0ac&tags=${query}&per_page=24&format=json&nojsoncallback=1`);
    const responseData = await response.json();

    setImages(responseData.photos.photo)
  } 

  useEffect(() => {
    fetchData()
  }, [query])

  
  return (
    <div className="App">
      
      <Header />
      <SnapForm getCategoryQuery={getCategoryQuery} />
      <Categories getCategoryQuery={getCategoryQuery} />
      <DispalyImages query={query} imgs={images}   />
     
    </div>
  );
}

export default App;
