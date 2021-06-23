import React,{useEffect} from 'react'
import classes from "./Categories.module.css"

const Categories = ({ getCategoryQuery }) => {
    
    
    return (
        <>
            <ul className={classes["category-list"]}>
                <li><button onClick={() =>{getCategoryQuery("Mountains")}}>Mountains</button></li>
                <li><button onClick={() =>{getCategoryQuery("Beaches")}}>Beaches</button></li>
                <li><button onClick={() =>{getCategoryQuery("Birds")}}>Birds</button></li>
                <li><button onClick={() =>{getCategoryQuery("Food")}}>Food</button></li>
            </ul>
        </>
    )
}

export default Categories
