import React from 'react';
import './styles.scss';
import Menu from '../../assets/menu.svg';

class ProjectTrigger extends React.Component {
    render() { 
        return ( 
            <button className={`trigger ${this.props.className}`} id="menu-button" onMouseDown={this.props.handleMouseDown}>
                <Menu />
            </button>
         );
    }
}

export default ProjectTrigger;