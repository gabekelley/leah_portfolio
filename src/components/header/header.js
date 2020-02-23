import React from 'react';
import { Link } from 'gatsby';
import headerStyles from './header.module.css';
import ProjectMenu from '../project-menu/project-menu.js';
import ProjectTrigger from '../project-trigger/project-trigger.js';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
        
        this.state = {
            visible: false
        }

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }

    handleMouseDown(e) {
        this.toggleMenu();
     
        console.log("clicked");
        e.stopPropagation();
      }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() { 
        const { location } = this.props
        const aboutPath = `${__PATH_PREFIX__}/about/`
        const projects = this.props.projects

        let thirdColumn

        if (location.pathname === aboutPath) {
            thirdColumn = (
                <div className="link">
                    About page links
                </div>
            )
        } else {
            thirdColumn = (
                <div className="link">
                    <Link to='/about/'>About</Link>
                </div>
            )
        }

        console.log(thirdColumn)

        return ( 
            <div className={headerStyles.container}>
                <ProjectTrigger handleMouseDown={this.handleMouseDown} />
                <ProjectMenu handleMouseDown={this.handleMouseDown}
                            visibility={this.state.visible}
                            projects={projects} />
                <Link to="/">Leah Schmidt</Link>
                <div className={headerStyles.thirdcolumn}>
                    {thirdColumn}
                </div>
            </div>
         );
    }
}
 
export default Header;