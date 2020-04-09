import React from "react";
import "./collection.styles.scss";
import CollectionItem from "../../components/collection-items/collection-item.component";
import {selectSpecificCollection} from "../../redux/collection/collection.selectors";
import {connect} from "react-redux";


const CollectionPage = ({collection}) => (
    <div className="collection-page">
    <h1 className="title">{collection.title}</h1>
    <div className="items">
    {collection.items.map(item => (
    <CollectionItem key={item.id} item={item}/>
    ))} 
        </div> 
    </div>
);



const mapStateToProps = (state, ownProps) => ({
    collection: selectSpecificCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);