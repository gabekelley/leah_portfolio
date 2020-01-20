import React from 'react';
import { Link } from 'gatsby';
import headerStyles from './header.module.css';

class Header extends React.Component {
    render() { 
        return ( 
            <div className={headerStyles.container}>
                <div className="menu">
                    |||
                </div>
                <div className="leah-logo">
                    Leah Schmidt
                </div>
                <div className="link">
                    <Link to='/about/'>About</Link>
                </div>
            </div>
         );
    }
}
 
export default Header;