import React from 'react';
import billboardStyles from './billboard.module.css';

class Billboard extends React.Component {
    render() { 
        const patterns = this.props.patterns
        return ( 
            <div className={billboardStyles.billboard}>
                {patterns.map(({ node }) => {
                    return (
                        <div className={billboardStyles.container} style={{backgroundImage: `url("${node.childImageSharp.fluid.src}")`}}></div>
                    )
                })}
            </div>
         );
    }
}
 
export default Billboard;