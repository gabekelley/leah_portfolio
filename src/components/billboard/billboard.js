import React from 'react';
import './styles.scss';
import Icon from '../../assets/leah-logo.svg';

class Billboard extends React.Component {
    render() { 
        const patterns = this.props.patterns
        return ( 
            <div className="billboard">
                {patterns.map(({ node }) => {
                    return (
                        <div className="billboard__container" style={{backgroundImage: `url("${node.childImageSharp.fluid.src}")`}}>
                            <Icon />
                        </div>
                    )
                })}
            </div>
         );
    }
}
 
export default Billboard;