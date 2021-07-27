import React from 'react'
import "./collection.scss"
import CollectionItem from '../../components/collectionItem/CollectionItem'
import { selectCollection } from '../../redux/shop/shop.selector'
import {connect } from "react-redux"
const Collection = ({match,collection}) => {
    console.log(collection)
    let title;
    let items
    if(collection) {
        title=collection.title
        items=collection.items
    }
    else{
        return <div>No Items found with the specified url</div>
    }

    return (
        <div className="collection-page">
            <h2 className="title"> {title} </h2>
            <div className="items">
{
    items.map(item=><CollectionItem key={item.id} item={item}/>)
}
            </div>
        </div>
    )
}

const mapStateToProps=(state,ownProps)=>{
    
return{
    collection:selectCollection(ownProps.match.params.collectionId)
    (state)
}
}
export default connect(mapStateToProps)(Collection)
