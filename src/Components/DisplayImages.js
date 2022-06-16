import React,{useContext} from 'react'
import classes from "./DisplayImages.module.css"
import SingleImage from "./SingleImage"

const DisplayImages = ({query,imgs,isLoading}) => {

    return (
        <div className={classes["images-container"]}>
            <h2>{query} Images</h2>
            {isLoading && <h4>Loading...</h4>}
            <div className={classes.images}>
                {imgs.map((image) => {
                    return <SingleImage image={image.src.large} />
                }) } 
                
            </div>
            
        </div>
    )
}

export default DisplayImages
