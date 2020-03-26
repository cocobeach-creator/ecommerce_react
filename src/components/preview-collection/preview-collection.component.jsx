import React from "react";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-items/collection-item.component";

const PreviewCollection = ({title, items}) => (
    <div className="preview-collection">
        <h1 className="title">{title}</h1>
        <div className="preview">
        {items
        .filter((item, idx) => idx<4)
        .map(({id, ...otheritemProps}) => (
            <CollectionItem key={id} {...otheritemProps}/>
        ))}
        </div>
    </div>
)

export default PreviewCollection;