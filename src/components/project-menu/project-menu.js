import React from 'react';
import './project-menu.css';

class ProjectMenu extends React.Component {
    render() { 
        var visibility = 'hide';

        if (this.props.visibility) {
            visibility = 'show';
        }

        return ( 
            <div role="menu" tabIndex={0} id="slidemenu" onMouseDown={this.props.handleMouseDown} className={visibility}>
                <ul>
                    <li>
                        <a href="/">Link</a>
                    </li>
                    <li>
                        <a href="/">Link</a>
                    </li>
                    <li>
                        <a href="/">Link</a>
                    </li>
                </ul>
            </div>
         );
    }
}
 
export default ProjectMenu;