import React,{useContext} from 'react'
import classes from "./DisplayImages.module.css"
import SingleImage from "./SingleImage"

const DisplayImages = ({query,imgs}) => {

    return (
        <div className={classes["images-container"]}>
            <h2>{query} Images</h2>
            <div className={classes.images}>
                {imgs.map((image) => {
                    return <SingleImage image={image} />
                }) } 
                 
            </div>
        </div>
    )
}

export default DisplayImages
