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
 
  const getCategoryQuery = (categoryQuery) => {
    setQuery(categoryQuery)
  }
  /* const fetchData = async () => {
    setLoading(true)
    const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=020fada4ee15a8b88e543fb1552ac0ac&tags=${query}&per_page=24&format=json&nojsoncallback=1`);
    const responseData = await response.json();

    setImages(responseData.photos.photo)
    setLoading(false)
  } 

  useEffect(() => {
    fetchData()
  }, [query]) */

/* const client = createClient('563492ad6f917000010000019674aa0fd7744dc4ab17a2cf568a1d16');
const quer = 'Nature';

useEffect(() => {
  console.log("hello")
  client.photos.search({ quer, per_page: 1 }).then(photos => {
  setImages(photos.photos.small)
  console.log(photos.photos.small)
})
.catch(error => console.log(error))
},[])

 */
const page = 1
const perPage = 32


useEffect(() => {
  const options = {
	method: 'GET',
	headers: {
		Authorization: '563492ad6f917000010000019674aa0fd7744dc4ab17a2cf568a1d16',
		'X-RapidAPI-Key': '1dd4d52b8fmsh21ff7141d5a5affp19fc01jsn2865e02b10c4',
		'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
	}
};

fetch(`https://pexelsdimasv1.p.rapidapi.com/v1/search?query=${query}&locale=en-US&per_page=${perPage}&page=1${page}`, options)
	.then(response => response.json())
	.then(response => {
    console.log(response.photos)
    setImages(response.photos)
  })
	.catch(err => console.error(err));
},[query])

  
  return (
    <div className="App">
      
      <Header />
      <SnapForm getCategoryQuery={getCategoryQuery} />
      <Categories getCategoryQuery={getCategoryQuery} />
      <DispalyImages isLoading={loading} query={query} imgs={images}   />
     
    </div>
  );
}

export default App;
