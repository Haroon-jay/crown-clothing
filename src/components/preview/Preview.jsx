import React from 'react'
import "./preview.scss"
import CollectionItem from '../collectionItem/CollectionItem'
const Preview = ({title,items}) => {
    console.log(title,items)
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div style={{display:"flex",flexWrap:"wrap"}} className='preview'>
        {
            items.filter((item,i)=>i<4).map((item)=>(
                <CollectionItem style={{display:"flex"}} key={item.id} item={item} /> 
            ))
        }
            </div>
        </div>
       
    )
}

export default Preview
