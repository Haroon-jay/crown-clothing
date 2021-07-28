import {connect} from "react-redux"
import { compose } from "redux"
import { createStructuredSelector } from "reselect" 
import { selectIsCollectionLoading } from '../../redux/shop/shop.selector'
import WithSpinner from "../../components/with-spinner/WithSpinner"
import Collection from "./Collection"
const mapStateToProps=createStructuredSelector({
    isLoading:(state)=>!selectIsCollectionLoading(state)
})
const CollectionPageContainer=compose(
    connect(mapStateToProps),
    WithSpinner
)(Collection)
export default CollectionPageContainer