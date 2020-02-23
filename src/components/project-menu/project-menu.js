import React from 'react';
import ProjectMenuList from '../project-menu-list/project-menu-list.js';
import './project-menu.css';

class ProjectMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() { 
        var visibility = 'hide';

        if (this.props.visibility) {
            visibility = 'show';
        }

        const projects = this.props.projects

        return ( 
            <div role="menu" tabIndex={0} id="slidemenu" onMouseDown={this.props.handleMouseDown} className={visibility}>
                <ProjectMenuList projects={projects} />
            </div>
         );
    }
}
 
export default ProjectMenu;