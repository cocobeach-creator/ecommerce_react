import React from "react";
import PreviewCollection from "../preview-collection/preview-collection.component";
import {connect} from "react-redux";
import {selectCollectionsForPreview} from "../../redux/collection/collection.selectors";
import {createStructuredSelector} from "reselect";

const CollectionOverview = ({ collections }) => (
        <div>
            {
                collections.map(({id, ...otherCollectionProps}) =>(
                    <PreviewCollection key={id} {...otherCollectionProps} />
                ))
            }
        </div>
        );

const mapStateToProps = createStructuredSelector({
collections: selectCollectionsForPreview
});
    

export default connect(mapStateToProps)(CollectionOverview);