import React from "react";
import "./directory.styles.scss";
import MenuItem from "../menu-item/menu-item.component";
import {connect} from "react-redux";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";


const Directory = ({sections}) => (
            <div className="directory-menu">
                {
                    sections.map(({ title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} image={imageUrl} size={size}/>
                    ))
                }
            </div>
            )


const mapStateToProps = state => ({
sections: selectDirectorySections(state)
});


export default connect(mapStateToProps)(Directory);