import React from 'react';
import { Link } from 'gatsby';

class ProjectMenuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const projects = this.props.projects
        return ( 
            <ul>
            {projects.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                    <li>
                        <Link key={node.fields.slug} to={`/projects${node.fields.slug}`}>
                            {title}
                        </Link>
                    </li>
                )
              })}
            </ul>
        );
    }
}
 
export default ProjectMenuList;