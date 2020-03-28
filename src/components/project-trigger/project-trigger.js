import React from 'react';
import './project-trigger.css';
import Icon from '../../assets/menu.svg';

class ProjectTrigger extends React.Component {
    render() { 
        return ( 
            <button className={`trigger ${this.props.className}`} id="menu-button" onMouseDown={this.props.handleMouseDown}>
                <img src={Icon} alt="menu button" />
            </button>
         );
    }
}

export default ProjectTrigger;