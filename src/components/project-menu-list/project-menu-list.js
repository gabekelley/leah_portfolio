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
            <div>
            {projects.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                  <div key={node.fields.slug}>
                    <h3>
                      <Link to={`projects${node.fields.slug}`}>
                        {title}
                      </Link>
                    </h3>
                  </div>
                )
              })}
        </div>
        );
    }
}
 
export default ProjectMenuList;