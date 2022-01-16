import React from 'react'
import classes from "./Categories.module.css"

const Categories = ({getCategoryQuery}) => {
    const handleClick =(e) => {
        e.preventDefault()
        getCategoryQuery(e.target.value)
    }
    return (
        <>
            <ul className={classes["category-list"]}>
                <li>
                    <button value="Mountains" onClick={handleClick}>Mountains</button>
                </li>
                <li>
                    <button value="Lakes"  onClick={handleClick}>Lakes</button>
                </li>
                <li>
                    <button value="Birds"  onClick={handleClick}>Birds</button>
                </li>
                <li>
                    <button value="Forests" onClick={handleClick}>Food</button>
                </li>
            </ul>
        </>
    )
}

export default Categories
