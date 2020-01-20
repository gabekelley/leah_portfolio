import React from 'react';
import { Link } from 'gatsby';
import headerStyles from './header.module.css';
import ProjectMenu from '../project-menu/project-menu.js';

class Header extends React.Component {
    render() { 
        const { location } = this.props
        const aboutPath = `${__PATH_PREFIX__}/about/`

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
                <ProjectMenu />
                <Link to="/">Leah Schmidt</Link>
                <div>
                    {thirdColumn}
                </div>
            </div>
         );
    }
}
 
export default Header;