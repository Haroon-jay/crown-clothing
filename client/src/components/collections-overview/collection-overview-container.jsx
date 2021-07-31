import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selector";
import { compose } from "redux";
import WithSpinner from "../with-spinner/WithSpinner";

import CollectionsOverview from "./CollectionsOverview";
const mapStateToProps=createStructuredSelector({
    isLoading:selectIsCollectionFetching
})

export default connect(mapStateToProps)(WithSpinner(CollectionsOverview))
