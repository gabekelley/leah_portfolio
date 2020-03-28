import React from 'react';
// import ProjectMenuList from '../project-menu-list/project-menu-list.js';
import './project-menu.css';
import MenuButton from '../project-trigger/project-trigger.js';

class ProjectMenu extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            visible: false
        }

        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();

        console.log('clicked');
        e.stopPropagation();
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() { 
        
        // const illustrationProjects = this.props.illustrations
        // const productProjects = this.props.products

        return ( 
            <div>
                <MenuButton handleMouseDown={this.handleMouseDown} />
                <ProjectMenuList products={productProjects} illustrations={illustrationProjects} />
            </div>
         );
    }
}
 
export default ProjectMenu;