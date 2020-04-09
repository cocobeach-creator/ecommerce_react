import {createSelector} from "reselect";

// NOT NEEDED ANYMORE:
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     women: 4,
//     men: 5
// }

const selectCollection = state => state.collection;

export const selectCollections = createSelector(
    [selectCollection],
    collection => collection.collections
);

export const selectCollectionsForPreview = createSelector(
   [selectCollections],
   collections =>  Object.keys(collections).map(key => collections[key])
);

export const selectSpecificCollection = collectionUrlParam =>
createSelector(
    [selectCollections],
    collections => collections[collectionUrlParam]
);