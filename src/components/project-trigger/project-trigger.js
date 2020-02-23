import React from 'react';
import './project-trigger.css';

class ProjectTrigger extends React.Component {
    render() { 
        return ( 
            <button className="trigger" id="menu-button" onMouseDown={this.props.handleMouseDown}>
                >
            </button>
         );
    }
}

export default ProjectTrigger;