import React from 'react';
import { Link } from 'gatsby';
import './project-menu-list.css';

class ProjectMenuList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const products = this.props.products
        const illustrations = this.props.illustrations

        return ( 
            <ul className="project-menu-list">
                <div className="project-menu__product">
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
                </div>
                <div className="project-menu__illustration">
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
                </div>
            </ul>
        );
    }
}
 
export default ProjectMenuList;