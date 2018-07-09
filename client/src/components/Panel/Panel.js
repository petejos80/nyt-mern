import React from "react";

const Panel = props => (
    <div className="panel panel-default">
        <div className="panel-heading">
            {props.header}
        </div>
        {props.panelBody ? <div className="panel-body">{props.children}</div> : <div>{props.children}</div> }
    </div>
);

export default Panel;