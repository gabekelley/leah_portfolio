import React from 'react';
import ProjectMenuList from '../project-menu-list/project-menu-list.js';
import './project-menu.css';

class ProjectMenu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}

        this.setWrapperRef = this.setWrapperRef.bind(this);
        this.handleClickOutside = this.handleClickOutside.bind(this);
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    componentWillUnmount() {
        document.addEventListener('mousedown', this.handleClickOutside)
    }

    setWrapperRef(node) {
        this.wrapperRef = node;
    }

    handleClickOutside(e) {
        if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
            alert('clicked outside');
        }
    }

    render() { 
        var visibility = 'hide';

        if (this.props.visibility) {
            visibility = 'show';
        }

        const projects = this.props.projects

        return ( 
            <div role="menu" ref={this.setWrapperRef} tabIndex={0} id="slidemenu" className={visibility}>
                <ProjectMenuList projects={projects} />
            </div>
         );
    }
}
 
export default ProjectMenu;