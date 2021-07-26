import React from 'react'
import "./collections-overview.scss"
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from "../preview/Preview"
import {selectCollectionForPreview} from "../../redux/shop/shop.selector"
const CollectionsOverview = ({collections}) => {
    return (
        <div className="collections-overview">
              {
            collections.map(({id,...otherProps})=>(
                              
                <CollectionPreview key={id} {...otherProps} />
                
            ))
        }
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    collections:selectCollectionForPreview
})
export default connect(mapStateToProps)(CollectionsOverview)
