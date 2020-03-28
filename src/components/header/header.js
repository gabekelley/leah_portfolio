import React from 'react';
import { Link } from 'gatsby';
import headerStyles from './header.module.css';
import ProjectMenu from '../project-menu/project-menu.js';

class Header extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() { 
        const { location } = this.props
        const aboutPath = `${__PATH_PREFIX__}/about/`
        const products = this.props.products
        const illustrations = this.props.illustrations

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

        return ( 
            <div className={headerStyles.container}>
                <ProjectMenu products={products}
                            illustrations={illustrations} />
                <Link to="/">Leah Schmidt</Link>
                <div className={headerStyles.thirdcolumn}>
                    {thirdColumn}
                </div>
            </div>
         );
    }
}
 
export default Header;