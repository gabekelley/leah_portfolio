import React from 'react';
import { Link } from 'gatsby';

class ProjectMenuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const products = this.props.products
        const illustrations = this.props.illustrations

        return ( 
            <ul>
            <h3>Product + Design</h3>
            {products.map(({ node }) => {
                const title = node.frontmatter.title || node.fields.slug
                return (
                    <li>
                        <Link key={node.fields.slug} to={`/projects${node.fields.slug}`}>
                            {title}
                        </Link>
                    </li>
                )
              })}
              <h3>Illustrations</h3>
              {illustrations.map(({ node }) => {
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