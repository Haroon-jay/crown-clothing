import React,{useEffect,useState} from 'react'
import "./shop.scss"
import CollectionsOverview from '../../components/collections-overview/CollectionsOverview'
import { Route } from 'react-router-dom'
import Collection from '../collection/Collection'
import {fireStore,convertCollectionsSnapshotToMap} from "../../firebase/firebase"
import {connect} from "react-redux";
import { updateCollections } from "../../redux/shop/shopActions"
import WithSpinner from '../../components/with-spinner/WithSpinner'
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(Collection);
class ShopPage extends React.Component {
  state = {
    loading: true
  };

  unsubscribeFromSnapshot = null;

  componentDidMount() {
    console.log("shop component")
    const { updateCollections } = this.props;
    const collectionRef = fireStore.collection('collections');
 
   this.unsubscribeFromSnapshot= collectionRef.onSnapshot(snap=>{
     const collectionsMap= convertCollectionsSnapshotToMap(snap)
     updateCollections(collectionsMap)
     this.setState({loading:false})
    })
    // collectionRef.get().then(async snapshot => {
    // //  console.log(await snapshot.data())
    //   const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => (
            <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => (
            <CollectionPageWithSpinner isLoading={loading} {...props} />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap =>dispatch(updateCollections(collectionsMap))
});

export default connect(
  null,
  mapDispatchToProps
)(ShopPage);

