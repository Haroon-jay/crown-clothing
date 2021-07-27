import { createSelector } from "reselect";
import memoize from 'lodash.memoize';
const COLLECTION_ID_MAP={
    hats:1,
    sneaker:2,
    jackets:3,
    men:5,
    women:4
}
const selectShop=state=>state.shop
export const selectShopCollections=createSelector(
    [selectShop],shop=>shop.collections
)
export const selectCollectionForPreview=createSelector(
    [selectShopCollections],collections=> collections? Object.keys(collections).map(key=>collections[key])
:[])
export const selectCollection= memoize((collectionUrlParam)=>createSelector(
    
    [selectShopCollections],collections=> collections? collections[collectionUrlParam]
:null))