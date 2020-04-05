import React from 'react';
import './styles.scss';

class Billboard extends React.Component {
    render() { 
        const patterns = this.props.patterns
        return ( 
            <div className="billboard">
                {patterns.map(({ node }) => {
                    return (
                        <div className="billboard__container" style={{backgroundImage: `url("${node.childImageSharp.fluid.src}")`}}></div>
                    )
                })}
            </div>
         );
    }
}
 
export default Billboard;