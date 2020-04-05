import React from "react";
import './styles.scss';

class ProjectGrid extends React.Component {
  render() {
    const spots = this.props.spots
    
    return (
      <div className="index-container">
        {spots.map(({ node }) => {
          return (
            <div className="box">
              <img key={node.id} alt={node.id} src={node.childImageSharp.fluid.src} />
            </div>
          )
          })}
      </div>
    )
  }
}


export default ProjectGrid

