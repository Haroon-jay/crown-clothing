import React from 'react'
import "./shop.scss"
import { Route } from 'react-router-dom'

import {connect} from "react-redux";
import {  fetchCollectionsStart } from "../../redux/shop/shopActions"

import CollectionOverviewContainer from '../../components/collections-overview/collection-overview-container'

import CollectionPageContainer from '../collection/collection-container';

class ShopPage extends React.Component {

 

  componentDidMount() {
    console.log("shop component")
   const {fetchCollectionsStart}=this.props
  fetchCollectionsStart()
  }

  render() {
    const { match } = this.props;
  
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
         component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
 fetchCollectionsStart:()=>dispatch(fetchCollectionsStart())
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);

