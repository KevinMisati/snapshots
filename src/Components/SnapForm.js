import React,{useState,useEffect} from 'react'
import SearchIcon from "./SearchIcon"
import classes from "./SnapForm.module.css"
import SingleImage from "./SingleImage"
import DisplayImages from './DisplayImages'

const SnapForm = ({ getImages,categoryQuery }) => {

    const [images, setImages] = useState([])
    const [query,setQuery] = useState("food")
    const [userInput,setUserInput] = useState("")


    const fetchData = async () => {
        const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=020fada4ee15a8b88e543fb1552ac0ac&tags=${query}&per_page=24&format=json&nojsoncallback=1`);
        const responseData = await response.json();

        setImages(responseData.photos.photo)
        getImages(responseData.photos.photo, query)

    } 
    useEffect(() => {
        
        fetchData()
    },[userInput]) 
    

    const handleInputChange = (e) => {
        setUserInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(userInput)
        fetchData()
    }
    return (
        <>
            <form onSubmit={handleSubmit} className={classes.form}>
            <input onChange={handleInputChange} value={userInput} type="text" />
            <button >
                <SearchIcon />
                </button>
            </form>
         </>
    )
}

export default SnapForm
